package com.bikeseoul.bikeseoul_kw.controller;

import com.bikeseoul.bikeseoul_kw.container.Transfercard;
import com.bikeseoul.bikeseoul_kw.service.TransfercardService;
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
public class TransfercardController {
    @Autowired
    private TransfercardService transfercardService;

    DateTimeFormatter dtf_kor = DateTimeFormatter.ofPattern("YYYY년 MM월 dd일 HH:mm:ss");
    DateTimeFormatter dtf_ymd = DateTimeFormatter.ofPattern("YYYY-MM-dd");
    DateTimeFormatter dtf = DateTimeFormatter.ofPattern("YYYY-MM-dd HH:mm:ss");

    @GetMapping("/rest/getTransfercardList")
    @ResponseBody
    public String getTransfercardList() {
        JsonObject jo = new JsonObject();
        JsonArray ja = new JsonArray();

        try{
            List<Transfercard> transfercardList = transfercardService.getTransfercardList();
            for(Transfercard transfercard:transfercardList) {
                JsonObject item = new JsonObject();
                item.addProperty("uid", transfercard.getUid());
                item.addProperty("member_uid", transfercard.getMember_uid());
                item.addProperty("card_number", transfercard.getCard_number());
                item.addProperty("card_type", transfercard.getCard_type().toString());
                item.addProperty("updated_time", transfercard.getUpdated_time().format(dtf_kor));
                item.addProperty("created_date", transfercard.getCreated_date().format(dtf_kor));
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

    @GetMapping("/rest/getTransfercard")
    @ResponseBody
    public String getTransfercard(@RequestParam("uid") int uid) {
        JsonObject jo = new JsonObject();
        if(uid == 0) {
            jo.addProperty("result", "failed");
            return jo.toString();
        }
        try{
            Transfercard transfercard = transfercardService.getTransfercard(uid);
            JsonObject item = new JsonObject();
            item.addProperty("uid", transfercard.getUid());
            item.addProperty("member_uid", transfercard.getMember_uid());
            item.addProperty("card_number", transfercard.getCard_number());
            item.addProperty("card_type", transfercard.getCard_type().toString());
            item.addProperty("updated_time", transfercard.getUpdated_time().format(dtf_kor));
            item.addProperty("created_date", transfercard.getCreated_date().format(dtf_kor));
            jo.addProperty("result", "success");
            jo.add("data", item);
        }catch(Exception e) {
            e.printStackTrace();
            jo.addProperty("result", "failed");
            return jo.toString();
        }
        return jo.toString();
    }
}
