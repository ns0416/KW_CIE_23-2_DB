package com.bikeseoul.bikeseoul_kw.controller;

import com.bikeseoul.bikeseoul_kw.container.CommonEnum;
import com.bikeseoul.bikeseoul_kw.container.Member;
import com.bikeseoul.bikeseoul_kw.container.PaymentLog;
import com.bikeseoul.bikeseoul_kw.container.PaymentMethod;
import com.bikeseoul.bikeseoul_kw.container.User;
import com.bikeseoul.bikeseoul_kw.manager.PaymentLogManager;
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

    DateTimeFormatter dtf_kor = DateTimeFormatter.ofPattern("YYYY년 MM월 dd일 HH:mm:ss");
    DateTimeFormatter dtf_ymd = DateTimeFormatter.ofPattern("YYYY-MM-dd");
    DateTimeFormatter dtf = DateTimeFormatter.ofPattern("YYYY-MM-dd HH:mm:ss");
    /*
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
            List<PaymentLog> paymentLogList = paymentLogManager.getPaymentLogList(member_uid);
            for (PaymentLog paymentLog : paymentLogList) {
                JsonObject item = new JsonObject();
                item.addProperty("uid", paymentLog.getUid());
                item.addProperty("user_id", paymentLog.getUser_id());
                item.addProperty("method_uid", paymentLog.getMethod_uid());
                item.addProperty("amount", paymentLog.getAmount());
                item.addProperty("ticket_detail_uid", paymentLog.getTicket_detail_uid());
                item.addProperty("status_", paymentLog.getStatus_().toString());
                item.addProperty("created_date", paymentLog.getCreated_date().format(dtf_kor));
                item.addProperty("updated_date", paymentLog.getUpdated_date().format(dtf_kor));
                item.addProperty("method_name", paymentLog.getMethod_name());
                item.addProperty("method_created_date", paymentLog.getMethod_created_date().format(dtf_kor));
                item.addProperty("ticket_type", paymentLog.getTicket_type().toString());
                item.addProperty("hours", paymentLog.getHours().toString());
                item.addProperty("cost", paymentLog.getCost());
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
            List<PaymentLog> paymentLogList = paymentLogManager.getRefundLogList(member_uid);
            for (PaymentLog paymentLog : paymentLogList) {
                JsonObject item = new JsonObject();
                item.addProperty("uid", paymentLog.getUid());
                item.addProperty("user_id", paymentLog.getUser_id());
                item.addProperty("method_uid", paymentLog.getMethod_uid());
                item.addProperty("amount", paymentLog.getAmount());
                item.addProperty("ticket_detail_uid", paymentLog.getTicket_detail_uid());
                item.addProperty("status_", paymentLog.getStatus_().toString());
                item.addProperty("created_date", paymentLog.getCreated_date().format(dtf_kor));
                item.addProperty("updated_date", paymentLog.getUpdated_date().format(dtf_kor));
                item.addProperty("method_name", paymentLog.getMethod_name());
                item.addProperty("method_created_date", paymentLog.getMethod_created_date().format(dtf_kor));
                item.addProperty("ticket_type", paymentLog.getTicket_type().toString());
                item.addProperty("hours", paymentLog.getHours().toString());
                item.addProperty("cost", paymentLog.getCost());
                ja.add(item);
            }
            jo.addProperty("result", "success");
            jo.add("paymentLogList", ja);
            return jo.toString();
        } catch (Exception e) {
            jo.addProperty("result", "failed");
            return jo.toString();
        }
    }*/
    
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
