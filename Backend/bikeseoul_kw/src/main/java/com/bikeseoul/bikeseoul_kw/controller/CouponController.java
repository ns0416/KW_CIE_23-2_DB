package com.bikeseoul.bikeseoul_kw.controller;

import com.bikeseoul.bikeseoul_kw.container.Coupon;
import com.bikeseoul.bikeseoul_kw.service.CouponService;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

@RestController
public class CouponController {

    @Autowired
    private CouponService couponService;

    DateTimeFormatter dtf_kor = DateTimeFormatter.ofPattern("YYYY년 MM월 dd일 HH:mm:ss");
    DateTimeFormatter dtf_ymd = DateTimeFormatter.ofPattern("YYYY-MM-dd");
    DateTimeFormatter dtf = DateTimeFormatter.ofPattern("YYYY-MM-dd HH:mm:ss");

    @GetMapping("/rest/getUserCouponList")
    @ResponseBody
    public String getUserCouponList(@RequestParam("owner_id") int owner_id) {
        JsonObject jo = new JsonObject();
        if(owner_id == 0) {
            jo.addProperty("result", "failed");
            return jo.toString();
        }
        JsonArray ja = new JsonArray();

        try{
            List<Coupon> userCouponList = couponService.getUserCouponList(owner_id);
            for(Coupon coupon:userCouponList) {
                JsonObject item = new JsonObject();
                item.addProperty("coupon_id", coupon.getCoupon_id());
                item.addProperty("owner_id", coupon.getOwner_id());
                item.addProperty("ticket_id", coupon.getTicket_id());
                item.addProperty("cost", coupon.getCost());
                item.addProperty("ticket_type", coupon.getTicket_type());
                item.addProperty("hours", coupon.getHours());
                item.addProperty("ticket_created_date", coupon.getCreated_date().format(dtf_kor));
                item.addProperty("ticket_updated_date", coupon.getUpdated_date().format(dtf_kor));
                item.addProperty("coupon_created_date", coupon.getCoupon_created_date().format(dtf_kor));
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
    @GetMapping("/rest/getCoupon")
    @ResponseBody
    public String getCoupon(@RequestParam("coupon_id") int coupon_id) {
        JsonObject jo = new JsonObject();
        if(coupon_id == 0) {
            jo.addProperty("result", "failed");
            return jo.toString();
        }
        try{
            Coupon coupon = couponService.getCoupon(coupon_id);
            JsonObject item = new JsonObject();
            item.addProperty("coupon_id", coupon.getCoupon_id());
            item.addProperty("owner_id", coupon.getOwner_id());
            item.addProperty("ticket_id", coupon.getTicket_id());
            item.addProperty("cost", coupon.getCost());
            item.addProperty("ticket_type", coupon.getTicket_type());
            item.addProperty("hours", coupon.getHours());
            item.addProperty("ticket_created_date", coupon.getCreated_date().format(dtf_kor));
            item.addProperty("ticket_updated_date", coupon.getUpdated_date().format(dtf_kor));
            item.addProperty("coupon_created_date", coupon.getCoupon_created_date().format(dtf_kor));
            jo.addProperty("result", "success");
            jo.add("data", item);
        }catch(Exception e) {
            e.printStackTrace();
            jo.addProperty("result", "failed");
            return jo.toString();
        }
        return jo.toString();
    }

    @GetMapping("/rest/getCouponList")
    @ResponseBody
    public String getCouponList() {
        JsonObject jo = new JsonObject();
        JsonArray ja = new JsonArray();
        try{
            List<Coupon> couponList = couponService.getCouponList();
            for(Coupon coupon:couponList) {
                JsonObject item = new JsonObject();
                item.addProperty("coupon_id", coupon.getCoupon_id());
                item.addProperty("owner_id", coupon.getOwner_id());
                item.addProperty("ticket_id", coupon.getTicket_id());
                item.addProperty("cost", coupon.getCost());
                item.addProperty("ticket_type", coupon.getTicket_type());
                item.addProperty("hours", coupon.getHours());
                item.addProperty("ticket_created_date", coupon.getCreated_date().format(dtf_kor));
                item.addProperty("ticket_updated_date", coupon.getUpdated_date().format(dtf_kor));
                item.addProperty("coupon_created_date", coupon.getCoupon_created_date().format(dtf_kor));
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

}