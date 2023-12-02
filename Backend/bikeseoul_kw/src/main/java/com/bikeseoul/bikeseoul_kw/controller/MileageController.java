package com.bikeseoul.bikeseoul_kw.controller;

import com.bikeseoul.bikeseoul_kw.container.CommonEnum;
import com.bikeseoul.bikeseoul_kw.container.Mileage;
import com.bikeseoul.bikeseoul_kw.container.Transfercard;
import com.bikeseoul.bikeseoul_kw.container.User;
import com.bikeseoul.bikeseoul_kw.container.card_type;
import com.bikeseoul.bikeseoul_kw.manager.ServiceManager;
import com.bikeseoul.bikeseoul_kw.service.MileageService;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.time.format.DateTimeFormatter;
import java.util.HashMap;
import java.util.List;

@RestController
public class MileageController {
    @Autowired
    private MileageService mileageService;
    
    @Autowired
    private ServiceManager serviceManager;

    DateTimeFormatter dtf_kor = DateTimeFormatter.ofPattern("YYYY년 MM월 dd일 HH:mm:ss");
    DateTimeFormatter dtf_ymd = DateTimeFormatter.ofPattern("YYYY-MM-dd");
    DateTimeFormatter dtf = DateTimeFormatter.ofPattern("YYYY-MM-dd HH:mm:ss");

    @GetMapping("/rest/service/getMileageList")
    public String getMileageList(@RequestParam("member_uid") int member_uid) {
        JsonObject jo = new JsonObject();
        if(member_uid == 0) {
            jo.addProperty("result", "failed");
            return jo.toString();
        }

        JsonArray ja = new JsonArray();

        try {
            MileageService mileageService = new MileageService();
            List<Mileage> mileageList = mileageService.getMileageList(member_uid);
            for(Mileage mileage:mileageList) {
                JsonObject item = new JsonObject();
                item.addProperty("member_uid", mileage.getMember_uid());
                item.addProperty("uid", mileage.getUid());
                item.addProperty("amount", mileage.getAmount());
                item.addProperty("created_date", mileage.getCreated_date().format(dtf_kor));
                ja.add(item);
            }
            jo.addProperty("result", "success");
            jo.add("data", ja);
        }catch (Exception e) {
            e.printStackTrace();
            jo.addProperty("result", "failed");
            return jo.toString();
        }
        return jo.toString();
    }

    @GetMapping("/rest/service/getMileage")
    public String getMileage(@RequestParam("member_uid") int member_uid) {
        JsonObject jo = new JsonObject();
        if(member_uid == 0) {
            jo.addProperty("result", "failed");
            return jo.toString();
        }

        MileageService mileageService = new MileageService();
        try {
            int mileage = mileageService.getMileageSum(member_uid);
            jo.addProperty("result", "success");
            jo.addProperty("mileage", mileage);
        }catch (Exception e) {
            e.printStackTrace();
            jo.addProperty("result", "failed");
            return jo.toString();
        }
        return jo.toString();
    }
    
    @PostMapping("/rest/service/updateTransfercard")
    public String updateTransfercard(HttpServletRequest request, @RequestBody HashMap<String, Object> body) {
    	JsonObject jo = new JsonObject();
    	HttpSession hs = request.getSession();
		User user = (User)hs.getAttribute("member");
		if(user == null) {
			jo.addProperty("result", "failed");
			return jo.toString();
		}
			
		Transfercard card = new Transfercard(user.getUid(), (String)body.get("card_number"), card_type.valueOf((String)body.get("card_type").toString()));
		CommonEnum result = serviceManager.updateTransfercard(card);
		if(result == CommonEnum.SUCCESS)
			jo.addProperty("result", "success");
		return jo.toString();
    }
    
    @GetMapping("/rest/service/deleteTransfercard")
    public String deleteTransfercard(HttpServletRequest request) {
    	JsonObject jo = new JsonObject();
    	HttpSession hs = request.getSession();
		User user = (User)hs.getAttribute("member");
		if(user == null) {
			jo.addProperty("result", "failed");
			return jo.toString();
		}
		CommonEnum result = serviceManager.deleteTransfercard(user.getUid());
		if(result == CommonEnum.SUCCESS)
			jo.addProperty("result", "success");
		return jo.toString();
    }
    
}
