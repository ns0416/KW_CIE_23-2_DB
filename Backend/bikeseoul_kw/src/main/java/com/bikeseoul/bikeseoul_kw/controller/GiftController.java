package com.bikeseoul.bikeseoul_kw.controller;

import com.bikeseoul.bikeseoul_kw.container.Gift;
import com.bikeseoul.bikeseoul_kw.service.GiftService;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
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
    private GiftService giftService;

    DateTimeFormatter dtf_kor = DateTimeFormatter.ofPattern("YYYY년 MM월 dd일 HH:mm:ss");
    DateTimeFormatter dtf_ymd = DateTimeFormatter.ofPattern("YYYY-MM-dd");
    DateTimeFormatter dtf = DateTimeFormatter.ofPattern("YYYY-MM-dd HH:mm:ss");

    @GetMapping("/rest/getReceivedGiftList")
    @ResponseBody
    public String getReceivedGiftList(@RequestParam("receiver_id") int receiver_id) {
        JsonObject jo = new JsonObject();
        if(receiver_id == 0) {
            jo.addProperty("result", "failed");
            return jo.toString();
        }
        JsonArray ja = new JsonArray();

        try{
            List<Gift> receivedGiftList = giftService.getReceivedGiftList(receiver_id);
            for(Gift gift:receivedGiftList) {
                JsonObject item = new JsonObject();
                item.addProperty("gift_id", gift.getGift_id());
                item.addProperty("giver_id", gift.getGiver_id());
                item.addProperty("receiver_id", gift.getReceiver_id());
                item.addProperty("ticket_id", gift.getTicket_id());
                item.addProperty("cost", gift.getCost());
                item.addProperty("ticket_type", gift.getTicket_type().getValue());
                item.addProperty("hours", gift.getHours().getValue());
                item.addProperty("gift_created_date", gift.getCreated_date().format(dtf_kor));
                item.addProperty("gift_updated_date", gift.getUpdated_date().format(dtf_kor));
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

    @GetMapping("/rest/getSentGiftList")
    @ResponseBody
    public String getSentGiftList(@RequestParam("giver_id") int giver_id) {
        JsonObject jo = new JsonObject();
        if(giver_id == 0) {
            jo.addProperty("result", "failed");
            return jo.toString();
        }
        JsonArray ja = new JsonArray();

        try{
            List<Gift> sentGiftList = giftService.getSentGiftList(giver_id);
            for(Gift gift:sentGiftList) {
                JsonObject item = new JsonObject();
                item.addProperty("gift_id", gift.getGift_id());
                item.addProperty("giver_id", gift.getGiver_id());
                item.addProperty("receiver_id", gift.getReceiver_id());
                item.addProperty("ticket_id", gift.getTicket_id());
                item.addProperty("cost", gift.getCost());
                item.addProperty("ticket_type", gift.getTicket_type().getValue());
                item.addProperty("hours", gift.getHours().getValue());
                item.addProperty("gift_created_date", gift.getCreated_date().format(dtf_kor));
                item.addProperty("gift_updated_date", gift.getUpdated_date().format(dtf_kor));
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
