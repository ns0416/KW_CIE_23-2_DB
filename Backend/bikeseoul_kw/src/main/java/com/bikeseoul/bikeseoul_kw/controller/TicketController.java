package com.bikeseoul.bikeseoul_kw.controller;

import com.bikeseoul.bikeseoul_kw.container.*;
import com.bikeseoul.bikeseoul_kw.manager.AccountManager;
import com.bikeseoul.bikeseoul_kw.manager.ServiceManager;
import com.bikeseoul.bikeseoul_kw.manager.TicketManager;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;

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
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@RestController
public class TicketController {
	
	@Autowired
	private ServiceManager serviceManager;
	
	@Autowired
	private AccountManager am;
	private TicketManager ticketManager;

    DateTimeFormatter dtf_kor = DateTimeFormatter.ofPattern("YYYY년 MM월 dd일 HH:mm:ss");
    DateTimeFormatter dtf_ymd = DateTimeFormatter.ofPattern("YYYY-MM-dd");
    DateTimeFormatter dtf = DateTimeFormatter.ofPattern("YYYY-MM-dd HH:mm:ss");

    @GetMapping("/rest/service/getExpiredTicketList")
    @ResponseBody
    public String getExpiredTicketList(HttpServletRequest request) {
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
            List<Pair<Ticket, Ticket_detail>> expiredTicketList = ticketManager.getExpiredTicketList(member_uid);
            for(Pair<Ticket, Ticket_detail> pair : expiredTicketList) {
                JsonObject item = new JsonObject();
                item.addProperty("member_uid", pair.getSecond().getMember_uid());
                item.addProperty("ticket_id", pair.getFirst().getTicket_id());
                item.addProperty("cost", pair.getFirst().getCost());
                item.addProperty("ticket_type", pair.getFirst().getTicket_type().getValue());
                item.addProperty("hours", pair.getFirst().getHours().getValue());
                item.addProperty("ticket_created_date", pair.getFirst().getTicket_created_date().format(dtf_kor));
                item.addProperty("ticket_updated_date", pair.getFirst().getTicket_updated_date().format(dtf_kor));
                item.addProperty("ticket_detail_start_date", pair.getSecond().getStart_date().format(dtf_kor));
                item.addProperty("ticket_detail_create_date", pair.getSecond().getCreated_date().format(dtf_kor));
                item.addProperty("activation", pair.getSecond().isActivation());
                item.addProperty("expired_date", pair.getSecond().getExpired_date().format(dtf_kor));
                ja.add(item);
            }
            jo.addProperty("result", "success");
            jo.add("data", ja);
        }catch(Exception e) {
            e.printStackTrace();
            jo.addProperty("result", "failed");
            return jo.toString();
        }
        return jo.toString();
    }

    @GetMapping("/rest/service/getActivationTicket")
    @ResponseBody
    public String getActivationTicket(HttpServletRequest request) {
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
            Pair<Ticket, Ticket_detail> activationTicket = ticketManager.getActivationTicket(member_uid);
            JsonObject item = new JsonObject();
            item.addProperty("member_uid", activationTicket.getSecond().getMember_uid());
            item.addProperty("ticket_id", activationTicket.getFirst().getTicket_id());
            item.addProperty("cost", activationTicket.getFirst().getCost());
            item.addProperty("ticket_type", activationTicket.getFirst().getTicket_type().getValue());
            item.addProperty("hours", activationTicket.getFirst().getHours().getValue());
            item.addProperty("ticket_created_date", activationTicket.getFirst().getTicket_created_date().format(dtf_kor));
            item.addProperty("ticket_updated_date", activationTicket.getFirst().getTicket_updated_date().format(dtf_kor));
            item.addProperty("ticket_detail_start_date", activationTicket.getSecond().getStart_date().format(dtf_kor));
            item.addProperty("ticket_detail_create_date", activationTicket.getSecond().getCreated_date().format(dtf_kor));
            item.addProperty("activation", activationTicket.getSecond().isActivation());
            ja.add(item);
            jo.addProperty("result", "success");
            jo.add("data", ja);
        }catch(Exception e) {
            e.printStackTrace();
            jo.addProperty("result", "failed");
            return jo.toString();
        }
        return jo.toString();
    }
    @GetMapping("/rest/service/getTicketType")
    public String getTicketType(HttpServletRequest request, @RequestParam String type) {
    	JsonObject jo = new JsonObject();
    	if(!(type.equals("commutation") || type.equals("daily"))) {
    		jo.addProperty("result", "failed");
    		return jo.toString();
    	}
    	List<Ticket> tickets = ticketManager.getTicketList(false, false, type);
    	JsonArray ja = new JsonArray();
    	for(Ticket tk : tickets) {
    		JsonObject jo_item = new JsonObject();
    		jo_item.addProperty("ticket_id", tk.getTicket_id());
    		jo_item.addProperty("hours", tk.getHours().getValue());
    		jo_item.addProperty("cost", tk.getCost());
    		ja.add(jo_item);
    	}
    	jo.addProperty("result", "success");
    	jo.add("data", ja);
    	return jo.toString();
    }
    
    @PostMapping("/rest/service/checkGiftEmail")
    public String checkGiftEmail(HttpServletRequest request, @RequestBody HashMap<String, Object> body) {
    	JsonObject jo = new JsonObject();
        HttpSession hs = request.getSession();
        User user = (User)hs.getAttribute("member");
    	String email = (String)body.get("email");
    	User mem = am.getUserInfo(email, true, false);
    	if(mem == null || mem.getEmail().equals(user.getEmail())) {
    		jo.addProperty("result", "failed");
    		return jo.toString();
    	}
    	hs.setAttribute("gift_email", email);
    	jo.addProperty("result", "success");
    	return jo.toString();
    
    }
    
    
    
    
}
