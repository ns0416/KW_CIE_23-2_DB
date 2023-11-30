package com.bikeseoul.bikeseoul_kw.controller;

import com.bikeseoul.bikeseoul_kw.container.Coupon;
import com.bikeseoul.bikeseoul_kw.container.FAQ;
import com.bikeseoul.bikeseoul_kw.service.FAQService;
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
    private FAQService faqService;

    DateTimeFormatter dtf_kor = DateTimeFormatter.ofPattern("YYYY년 MM월 dd일 HH:mm:ss");
    DateTimeFormatter dtf_ymd = DateTimeFormatter.ofPattern("YYYY-MM-dd");
    DateTimeFormatter dtf = DateTimeFormatter.ofPattern("YYYY-MM-dd HH:mm:ss");

    @GetMapping("/rest/getFAQList")
    @ResponseBody
    public String getFAQList() {
        JsonObject jo = new JsonObject();
        JsonArray ja = new JsonArray();

        try{
            List<FAQ> faqList = faqService.getFAQList();
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

    @GetMapping("/rest/getFAQListByName")
    @ResponseBody
    public String getFAQListByName(@RequestParam("faq_name") String faq_name) {
        JsonObject jo = new JsonObject();
        JsonArray ja = new JsonArray();

        try{
            List<FAQ> faqList = faqService.getFAQListByName(faq_name);
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
    public String getFAQArticleList(@RequestParam("faq_uid") int faq_uid) {
        JsonObject jo = new JsonObject();
        JsonArray ja = new JsonArray();
        try{
            List<FAQ> faqList = faqService.getFAQArticleList(faq_uid);
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

    @GetMapping("/rest/getFAQArticleListByTitle")
    @ResponseBody
    public String getFAQArticleListByTitle(@RequestParam("title") String title) {
        JsonObject jo = new JsonObject();
        JsonArray ja = new JsonArray();
        try{
            List<FAQ> faqList = faqService.getFAQArticleListByTitle(title);
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
            FAQ faq = faqService.getFAQArticle(uid);
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
