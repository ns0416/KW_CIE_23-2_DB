package com.bikeseoul.bikeseoul_kw.controller;

import com.bikeseoul.bikeseoul_kw.container.Ranking;
import com.bikeseoul.bikeseoul_kw.service.RankingService;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.time.format.DateTimeFormatter;
import java.util.List;

@RestController
public class RankingController {
    @Autowired
    private RankingService rankingService;

    DateTimeFormatter dtf_kor = DateTimeFormatter.ofPattern("YYYY년 MM월 dd일 HH:mm:ss");
    DateTimeFormatter dtf_ymd = DateTimeFormatter.ofPattern("YYYY-MM-dd");
    DateTimeFormatter dtf = DateTimeFormatter.ofPattern("YYYY-MM-dd HH:mm:ss");

    @GetMapping("/rest/getWeeklyRankingList")
    @ResponseBody
    public String getWeeklyRankingList() {
        JsonObject jo = new JsonObject();
        JsonArray ja = new JsonArray();

        try{
            List<Ranking> rankingList = rankingService.getWeeklyRankingList();
            for(Ranking ranking:rankingList) {
                JsonObject item = new JsonObject();
                item.addProperty("member_uid", ranking.getMember_uid());
                item.addProperty("rank", ranking.getRank());
                item.addProperty("distance", ranking.getDistance());
                item.addProperty("created_date", ranking.getCreated_date().format(dtf_kor));
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

    @GetMapping("/rest/getMonthlyRankingList")
    @ResponseBody
    public String getMonthlyRankingList() {
        JsonObject jo = new JsonObject();
        JsonArray ja = new JsonArray();

        try{
            List<Ranking> rankingList = rankingService.getMonthlyRankingList();
            for(Ranking ranking:rankingList) {
                JsonObject item = new JsonObject();
                item.addProperty("member_uid", ranking.getMember_uid());
                item.addProperty("rank", ranking.getRank());
                item.addProperty("distance", ranking.getDistance());
                item.addProperty("created_date", ranking.getCreated_date().format(dtf_kor));
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

    @GetMapping("/rest/getWeeklyRanking")
    @ResponseBody
    public String getWeeklyRanking(int member_uid) {
        JsonObject jo = new JsonObject();
        if(member_uid == 0) {
            jo.addProperty("result", "failed");
            return jo.toString();
        }
        try{
            Ranking ranking = rankingService.getWeeklyRanking(member_uid);
            JsonObject item = new JsonObject();
            item.addProperty("member_uid", ranking.getMember_uid());
            item.addProperty("rank", ranking.getRank());
            item.addProperty("distance", ranking.getDistance());
            item.addProperty("created_date", ranking.getCreated_date().format(dtf_kor));
            jo.addProperty("result", "success");
            jo.add("data", item);
        }catch(Exception e) {
            e.printStackTrace();
            jo.addProperty("result", "failed");
            return jo.toString();
        }
        return jo.toString();
    }

    @GetMapping("/rest/getMonthlyRanking")
    @ResponseBody
    public String getMonthlyRanking(int member_uid) {
        JsonObject jo = new JsonObject();
        if(member_uid == 0) {
            jo.addProperty("result", "failed");
            return jo.toString();
        }
        try{
            Ranking ranking = rankingService.getMonthlyRanking(member_uid);
            JsonObject item = new JsonObject();
            item.addProperty("member_uid", ranking.getMember_uid());
            item.addProperty("rank", ranking.getRank());
            item.addProperty("distance", ranking.getDistance());
            item.addProperty("created_date", ranking.getCreated_date().format(dtf_kor));
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
