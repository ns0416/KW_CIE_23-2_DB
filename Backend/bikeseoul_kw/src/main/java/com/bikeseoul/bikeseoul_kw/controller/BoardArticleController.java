package com.bikeseoul.bikeseoul_kw.controller;

import com.bikeseoul.bikeseoul_kw.container.BoardArticle;
import com.bikeseoul.bikeseoul_kw.container.PaymentLog;
import com.bikeseoul.bikeseoul_kw.service.BoardArticleService;
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
public class BoardArticleController {
    @Autowired
    private BoardArticleService boardArticleService;

    DateTimeFormatter dtf_kor = DateTimeFormatter.ofPattern("YYYY년 MM월 dd일 HH:mm:ss");
    DateTimeFormatter dtf_ymd = DateTimeFormatter.ofPattern("YYYY-MM-dd");
    DateTimeFormatter dtf = DateTimeFormatter.ofPattern("YYYY-MM-dd HH:mm:ss");

    @GetMapping("/rest/getBoardArticleList")
    @ResponseBody
    public String getBoardArticleList(@RequestParam("board_uid") int board_uid) {
        JsonObject jo = new JsonObject();
        if (board_uid == 0) {
            jo.addProperty("result", "failed");
            return jo.toString();
        }

        JsonArray ja = new JsonArray();

        try {
            List<BoardArticle> boardArticleList = boardArticleService.getBoardArticleList(board_uid);
            for (BoardArticle boardArticle : boardArticleList) {
                JsonObject item = new JsonObject();
                item.addProperty("uid", boardArticle.getUid());
                item.addProperty("board_uid", boardArticle.getBoard_uid());
                item.addProperty("user_uid", boardArticle.getUser_uid());
                item.addProperty("title", boardArticle.getTitle());
                item.addProperty("content", boardArticle.getContent());
                item.addProperty("created_date", boardArticle.getCreated_date().format(dtf_kor));
                item.addProperty("updated_date", boardArticle.getUpdated_date().format(dtf_kor));
                ja.add(item);
            }
            jo.addProperty("result", "success");
            jo.add("boardArticleList", ja);
            return jo.toString();
        } catch (Exception e) {
            jo.addProperty("result", "failed");
            return jo.toString();
        }
    }

    @GetMapping("/rest/getBoardArticle")
    @ResponseBody
    public String getBoardArticle(@RequestParam("uid") int uid) {
        JsonObject jo = new JsonObject();
        if (uid == 0) {
            jo.addProperty("result", "failed");
            return jo.toString();
        }

        try {
            BoardArticle boardArticle = boardArticleService.getBoardArticle(uid);
            JsonObject item = new JsonObject();
            item.addProperty("uid", boardArticle.getUid());
            item.addProperty("board_uid", boardArticle.getBoard_uid());
            item.addProperty("user_uid", boardArticle.getUser_uid());
            item.addProperty("title", boardArticle.getTitle());
            item.addProperty("content", boardArticle.getContent());
            item.addProperty("created_date", boardArticle.getCreated_date().format(dtf_kor));
            item.addProperty("updated_date", boardArticle.getUpdated_date().format(dtf_kor));
            item.addProperty("attachment_uid", boardArticle.getAttachment_uid());
            item.addProperty("file_name", boardArticle.getFile_name());
            item.addProperty("loc", boardArticle.getLoc());
            item.addProperty("attachment_created_date", boardArticle.getAttachment_created_date().format(dtf_kor));
            item.addProperty("comment_uid", boardArticle.getComment_uid());
            item.addProperty("comment_content", boardArticle.getComment_content());
            item.addProperty("comment_created_date", boardArticle.getComment_created_date().format(dtf_kor));
            item.addProperty("comment_updated_date", boardArticle.getComment_updated_date().format(dtf_kor));
            jo.addProperty("result", "success");
            jo.add("boardArticle", item);
            return jo.toString();
        } catch (Exception e) {
            jo.addProperty("result", "failed");
            return jo.toString();
        }
    }

}
