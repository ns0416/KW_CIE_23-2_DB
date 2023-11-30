package com.bikeseoul.bikeseoul_kw.container;

import java.time.LocalDateTime;

public class BoardArticle extends CommonData{
    /*Board_Article table*/
    private int board_uid, user_uid;
    private String title, content;
    private LocalDateTime updated_date;

    /*Attachments table*/
    private int attachment_uid;
    private String file_name, loc;
    private LocalDateTime attachment_created_date;

    /*Board_Comment table*/
    private int comment_uid;
    private String comment_content;
    private LocalDateTime comment_created_date, comment_updated_date;

    public BoardArticle(int uid, int board_uid, int user_uid, String title, String content, LocalDateTime created_date, LocalDateTime updated_date) {
        super(uid, created_date);
        this.board_uid = board_uid;
        this.user_uid = user_uid;
        this.title = title;
        this.content = content;
        this.updated_date = updated_date;
    }

    public BoardArticle(int uid, int board_uid, int user_uid, String title, String content, LocalDateTime created_date, LocalDateTime updated_date, int attachment_uid, String file_name, String loc, LocalDateTime attachment_created_date, int comment_uid, String comment_content, LocalDateTime comment_created_date, LocalDateTime comment_updated_date) {
        super(uid, created_date);
        this.board_uid = board_uid;
        this.user_uid = user_uid;
        this.title = title;
        this.content = content;
        this.updated_date = updated_date;
        this.attachment_uid = attachment_uid;
        this.file_name = file_name;
        this.loc = loc;
        this.attachment_created_date = attachment_created_date;
        this.comment_uid = comment_uid;
        this.comment_content = comment_content;
        this.comment_created_date = comment_created_date;
        this.comment_updated_date = comment_updated_date;
    }

    public int getBoard_uid() {
        return board_uid;
    }

    public void setBoard_uid(int board_uid) {
        this.board_uid = board_uid;
    }

    public int getUser_uid() {
        return user_uid;
    }

    public void setUser_uid(int user_uid) {
        this.user_uid = user_uid;
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

    public LocalDateTime getUpdated_date() {
        return updated_date;
    }

    public void setUpdated_date(LocalDateTime updated_date) {
        this.updated_date = updated_date;
    }

    public int getAttachment_uid() {
        return attachment_uid;
    }

    public void setAttachment_uid(int attachment_uid) {
        this.attachment_uid = attachment_uid;
    }

    public String getFile_name() {
        return file_name;
    }

    public void setFile_name(String file_name) {
        this.file_name = file_name;
    }

    public String getLoc() {
        return loc;
    }

    public void setLoc(String loc) {
        this.loc = loc;
    }

    public LocalDateTime getAttachment_created_date() {
        return attachment_created_date;
    }

    public void setAttachment_created_date(LocalDateTime attachment_created_date) {
        this.attachment_created_date = attachment_created_date;
    }

    public int getComment_uid() {
        return comment_uid;
    }

    public void setComment_uid(int comment_uid) {
        this.comment_uid = comment_uid;
    }

    public String getComment_content() {
        return comment_content;
    }

    public void setComment_content(String comment_content) {
        this.comment_content = comment_content;
    }

    public LocalDateTime getComment_created_date() {
        return comment_created_date;
    }

    public void setComment_created_date(LocalDateTime comment_created_date) {
        this.comment_created_date = comment_created_date;
    }

    public LocalDateTime getComment_updated_date() {
        return comment_updated_date;
    }

    public void setComment_updated_date(LocalDateTime comment_updated_date) {
        this.comment_updated_date = comment_updated_date;
    }
}
