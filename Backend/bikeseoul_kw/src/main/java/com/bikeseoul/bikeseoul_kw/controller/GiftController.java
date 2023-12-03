package com.bikeseoul.bikeseoul_kw.controller;

import com.bikeseoul.bikeseoul_kw.container.Gift;
import com.bikeseoul.bikeseoul_kw.container.Member;
import com.bikeseoul.bikeseoul_kw.manager.GiftManager;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.time.format.DateTimeFormatter;
import java.util.List;

@RestController
public class GiftController {

    @Autowired
    private GiftManager giftManager;

    DateTimeFormatter dtf_kor = DateTimeFormatter.ofPattern("YYYY년 MM월 dd일 HH:mm:ss");
    DateTimeFormatter dtf_ymd = DateTimeFormatter.ofPattern("YYYY-MM-dd");
    DateTimeFormatter dtf = DateTimeFormatter.ofPattern("YYYY-MM-dd HH:mm:ss");

    @GetMapping("/rest/service/getReceivedGiftList")
    @ResponseBody
    public String getReceivedGiftList(HttpServletRequest request) {
        JsonObject jo = new JsonObject();
        HttpSession hs = request.getSession();
        Member mem = (Member)hs.getAttribute("member");
        if(mem == null) {
            jo.addProperty("result", "failed");
            return jo.toString();
        }
        int receiver_uid = mem.getUid();
        JsonArray ja = new JsonArray();

        try{
            List<Gift> receivedGiftList = giftManager.getReceivedGiftList(receiver_uid);
            for(Gift gift:receivedGiftList) {
                JsonObject item = new JsonObject();
                item.addProperty("gift_id", gift.getGift_id());
                item.addProperty("giver_uid", gift.getGiver_uid());
                item.addProperty("receiver_uid", gift.getReceiver_uid());
                item.addProperty("ticket_id", gift.getTicket_id());
                item.addProperty("cost", gift.getCost());
                item.addProperty("ticket_type", gift.getTicket_type().getValue());
                item.addProperty("hours", gift.getHours().getValue());
                item.addProperty("gift_created_date", gift.getGift_created_date().format(dtf_kor));
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

    @GetMapping("/rest/service/getSentGiftList")
    @ResponseBody
    public String getSentGiftList(HttpServletRequest request) {
        JsonObject jo = new JsonObject();
        HttpSession hs = request.getSession();
        Member mem = (Member)hs.getAttribute("member");
        if(mem == null) {
            jo.addProperty("result", "failed");
            return jo.toString();
        }
        int giver_uid = mem.getUid();
        JsonArray ja = new JsonArray();

        try{
            List<Gift> sentGiftList = giftManager.getSentGiftList(giver_uid);
            for(Gift gift:sentGiftList) {
                JsonObject item = new JsonObject();
                item.addProperty("gift_id", gift.getGift_id());
                item.addProperty("giver_uid", gift.getGiver_uid());
                item.addProperty("receiver_uid", gift.getReceiver_uid());
                item.addProperty("ticket_id", gift.getTicket_id());
                item.addProperty("cost", gift.getCost());
                item.addProperty("ticket_type", gift.getTicket_type().getValue());
                item.addProperty("hours", gift.getHours().getValue());
                item.addProperty("gift_created_date", gift.getCreated_date().format(dtf_kor));
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
