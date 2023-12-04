package com.bikeseoul.bikeseoul_kw.controller;

import com.bikeseoul.bikeseoul_kw.container.Gift;
import com.bikeseoul.bikeseoul_kw.container.Member;
import com.bikeseoul.bikeseoul_kw.container.Pair;
import com.bikeseoul.bikeseoul_kw.container.Ticket;
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
            List<Pair<Ticket, Gift>> receivedGiftList = giftManager.getReceivedGiftList(receiver_uid);
            for(Pair<Ticket, Gift> pair:receivedGiftList) {
                JsonObject item = new JsonObject();
                item.addProperty("gift_id", pair.getSecond().getUid());
                item.addProperty("giver_uid", pair.getSecond().getGiver_uid());
                item.addProperty("receiver_uid", pair.getSecond().getReceiver_uid());
                item.addProperty("ticket_id", pair.getSecond().getTicket_uid());
                item.addProperty("cost", pair.getFirst().getCost());
                item.addProperty("ticket_type", pair.getFirst().getTicket_type().getValue());
                item.addProperty("hours", pair.getFirst().getHours().getValue());
                item.addProperty("gift_created_date", pair.getSecond().getCreated_date().format(dtf_kor));
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
            List<Pair<Ticket, Gift>> receivedGiftList = giftManager.getReceivedGiftList(giver_uid);
            for(Pair<Ticket, Gift> pair:receivedGiftList) {
                JsonObject item = new JsonObject();
                item.addProperty("gift_id", pair.getSecond().getUid());
                item.addProperty("giver_uid", pair.getSecond().getGiver_uid());
                item.addProperty("receiver_uid", pair.getSecond().getReceiver_uid());
                item.addProperty("ticket_id", pair.getSecond().getTicket_uid());
                item.addProperty("cost", pair.getFirst().getCost());
                item.addProperty("ticket_type", pair.getFirst().getTicket_type().getValue());
                item.addProperty("hours", pair.getFirst().getHours().getValue());
                item.addProperty("gift_created_date", pair.getSecond().getCreated_date().format(dtf_kor));
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
