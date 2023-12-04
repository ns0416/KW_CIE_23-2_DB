package com.bikeseoul.bikeseoul_kw.controller;

import com.bikeseoul.bikeseoul_kw.container.CommonEnum;
import com.bikeseoul.bikeseoul_kw.container.Coupon;
import com.bikeseoul.bikeseoul_kw.container.Member;
import com.bikeseoul.bikeseoul_kw.container.Pair;
import com.bikeseoul.bikeseoul_kw.container.Ticket;
import com.bikeseoul.bikeseoul_kw.container.Ticket_detail;
import com.bikeseoul.bikeseoul_kw.container.User;
import com.bikeseoul.bikeseoul_kw.manager.CouponManager;
import com.bikeseoul.bikeseoul_kw.manager.TicketManager;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.HashMap;
import java.util.List;

@RestController
public class CouponController {

    @Autowired
    private CouponManager couponManager;
    
    @Autowired
    private TicketManager ticketManager;
    
    DateTimeFormatter dtf_kor = DateTimeFormatter.ofPattern("YYYY년 MM월 dd일 HH:mm:ss");
    DateTimeFormatter dtf_ymd = DateTimeFormatter.ofPattern("YYYY-MM-dd");
    DateTimeFormatter dtf = DateTimeFormatter.ofPattern("YYYY-MM-dd HH:mm:ss");

    @GetMapping("/rest/service/getUserCouponList")
    @ResponseBody
    public String getUserCouponList(HttpServletRequest request) {
        JsonObject jo = new JsonObject();
        HttpSession hs = request.getSession();
        Member mem = (Member)hs.getAttribute("member");
        if(mem == null) {
            jo.addProperty("result", "failed");
            return jo.toString();
        }
        int owner_id = mem.getUid();
        JsonArray ja = new JsonArray();

        try{
            List<Coupon> userCouponList = couponManager.getUserCouponList(owner_id);
            for(Coupon coupon:userCouponList) {
                JsonObject item = new JsonObject();
                item.addProperty("coupon_id", coupon.getCoupon_id());
                item.addProperty("owner_id", coupon.getOwner_uid());
                item.addProperty("ticket_id", coupon.getTicket_id());
                item.addProperty("cost", coupon.getCost());
                item.addProperty("ticket_type", coupon.getTicket_type().getValue());
                item.addProperty("hours", coupon.getHours().getValue());
                item.addProperty("ticket_created_date", coupon.getTicket_created_date().format(dtf_kor));
                item.addProperty("ticket_updated_date", coupon.getTicket_updated_date().format(dtf_kor));
                item.addProperty("coupon_created_date", coupon.getCreated_date().format(dtf_kor));
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
    @GetMapping("/rest/service/getCoupon")
    @ResponseBody
    public String getCoupon(HttpServletRequest request, @RequestParam("coupon_id") String coupon_id) {
        JsonObject jo = new JsonObject();
        if(coupon_id == null) {
            jo.addProperty("result", "failed");
            return jo.toString();
        }
        // 로그인 확인
        HttpSession hs = request.getSession();
        Member mem = (Member)hs.getAttribute("member");
        if(mem == null) {
            jo.addProperty("result", "failed");
            return jo.toString();
        }

        try{
            Coupon coupon = couponManager.getCoupon(coupon_id);
            JsonObject item = new JsonObject();
            item.addProperty("coupon_id", coupon.getCoupon_id());
            item.addProperty("owner_id", coupon.getOwner_uid());
            item.addProperty("ticket_id", coupon.getTicket_id());
            item.addProperty("cost", coupon.getCost());
            item.addProperty("ticket_type", coupon.getTicket_type().getValue());
            item.addProperty("hours", coupon.getHours().getValue());
            item.addProperty("ticket_created_date", coupon.getCreated_date().format(dtf_kor));
            item.addProperty("ticket_updated_date", coupon.getTicket_updated_date().format(dtf_kor));
            item.addProperty("coupon_created_date", coupon.getCreated_date().format(dtf_kor));
            jo.addProperty("result", "success");
            jo.add("data", item);
        }catch(Exception e) {
            e.printStackTrace();
            jo.addProperty("result", "failed");
            return jo.toString();
        }
        return jo.toString();
    }

    @GetMapping("/rest/service/getCouponList")
    @ResponseBody
    public String getCouponList(HttpServletRequest request) {
        JsonObject jo = new JsonObject();
        JsonArray ja = new JsonArray();
        HttpSession hs = request.getSession();
        Member mem = (Member)hs.getAttribute("member");
        if(mem == null) {
            jo.addProperty("result", "failed");
            return jo.toString();
        }
        // 관리자 확인 (level 9999)
        int level = mem.getLevel();
        if(level != 9999) {
            jo.addProperty("result", "failed");
            return jo.toString();
        }
        try{
            List<Coupon> couponList = couponManager.getCouponList();
            for(Coupon coupon:couponList) {
                JsonObject item = new JsonObject();
                item.addProperty("coupon_id", coupon.getCoupon_id());
                item.addProperty("owner_uid", coupon.getOwner_uid());
                item.addProperty("ticket_id", coupon.getTicket_id());
                item.addProperty("cost", coupon.getCost());
                item.addProperty("ticket_type", coupon.getTicket_type().getValue());
                item.addProperty("hours", coupon.getHours().getValue());
                item.addProperty("ticket_created_date", coupon.getCreated_date().format(dtf_kor));
                item.addProperty("ticket_updated_date", coupon.getTicket_updated_date().format(dtf_kor));
                item.addProperty("coupon_created_date", coupon.getCreated_date().format(dtf_kor));
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
    
    @PostMapping("/rest/service/registerCoupon")
    public String registerCoupon(HttpServletRequest request, HashMap<String, Object> body) {
    	JsonObject jo = new JsonObject();
    	HttpSession hs = request.getSession();
    	Member user = (Member)hs.getAttribute("member");
    	if(user == null) {
    		jo.addProperty("result", "failed");
    		return jo.toString();
    	}
    	String coupon_id = (String)body.get("coupon_id");
    	Coupon cp = couponManager.getCoupon(coupon_id);
    	if(cp.getOwner_uid() > 0) {
    		jo.addProperty("result", "failed");
    		return jo.toString();
    	}
    	Pair<Ticket, Ticket_detail> td = ticketManager.getActivationTicket(user.getUid());
    	if(td != null) {
    		jo.addProperty("result", "failed");
        	return jo.toString();
    	}
    	CommonEnum res = couponManager.useCoupon(cp, user);
    	if(res == CommonEnum.SUCCESS)
    		jo.addProperty("result", "success");
    	else
    		jo.addProperty("result", "failed");
    	
    	return jo.toString();
    }

}
