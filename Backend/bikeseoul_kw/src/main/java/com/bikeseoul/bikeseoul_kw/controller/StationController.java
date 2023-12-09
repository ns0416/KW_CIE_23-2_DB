package com.bikeseoul.bikeseoul_kw.controller;

import com.bikeseoul.bikeseoul_kw.container.CommonEnum;
import com.bikeseoul.bikeseoul_kw.container.Member;
import com.bikeseoul.bikeseoul_kw.container.Station;
import com.bikeseoul.bikeseoul_kw.container.station_type;
import com.bikeseoul.bikeseoul_kw.manager.StationManager;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.HashMap;
import java.util.List;

@RestController
public class StationController {
    @Autowired
    private StationManager stationManager;

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
            Station station = stationManager.getStationInfo(station_id);
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
            jo.addProperty("result", "success");
            jo.add("data", item);
        }catch (Exception e) {
            e.printStackTrace();
            jo.addProperty("result", "failed");
            return jo.toString();
        }
        return jo.toString();
    }

    @GetMapping("/rest/service/getFavoriteStationList")
    @ResponseBody
    public String getFavoriteStationList(HttpServletRequest request) {
        JsonObject jo = new JsonObject();
        HttpSession hs = request.getSession();
        Member mem = (Member)hs.getAttribute("member");
        if(mem == null) {
            jo.addProperty("result", "failed");
            return jo.toString();
        }
        int member_uid = mem.getUid();
        try {
            List<Station> stationList = stationManager.getFavoriteStationList(member_uid);
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

    @GetMapping("/rest/getStationList")
    @ResponseBody
    public String getStationList(@RequestParam("station_name") String station_name) {
        JsonObject jo = new JsonObject();
        if(station_name == null) {
            jo.addProperty("result", "failed");
            return jo.toString();
        }
        try {
            List<Station> stationList = stationManager.getStationList(station_name);
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
    
    @GetMapping("/rest/service/getStationListNearby")
    @ResponseBody
    public String getStationListNearby(@RequestParam String x, @RequestParam String y, @RequestParam String radius) {
        JsonObject jo = new JsonObject();
        if(x == null || y == null || radius == null) {
            jo.addProperty("result", "failed");
            return jo.toString();
        }
        try {
        	double x_ = Double.parseDouble(x);
        	double y_ = Double.parseDouble(y);
        	double radius_ = Double.parseDouble(radius);
            List<Station> stationList = stationManager.getStationListNearby(x_, y_, radius_);
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

    @PostMapping("/rest/service/insertFavoriteStation")
    public String insertFavoriteStation(HttpServletRequest request, @RequestParam("station_uid") int station_uid) {
        JsonObject jo = new JsonObject();
        HttpSession hs = request.getSession();
        Member mem = (Member)hs.getAttribute("member");
        if(mem == null) {
            jo.addProperty("result", "failed");
            return jo.toString();
        }
        int member_uid = mem.getUid();
        try {
            int result = stationManager.insertFavoriteStation(station_uid, member_uid);
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
    
   @PostMapping("/rest/admin/insertStation")
   public String insertStation(HttpServletRequest request, @RequestParam HashMap<String, Object> body) {
	   JsonObject jo = new JsonObject();
       HttpSession hs = request.getSession();
       Station station = new Station((String)body.get("station_name"), (Double)body.get("lat"), (Double)body.get("lon"), (Integer)body.get("size"), station_type.valueOf((String)body.get("station_type")));
       CommonEnum res = stationManager.insertStation(station);
       if(res == CommonEnum.SUCCESS)
			jo.addProperty("result", "success");
		else
			jo.addProperty("result", "failed");
		return jo.toString();
   }
   @PostMapping("/rest/admin/updateStation")
	public String updateStationAdmin(HttpServletRequest request, @RequestBody HashMap<String, Object> body) {
		HttpSession hs = request.getSession();
		JsonObject jo = new JsonObject();
		Integer age = (Integer)body.get("age");
		Integer weight = (Integer)body.get("weight");
		
	    Station station = new Station((String)body.get("station_name"), (Double)body.get("lat"), (Double)body.get("lon"), (Integer)body.get("size"), station_type.valueOf((String)body.get("station_type")), (Boolean)body.get("is_valid"));
		CommonEnum res = stationManager.updateStation(station);
		if(res == CommonEnum.SUCCESS)
			jo.addProperty("result", "success");
		else
			jo.addProperty("result", "failed");
		return jo.toString();
	}
}
