package com.bikeseoul.bikeseoul_kw.container;

import java.time.LocalDateTime;
import java.util.ArrayList;

public class BoardArticle extends CommonData{
    /*Board_Article table*/
    private int board_uid, user_uid;
    private String title, content;
    private LocalDateTime updated_date;

    /*Attachments table*/
    private ArrayList<Attachment> attachments = null;

    /*Board_Comment table*/
    private ArrayList<Comment> comments = null;

    public BoardArticle(int uid, int board_uid, int user_uid, String title, String content, LocalDateTime created_date, LocalDateTime updated_date) {
        super(uid, created_date);
        this.board_uid = board_uid;
        this.user_uid = user_uid;
        this.title = title;
        this.content = content;
        this.updated_date = updated_date;
    }

    public BoardArticle(int board_uid, int user_uid, String title, String content) {
        super(0, null);
        this.board_uid = board_uid;
        this.user_uid = user_uid;
        this.title = title;
        this.content = content;
    }
    public BoardArticle(int uid, int board_uid, int user_uid, String title, String content) {
        super(uid, null);
        this.board_uid = board_uid;
        this.user_uid = user_uid;
        this.title = title;
        this.content = content;
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
    public void addAttachment(Attachment att) {
    	if(attachments == null)
    		attachments = new ArrayList<Attachment>();
    	attachments.add(att);
    }
    public void addComment(Comment cmt) {
    	if(comments == null)
    		comments = new ArrayList<Comment>();
    	comments.add(cmt);
    }
    public ArrayList<Attachment> getAttachments(){
    	return attachments;
    }
    public ArrayList<Comment> getComments() {
		return comments;
	}
 
}
