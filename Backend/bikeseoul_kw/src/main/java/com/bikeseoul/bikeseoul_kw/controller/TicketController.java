package com.bikeseoul.bikeseoul_kw.controller;

import com.bikeseoul.bikeseoul_kw.container.Member;
import com.bikeseoul.bikeseoul_kw.container.Ticket;
import com.bikeseoul.bikeseoul_kw.manager.ServiceManager;
import com.bikeseoul.bikeseoul_kw.service.TicketService;
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
    private TicketService ticketService;

    DateTimeFormatter dtf_kor = DateTimeFormatter.ofPattern("YYYY년 MM월 dd일 HH:mm:ss");
    DateTimeFormatter dtf_ymd = DateTimeFormatter.ofPattern("YYYY-MM-dd");
    DateTimeFormatter dtf = DateTimeFormatter.ofPattern("YYYY-MM-dd HH:mm:ss");

    @GetMapping("/rest/service/getExpiredTicketList")
    @ResponseBody
    public String getExpiredTicketList(@RequestParam("member_uid") int member_uid) {
        JsonObject jo = new JsonObject();
        if(member_uid == 0) {
            jo.addProperty("result", "failed");
            return jo.toString();
        }

        JsonArray ja = new JsonArray();

        try {
            TicketService ticketService = new TicketService();
            List<Ticket> expiredTicketList = ticketService.getExpiredTicketList(member_uid);
            for(Ticket ticket:expiredTicketList) {
                JsonObject item = new JsonObject();
                item.addProperty("member_uid", ticket.getMember_uid());
                item.addProperty("ticket_id", ticket.getTicket_id());
                item.addProperty("cost", ticket.getCost());
                item.addProperty("ticket_type", ticket.getTicket_type().getValue());
                item.addProperty("hours", ticket.getHours().getValue());
                item.addProperty("ticket_created_date", ticket.getCreated_date().format(dtf_kor));
                item.addProperty("ticket_updated_date", ticket.getUpdated_date().format(dtf_kor));
                item.addProperty("detail_start_date", ticket.getDetail_start_date().format(dtf_kor));
                item.addProperty("detail_create_date", ticket.getDetail_create_date().format(dtf_kor));
                item.addProperty("detail_expire_date", ticket.getDetail_expire_date().format(dtf_kor));
                ja.add(item);
            }
            jo.addProperty("result", "success");
            jo.add("data", ja);
        }catch (Exception e) {
            e.printStackTrace();
            jo.addProperty("result", "failed");
        }
        return jo.toString();
    }

    @GetMapping("/rest/service/getActivationTicket")
    @ResponseBody
    public String getActivationTicket(@RequestParam("member_uid") int member_uid) {
        JsonObject jo = new JsonObject();
        if(member_uid == 0) {
            jo.addProperty("result", "failed");
            return jo.toString();
        }

        try {
            TicketService ticketService = new TicketService();
            Ticket ticket = ticketService.getActivationTicket(member_uid);
            jo.addProperty("result", "success");
            jo.addProperty("member_uid", ticket.getMember_uid());
            jo.addProperty("ticket_id", ticket.getTicket_id());
            jo.addProperty("cost", ticket.getCost());
            jo.addProperty("ticket_type", ticket.getTicket_type().getValue());
            jo.addProperty("hours", ticket.getHours().getValue());
            jo.addProperty("ticket_created_date", ticket.getCreated_date().format(dtf_kor));
            jo.addProperty("ticket_updated_date", ticket.getUpdated_date().format(dtf_kor));
            jo.addProperty("detail_start_date", ticket.getDetail_start_date().format(dtf_kor));
            jo.addProperty("detail_create_date", ticket.getDetail_create_date().format(dtf_kor));
            jo.addProperty("activation", ticket.isActivation());
        }catch (Exception e) {
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
