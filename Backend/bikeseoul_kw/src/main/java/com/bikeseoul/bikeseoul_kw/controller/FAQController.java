package com.bikeseoul.bikeseoul_kw.controller;

import com.bikeseoul.bikeseoul_kw.container.Coupon;
import com.bikeseoul.bikeseoul_kw.container.FAQ;
import com.bikeseoul.bikeseoul_kw.manager.FAQManager;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

@RestController
public class FAQController {
    @Autowired
    private FAQManager faqManager;

    DateTimeFormatter dtf_kor = DateTimeFormatter.ofPattern("YYYY년 MM월 dd일 HH:mm:ss");
    DateTimeFormatter dtf_ymd = DateTimeFormatter.ofPattern("YYYY-MM-dd");
    DateTimeFormatter dtf = DateTimeFormatter.ofPattern("YYYY-MM-dd HH:mm:ss");

    @GetMapping("/rest/getFAQList")
    @ResponseBody
    public String getFAQList(@RequestParam(value = "faq_name", required = false) String faq_name) {
        JsonObject jo = new JsonObject();
        JsonArray ja = new JsonArray();

        try{
            List<FAQ> faqList;
            faqList = faqManager.getFAQList(faq_name);
            for(FAQ faq:faqList) {
                JsonObject item = new JsonObject();
                item.addProperty("uid", faq.getUid());
                item.addProperty("faq_name", faq.getFaq_name());
                item.addProperty("created_date", faq.getCreated_date().format(dtf_kor));
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

    @GetMapping("/rest/getFAQArticleList")
    @ResponseBody
    public String getFAQArticleList(@RequestParam(value = "faq_uid", required = false) int faq_uid, @RequestParam(value = "title", required = false) String title) {
        JsonObject jo = new JsonObject();
        JsonArray ja = new JsonArray();
        try{
            List<FAQ> faqList;
            faqList = faqManager.getFAQArticleList(faq_uid, title);
            for(FAQ faq:faqList) {
                JsonObject item = new JsonObject();
                item.addProperty("uid", faq.getUid());
                item.addProperty("article_uid", faq.getArticle_uid());
                item.addProperty("faq_name", faq.getFaq_name());
                item.addProperty("title", faq.getTitle());
                item.addProperty("content", faq.getContent());
                item.addProperty("created_date", faq.getCreated_date().format(dtf_kor));
                item.addProperty("article_created_date", faq.getArticle_created_date().format(dtf_kor));
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

    @GetMapping("/rest/getFAQArticle")
    @ResponseBody
    public String getFAQArticle(@RequestParam("uid") int uid) {
        JsonObject jo = new JsonObject();
        try{
            FAQ faq = faqManager.getFAQArticle(uid);
            JsonObject item = new JsonObject();
            item.addProperty("uid", faq.getUid());
            item.addProperty("article_uid", faq.getArticle_uid());
            item.addProperty("faq_name", faq.getFaq_name());
            item.addProperty("title", faq.getTitle());
            item.addProperty("content", faq.getContent());
            item.addProperty("created_date", faq.getCreated_date().format(dtf_kor));
            item.addProperty("article_created_date", faq.getArticle_created_date().format(dtf_kor));
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
