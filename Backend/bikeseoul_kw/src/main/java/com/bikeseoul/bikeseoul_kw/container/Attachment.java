package com.bikeseoul.bikeseoul_kw.container;

import java.time.LocalDateTime;

public class Attachment extends CommonData{
	private int article_uid;
	private String filename, loc;
	
	public Attachment(int uid, int article_uid, String filename, String loc, LocalDateTime created_date) {
		super(uid, created_date);
		this.article_uid = article_uid;
		this.filename = filename;
		this.loc = loc;
	}
	public Attachment(int article_uid, String filename, String loc) {
		super(0, null);
		this.article_uid = article_uid;
		this.filename = filename;
		this.loc = loc;
	}
	public Attachment(String filename, String loc) {
		super(0, null);
		this.filename = filename;
		this.loc = loc;
	}
	public int getArticle_uid() {
		return article_uid;
	}
	public String getFilename() {
		return filename;
	}
	public String getLoc() {
		return loc;
	}
	public void setArticle_uid(int article_uid) {
		this.article_uid = article_uid;
	}
}
