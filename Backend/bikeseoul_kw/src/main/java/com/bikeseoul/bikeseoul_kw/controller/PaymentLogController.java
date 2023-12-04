package com.bikeseoul.bikeseoul_kw.controller;

import com.bikeseoul.bikeseoul_kw.container.*;
import com.bikeseoul.bikeseoul_kw.manager.PaymentLogManager;
import com.bikeseoul.bikeseoul_kw.manager.TicketManager;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.time.format.DateTimeFormatter;
import java.util.HashMap;
import java.util.List;

@RestController
public class PaymentLogController {
    @Autowired
    private PaymentLogManager paymentLogManager;

    @Autowired
    private TicketManager ticketManager;

    DateTimeFormatter dtf_kor = DateTimeFormatter.ofPattern("YYYY년 MM월 dd일 HH:mm:ss");
    DateTimeFormatter dtf_ymd = DateTimeFormatter.ofPattern("YYYY-MM-dd");
    DateTimeFormatter dtf = DateTimeFormatter.ofPattern("YYYY-MM-dd HH:mm:ss");

    @GetMapping("/rest/service/getPaymentLogList")
    @ResponseBody
    public String getPaymentLogList(HttpServletRequest request) {
        JsonObject jo = new JsonObject();
        HttpSession hs = request.getSession();
        Member mem = (Member)hs.getAttribute("member");
        if(mem == null) {
            jo.addProperty("result", "failed");
            return jo.toString();
        }
        int member_uid = mem.getUid();

        JsonArray ja = new JsonArray();

        try {
            List<Pair<PaymentLog, PaymentMethod>> paymentLogList = paymentLogManager.getPaymentLogList(member_uid);
            if (paymentLogList == null) {
                jo.addProperty("result", "failed");
                return jo.toString();
            }
            for (Pair<PaymentLog, PaymentMethod> pair: paymentLogList) {
                JsonObject item = new JsonObject();
                Pair<Ticket, Ticket_detail> ticketPair = ticketManager.getTicketDetailInfo(pair.getFirst().getTicket_detail_uid());
                Ticket ticket = ticketPair.getFirst();
                item.addProperty("uid", pair.getFirst().getUid());
                item.addProperty("user_id", pair.getFirst().getUser_id());
                item.addProperty("method_uid", pair.getFirst().getMethod_uid());
                item.addProperty("amount", pair.getFirst().getAmount());
                item.addProperty("ticket_detail_uid", pair.getFirst().getTicket_detail_uid());
                item.addProperty("status_", pair.getFirst().getStatus_().toString());
                item.addProperty("log_created_date", pair.getFirst().getCreated_date().format(dtf_kor));
                item.addProperty("log_updated_date", pair.getFirst().getUpdated_date().format(dtf_kor));
                item.addProperty("method_name", pair.getSecond().getMethod_name());
                item.addProperty("method_created_date", pair.getSecond().getCreated_date().format(dtf_kor));
                item.addProperty("ticket_type", ticket.getTicket_type().toString());
                item.addProperty("hours", ticket.getHours().toString());
                item.addProperty("cost", ticket.getCost());
                ja.add(item);
            }
            jo.addProperty("result", "success");
            jo.add("data", ja);
            return jo.toString();
        } catch (Exception e) {
            jo.addProperty("result", "failed");
            return jo.toString();
        }
    }
    @GetMapping("/rest/service/getRefundLogList")
    @ResponseBody
    public String getRefundLogList(HttpServletRequest request) {
        JsonObject jo = new JsonObject();
        HttpSession hs = request.getSession();
        Member mem = (Member)hs.getAttribute("member");
        if(mem == null) {
            jo.addProperty("result", "failed");
            return jo.toString();
        }
        int member_uid = mem.getUid();

        JsonArray ja = new JsonArray();

        try {
            List<Pair<PaymentLog, PaymentMethod>> paymentLogList = paymentLogManager.getRefundLogList(member_uid);
            if (paymentLogList == null) {
                jo.addProperty("result", "failed");
                return jo.toString();
            }
            for (Pair<PaymentLog, PaymentMethod> pair: paymentLogList) {
                JsonObject item = new JsonObject();
                Pair<Ticket, Ticket_detail> ticketPair = ticketManager.getTicketDetailInfo(pair.getFirst().getTicket_detail_uid());
                Ticket ticket = ticketPair.getFirst();
                item.addProperty("uid", pair.getFirst().getUid());
                item.addProperty("user_id", pair.getFirst().getUser_id());
                item.addProperty("method_uid", pair.getFirst().getMethod_uid());
                item.addProperty("amount", pair.getFirst().getAmount());
                item.addProperty("ticket_detail_uid", pair.getFirst().getTicket_detail_uid());
                item.addProperty("status_", pair.getFirst().getStatus_().toString());
                item.addProperty("log_created_date", pair.getFirst().getCreated_date().format(dtf_kor));
                item.addProperty("log_updated_date", pair.getFirst().getUpdated_date().format(dtf_kor));
                item.addProperty("method_name", pair.getSecond().getMethod_name());
                item.addProperty("method_created_date", pair.getSecond().getCreated_date().format(dtf_kor));
                item.addProperty("ticket_type", ticket.getTicket_type().toString());
                item.addProperty("hours", ticket.getHours().toString());
                item.addProperty("cost", ticket.getCost());
                ja.add(item);
            }
            jo.addProperty("result", "success");
            jo.add("paymentLogList", ja);
            return jo.toString();
        } catch (Exception e) {
            jo.addProperty("result", "failed");
            return jo.toString();
        }
    }
    
    @GetMapping("/rest/service/getPaymentMethod")
    public String getPaymentMethod(HttpServletRequest request) {
    	JsonObject jo = new JsonObject();
    	List<PaymentMethod> methods = paymentLogManager.getPaymentMethod();
    	JsonArray ja = new JsonArray();
    	for(PaymentMethod pm : methods) {
    		JsonObject jo_item = new JsonObject();
    		jo_item.addProperty("uid", pm.getUid());
    		jo_item.addProperty("method_name", pm.getMethod_name());
    		ja.add(jo_item);
    	}
    	jo.addProperty("result", "success");
    	jo.add("data", ja);
    	return jo.toString();
    }
    
    @PostMapping("/rest/service/payment")
    public String payment(HttpServletRequest request, @RequestBody HashMap<String, Object> body) {
    	JsonObject jo = new JsonObject();
        HttpSession hs = request.getSession();
        User user = (User)hs.getAttribute("member");
        String gift_email = (String)body.get("gift_email");
        if(gift_email != null) {
        	String email_session = (String)hs.getAttribute("gift_email");
        	if(!email_session.equals(gift_email)) {
        		jo.addProperty("result", "failed");
        		jo.addProperty("msg", "email_not_match");
        		return jo.toString();
        	}
        }
        Integer ticket_uid = (Integer)body.get("ticket_uid");
        Integer payment_method = (Integer)body.get("payment_method"); 
        CommonEnum res = paymentLogManager.payment(user, ticket_uid, payment_method, gift_email);
        if(res == CommonEnum.SUCCESS)
        	jo.addProperty("result", "success");
        else
        	jo.addProperty("result", "failed");
    	return jo.toString();
    }
 
}
