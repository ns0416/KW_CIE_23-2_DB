package com.bikeseoul.bikeseoul_kw.controller;

import com.bikeseoul.bikeseoul_kw.container.Station;
import com.bikeseoul.bikeseoul_kw.container.station_type;
import com.bikeseoul.bikeseoul_kw.service.StationService;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

@RestController
public class StationController {
    @Autowired
    private StationService stationService;

    DateTimeFormatter dtf_kor = DateTimeFormatter.ofPattern("YYYY년 MM월 dd일 HH:mm:ss");
    DateTimeFormatter dtf_ymd = DateTimeFormatter.ofPattern("YYYY-MM-dd");
    DateTimeFormatter dtf = DateTimeFormatter.ofPattern("YYYY-MM-dd HH:mm:ss");

    @GetMapping("/rest/getStationInfo")
    @ResponseBody
    public String getStationInfo(@RequestParam("station_id") int station_id) {
        JsonObject jo = new JsonObject();
        if(station_id == 0) {
            jo.addProperty("result", "failed");
            return jo.toString();
        }
        try {
            Station station = stationService.getStationInfo(station_id);
            jo.addProperty("result", "success");
            jo.addProperty("station_id", station.getUid());
            jo.addProperty("station_name", station.getStation_name());
            jo.addProperty("lat", station.getLat());
            jo.addProperty("lon", station.getLon());
            jo.addProperty("size", station.getSize());
            jo.addProperty("is_valid", station.isIs_valid());
            jo.addProperty("station_type", station.getStation_type().toString());
            jo.addProperty("general_cnt", station.getGeneral_cnt());
            jo.addProperty("sprout_cnt", station.getSprout_cnt());
        }catch (Exception e) {
            e.printStackTrace();
            jo.addProperty("result", "failed");
            return jo.toString();
        }
        return jo.toString();
    }

    @GetMapping("/rest/getFavoriteStationList")
    @ResponseBody
    public String getFavoriteStationList(@RequestParam("member_uid") int member_uid) {
        JsonObject jo = new JsonObject();
        if(member_uid == 0) {
            jo.addProperty("result", "failed");
            return jo.toString();
        }
        try {
            StationService stationService = new StationService();
            List<Station> stationList = stationService.getFavoriteStationList(member_uid);
            JsonArray ja = new JsonArray();
            for (Station station : stationList) {
                JsonObject item = new JsonObject();
                item.addProperty("station_id", station.getUid());
                item.addProperty("station_name", station.getStation_name());
                item.addProperty("lat", station.getLat());
                item.addProperty("lon", station.getLon());
                item.addProperty("size", station.getSize());
                item.addProperty("is_valid", station.isIs_valid());
                item.addProperty("station_type", station.getStation_type().toString());
                item.addProperty("general_cnt", station.getGeneral_cnt());
                item.addProperty("sprout_cnt", station.getSprout_cnt());
                item.addProperty("favorite_user_uid", station.getFavorite_user_uid());
                item.addProperty("favorite_created_date", station.getFavorite_created_date().format(dtf_kor));
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

    @GetMapping("/rest/getStationListByStationName")
    @ResponseBody
    public String getStationListByStationName(@RequestParam("station_name") String station_name) {
        JsonObject jo = new JsonObject();
        if(station_name == null) {
            jo.addProperty("result", "failed");
            return jo.toString();
        }
        try {
            StationService stationService = new StationService();
            List<Station> stationList = stationService.getStationListByStationName(station_name);
            JsonArray ja = new JsonArray();
            for (Station station : stationList) {
                JsonObject item = new JsonObject();
                item.addProperty("station_id", station.getUid());
                item.addProperty("station_name", station.getStation_name());
                item.addProperty("lat", station.getLat());
                item.addProperty("lon", station.getLon());
                item.addProperty("size", station.getSize());
                item.addProperty("is_valid", station.isIs_valid());
                item.addProperty("station_type", station.getStation_type().toString());
                item.addProperty("general_cnt", station.getGeneral_cnt());
                item.addProperty("sprout_cnt", station.getSprout_cnt());
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
//    Station insertFavoriteStation(int station_uid, int user_uid);

    @PostMapping("/rest/insertFavoriteStation")
    public String insertFavoriteStation(@RequestParam("station_uid") int station_uid, @RequestParam("user_uid") int user_uid) {
        JsonObject jo = new JsonObject();
        if(station_uid == 0 || user_uid == 0) {
            jo.addProperty("result", "failed");
            return jo.toString();
        }
        try {
            StationService stationService = new StationService();
            int result = stationService.insertFavoriteStation(station_uid, user_uid);
            if(result == 1) {
                jo.addProperty("result", "success");
            }else {
                jo.addProperty("result", "failed");
            }
        }catch (Exception e) {
            e.printStackTrace();
            jo.addProperty("result", "failed");
            return jo.toString();
        }
        return jo.toString();
    }
}
