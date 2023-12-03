package com.bikeseoul.bikeseoul_kw.controller;

import com.bikeseoul.bikeseoul_kw.container.Member;
import com.bikeseoul.bikeseoul_kw.container.Transfercard;
import com.bikeseoul.bikeseoul_kw.manager.TransfercardManager;
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
public class TransfercardController {
    @Autowired
    private TransfercardManager transfercardManager;

    DateTimeFormatter dtf_kor = DateTimeFormatter.ofPattern("YYYY년 MM월 dd일 HH:mm:ss");
    DateTimeFormatter dtf_ymd = DateTimeFormatter.ofPattern("YYYY-MM-dd");
    DateTimeFormatter dtf = DateTimeFormatter.ofPattern("YYYY-MM-dd HH:mm:ss");

    @GetMapping("/rest/service/getTransfercardList")
    @ResponseBody
    public String getTransfercardList(HttpServletRequest request) {
        JsonObject jo = new JsonObject();
        HttpSession hs = request.getSession();
        Member mem = (Member)hs.getAttribute("member");
        if(mem == null) {
            jo.addProperty("result", "failed");
            return jo.toString();
        }
        int member_uid = mem.getUid();
        int level = mem.getLevel();
        JsonArray ja = new JsonArray();

        try{
            List<Transfercard> transfercardList;
            if(level == 9999) {
                transfercardList = transfercardManager.getTransfercardList();
            }else{
                transfercardList = transfercardManager.getTransfercardList(member_uid);
            }
            transfercardList = transfercardManager.getTransfercardList();
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
}
