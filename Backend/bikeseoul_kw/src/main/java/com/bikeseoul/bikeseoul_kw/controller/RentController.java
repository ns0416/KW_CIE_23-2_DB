package com.bikeseoul.bikeseoul_kw.controller;

import com.bikeseoul.bikeseoul_kw.container.Rent;
import com.bikeseoul.bikeseoul_kw.service.MemberService;
import com.bikeseoul.bikeseoul_kw.service.RentService;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoUnit;
import java.util.List;

@RestController
public class RentController {
    @Autowired
    private RentService rentService;

    DateTimeFormatter dtf_kor = DateTimeFormatter.ofPattern("YYYY년 MM월 dd일 HH:mm:ss");
    DateTimeFormatter dtf_ymd = DateTimeFormatter.ofPattern("YYYY-MM-dd");
    DateTimeFormatter dtf = DateTimeFormatter.ofPattern("YYYY-MM-dd HH:mm:ss");

    @GetMapping("/rest/getRentList")
    @ResponseBody
    public String getRentList(@RequestParam("member_uid") int member_uid) {
        JsonObject jo = new JsonObject();
        if(member_uid == 0) {
            jo.addProperty("result", "failed");
            return jo.toString();
        }

        JsonArray ja = new JsonArray();

        try {
            RentService rentService = new RentService();
            List<Rent> rentList = rentService.getRentList(member_uid);
            for(Rent rent:rentList) {
                JsonObject item = new JsonObject();
                item.addProperty("uid", rent.getUid());
                item.addProperty("member_uid", rent.getMember_uid());
                item.addProperty("bike_uid", rent.getBike_uid());
                item.addProperty("ticket_detail_uid", rent.getTicket_detail_uid());
                item.addProperty("start_date", rent.getStart_date().format(dtf_kor));
                item.addProperty("return_date", rent.getReturn_date().format(dtf_kor));
                item.addProperty("rent_station", rent.getRent_station());
                item.addProperty("return_station", rent.getReturn_station());
                item.addProperty("last_position_lat", rent.getLast_position_lat());
                item.addProperty("last_position_lon", rent.getLast_position_lon());
                item.addProperty("distance", rent.getDistance());
                item.addProperty("updated_date", rent.getUpdated_date().format(dtf_kor));
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

    @GetMapping("/rest/getRentListByDate")
    @ResponseBody
    public String getRentListByDate(@RequestParam("member_uid") int member_uid, @RequestParam("start_date") LocalDateTime start_date, @RequestParam("end_date") LocalDateTime end_date) {
        JsonObject jo = new JsonObject();
        if(member_uid == 0) {
            jo.addProperty("result", "failed");
            return jo.toString();
        }

        JsonArray ja = new JsonArray();

        try {
            RentService rentService = new RentService();
            List<Rent> rentList = rentService.getRentListByDate(member_uid, start_date, end_date);
            int weight = 65; // 기본값 65kg 추후 수정
            int total_distance = 0;
            int total_rent_minutes = 0;
            int calory = 0;
            int carbon_reduction;
            for(Rent rent:rentList) {
                total_distance += rent.getDistance();
                total_rent_minutes += ChronoUnit.MINUTES.between(rent.getStart_date(), rent.getReturn_date());
                JsonObject item = new JsonObject();
                item.addProperty("uid", rent.getUid());
                item.addProperty("member_uid", rent.getMember_uid());
                item.addProperty("bike_uid", rent.getBike_uid());
                item.addProperty("ticket_detail_uid", rent.getTicket_detail_uid());
                item.addProperty("start_date", rent.getStart_date().format(dtf_kor));
                item.addProperty("return_date", rent.getReturn_date().format(dtf_kor));
                item.addProperty("rent_station", rent.getRent_station());
                item.addProperty("return_station", rent.getReturn_station());
                item.addProperty("last_position_lat", rent.getLast_position_lat());
                item.addProperty("last_position_lon", rent.getLast_position_lon());
                item.addProperty("distance", rent.getDistance());
                item.addProperty("updated_date", rent.getUpdated_date().format(dtf_kor));
                ja.add(item);
            }
            jo.addProperty("result", "success");
            jo.add("data", ja);
            jo.addProperty("total_distance", total_distance);
            jo.addProperty("total_rent_minutes", total_rent_minutes);
            // 계산식 = 몸무게 * 5.8(METS) * (운동시간(분) / 60) * 1.05
            // 5.8 METS: 보통 자전거(평균 시속 12 ~ 19km/h)
            calory = (int) (weight * 5.8 * (total_rent_minutes / 60) * 1.05);
            jo.addProperty("calory", calory);
            // 탄소저감 =  1kg 당 230g
            carbon_reduction = (int) (total_distance * 0.23);
            jo.addProperty("carbon_reduction", carbon_reduction);
        }catch (Exception e) {
            e.printStackTrace();
            jo.addProperty("result", "failed");
            return jo.toString();
        }
        return jo.toString();
    }
}
