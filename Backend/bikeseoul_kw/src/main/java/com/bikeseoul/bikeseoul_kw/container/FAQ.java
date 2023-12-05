package com.bikeseoul.bikeseoul_kw.container;

import java.time.LocalDateTime;

public class FAQ extends CommonData{
    private String faq_name;
    private int article_uid;
    private String title, content;
    private LocalDateTime article_created_date;
    public FAQ(int uid, String faq_name, LocalDateTime created_date) {
        super(uid, created_date);
        this.faq_name = faq_name;
    }

    public FAQ(int uid, int article_uid, String faq_name, String title, String content, LocalDateTime created_date, LocalDateTime article_created_date) {
        super(uid, created_date);
        this.article_uid = article_uid;
        this.faq_name = faq_name;
        this.title = title;
        this.content = content;
        this.article_created_date = article_created_date;
    }

    public String getFaq_name() {
        return faq_name;
    }

    public void setFaq_name(String faq_name) {
        this.faq_name = faq_name;
    }

    public int getArticle_uid() {
        return article_uid;
    }

    public void setArticle_uid(int article_uid) {
        this.article_uid = article_uid;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public LocalDateTime getArticle_created_date() {
        return article_created_date;
    }

    public void setArticle_created_date(LocalDateTime article_created_date) {
        this.article_created_date = article_created_date;
    }
}
