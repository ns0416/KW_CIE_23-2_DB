package com.bikeseoul.bikeseoul_kw.controller;

import com.bikeseoul.bikeseoul_kw.container.Member;
import com.bikeseoul.bikeseoul_kw.container.Ranking;
import com.bikeseoul.bikeseoul_kw.manager.RankingManager;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.time.format.DateTimeFormatter;
import java.util.List;

@RestController
public class RankingController {
    @Autowired
    private RankingManager rankingManager;

    DateTimeFormatter dtf_kor = DateTimeFormatter.ofPattern("YYYY년 MM월 dd일 HH:mm:ss");
    DateTimeFormatter dtf_ymd = DateTimeFormatter.ofPattern("YYYY-MM-dd");
    DateTimeFormatter dtf = DateTimeFormatter.ofPattern("YYYY-MM-dd HH:mm:ss");

    @GetMapping("/rest/getWeeklyRankingList")
    @ResponseBody
    public String getWeeklyRankingList() {
        JsonObject jo = new JsonObject();
        JsonArray ja = new JsonArray();

        try{
            List<Ranking> rankingList = rankingManager.getWeeklyRankingList();
            for(Ranking ranking:rankingList) {
                JsonObject item = new JsonObject();
                item.addProperty("member_uid", ranking.getUid());
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
            List<Ranking> rankingList = rankingManager.getMonthlyRankingList();
            for(Ranking ranking:rankingList) {
                JsonObject item = new JsonObject();
                item.addProperty("member_uid", ranking.getUid());
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

    @GetMapping("/rest/service/getWeeklyRanking")
    @ResponseBody
    public String getWeeklyRanking(HttpServletRequest request) {
        JsonObject jo = new JsonObject();
        HttpSession hs = request.getSession();
        Member mem = (Member)hs.getAttribute("member");
        if(mem == null) {
            jo.addProperty("result", "failed");
            return jo.toString();
        }
        int member_uid = mem.getUid();
        try {
            List<Ranking> rankingList = rankingManager.getWeeklyRankingList();
            for (Ranking ranking : rankingList) {
                if (ranking.getUid() == member_uid) {
                    JsonObject item = new JsonObject();
//                    item.addProperty("member_uid", ranking.getUid());
                    item.addProperty("rank", ranking.getRank());
                    item.addProperty("distance", ranking.getDistance());
                    item.addProperty("created_date", ranking.getCreated_date().format(dtf_kor));
                    jo.addProperty("result", "success");
                    jo.add("data", item);
                    return jo.toString();
                }
            }
        }catch(Exception e) {
                e.printStackTrace();
                jo.addProperty("result", "failed");
                return jo.toString();
            }
        jo.addProperty("result", "failed");
        return jo.toString();
    }

    @GetMapping("/rest/service/getMonthlyRanking")
    @ResponseBody
    public String getMonthlyRanking(HttpServletRequest request) {
        JsonObject jo = new JsonObject();
        HttpSession hs = request.getSession();
        Member mem = (Member)hs.getAttribute("member");
        if(mem == null) {
            jo.addProperty("result", "failed");
            return jo.toString();
        }
        int member_uid = mem.getUid();
        try {
            List<Ranking> rankingList = rankingManager.getMonthlyRankingList();
            for (Ranking ranking : rankingList) {
                if (ranking.getUid() == member_uid) {
                    JsonObject item = new JsonObject();
//                    item.addProperty("member_uid", ranking.getUid());
                    item.addProperty("rank", ranking.getRank());
                    item.addProperty("distance", ranking.getDistance());
                    item.addProperty("created_date", ranking.getCreated_date().format(dtf_kor));
                    jo.addProperty("result", "success");
                    jo.add("data", item);
                    return jo.toString();
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
            jo.addProperty("result", "failed");
            return jo.toString();
        }
        jo.addProperty("result", "failed");
        return jo.toString();
    }
}
