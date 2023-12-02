package com.bikeseoul.bikeseoul_kw.controller;

import com.bikeseoul.bikeseoul_kw.container.Member;
import com.bikeseoul.bikeseoul_kw.container.Ticket;
import com.bikeseoul.bikeseoul_kw.container.Ticket_detail;
import com.bikeseoul.bikeseoul_kw.container.User;
import com.bikeseoul.bikeseoul_kw.manager.ServiceManager;
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

    DateTimeFormatter dtf_kor = DateTimeFormatter.ofPattern("YYYY년 MM월 dd일 HH:mm:ss");
    DateTimeFormatter dtf_ymd = DateTimeFormatter.ofPattern("YYYY-MM-dd");
    DateTimeFormatter dtf = DateTimeFormatter.ofPattern("YYYY-MM-dd HH:mm:ss");

    @GetMapping("/rest/service/getExpiredTicketList")
    @ResponseBody
    public String getExpiredTicketList(HttpServletRequest request) {
        JsonObject jo = new JsonObject();
        HttpSession hs = request.getSession();
        User user = (User)hs.getAttribute("member");
        int member_uid = user.getUid();
        JsonArray ja = new JsonArray();

        try {
            List<Ticket_detail> ticket_details = serviceManager.getExpiredTicketList(member_uid);
            for(Ticket_detail ticket_detail:ticket_details) {
                JsonObject item = new JsonObject();
                item.addProperty("member_uid", ticket_detail.getMember_uid());
                item.addProperty("ticket_id", ticket_detail.getTicket_id());
                item.addProperty("cost", ticket_detail.getCost());
                item.addProperty("ticket_type", ticket_detail.getTicket_type().getValue());
                item.addProperty("hours", ticket_detail.getHours().getValue());
                item.addProperty("ticket_created_date", ticket_detail.getTicket_created_date().format(dtf_kor));
                item.addProperty("ticket_updated_date", ticket_detail.getTicket_updated_date().format(dtf_kor));
                item.addProperty("detail_start_date", ticket_detail.getStart_date().format(dtf_kor));
                item.addProperty("detail_create_date", ticket_detail.getCreated_date().format(dtf_kor));
                item.addProperty("activation", ticket_detail.isActivation());
                item.addProperty("expired_date", ticket_detail.getExpired_date().format(dtf_kor));
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
        User user = (User)hs.getAttribute("member");
        int member_uid = user.getUid();
        JsonArray ja = new JsonArray();

        try {
            Ticket_detail ticket_detail = serviceManager.getActivationTicket(member_uid);
            if(ticket_detail != null) {
                JsonObject item = new JsonObject();
                item.addProperty("member_uid", ticket_detail.getMember_uid());
                item.addProperty("ticket_id", ticket_detail.getTicket_id());
                item.addProperty("cost", ticket_detail.getCost());
                item.addProperty("ticket_type", ticket_detail.getTicket_type().getValue());
                item.addProperty("hours", ticket_detail.getHours().getValue());
                item.addProperty("ticket_created_date", ticket_detail.getTicket_created_date().format(dtf_kor));
                item.addProperty("ticket_updated_date", ticket_detail.getTicket_updated_date().format(dtf_kor));
                item.addProperty("detail_start_date", ticket_detail.getStart_date().format(dtf_kor));
                item.addProperty("detail_create_date", ticket_detail.getCreated_date().format(dtf_kor));
                item.addProperty("activation", ticket_detail.isActivation());
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
    @GetMapping("/rest/service/getTicketType")
    public String getTicketType(HttpServletRequest request, @RequestParam String type) {
    	JsonObject jo = new JsonObject();
    	if(!(type.equals("commutation") || type.equals("daily"))) {
    		jo.addProperty("result", "failed");
    		return jo.toString();
    	}
    	List<Ticket> tickets = serviceManager.getTicketList(false, false, type);
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
    @PostMapping("/rest/service/payment")
    public String payment(HttpServletRequest request, @RequestBody HashMap<String, Object> body) {
    	return null;
    }
    
    
}
