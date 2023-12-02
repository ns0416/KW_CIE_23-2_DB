package com.bikeseoul.bikeseoul_kw.container;

import java.time.LocalDateTime;

public class Comment extends CommonData{
	private int article_uid, user_uid;
	private String content;
	private LocalDateTime updated_date;
	
	public Comment(int uid, int article_uid, int user_uid, String content,LocalDateTime created_date,LocalDateTime updated_date) {
		super(uid, created_date);
		this.article_uid = article_uid;
		this.user_uid = user_uid;
		this.content = content;
		this.updated_date = updated_date;
	}
	public Comment(int article_uid, int user_uid, String content) {
		super(0, null);
		this.article_uid = article_uid;
		this.user_uid = user_uid;
		this.content = content;
	}
	public Comment(int uid, int article_uid, int user_uid, String content) {
		super(uid, null);
		this.article_uid = article_uid;
		this.user_uid = user_uid;
		this.content = content;
	}
	public int getArticle_uid() {
		return article_uid;
	}
	public int getUser_uid() {
		return user_uid;
	}
	public String getContent() {
		return content;
	}
	public LocalDateTime getUpdated_date() {
		return updated_date;
	}
}
