package com.bikeseoul.bikeseoul_kw.container;

import java.time.LocalDateTime;

public class User extends CommonData {
	private String id, pw, email,phone;
	private int isvalid=2, is_lost=2;
	private int level;
	
	public User(String id) {
		super(0, null);
		this.id = id;
	}
	public User(int uid,String id, String pw, String email, String phone, int level, boolean isvalid, boolean is_lost, LocalDateTime regist_date) {
		super(uid, regist_date);
		this.id = id;
		this.pw = pw;
		this.email = email;
		this.phone = phone;
		this.level = level;
		this.isvalid = isvalid == true ? 1 : 0;
		this.is_lost = is_lost == true ? 1 : 0;
	}
	public User(int uid,String id, String pw, String email, String phone, int level, int isvalid, int is_lost, LocalDateTime regist_date) {
		super(uid, regist_date);
		this.id = id;
		this.pw = pw;
		this.email = email;
		this.phone = phone;
		this.level = level;
		this.isvalid = isvalid;
		this.is_lost = is_lost;
	}
	public User(int uid, String phone) {
		super(uid, null);
		this.phone = phone;
	}
	public User(int uid, String id, String pw, String email) {
		super(uid, null);
		this.id = id;
		this.pw = pw;
		this.email = email;
	}
	public User(int uid, String id, String pw, String phone, String email) {
		super(uid, null);
		this.id = id;
		this.pw = pw;
		this.phone = phone;
		this.email = email;
	}
	public User( String id, String pw, String phone) {
		super(0, null);
		this.id = id;
		this.pw = pw;
		this.phone = phone;
	}
	public User(String id, String email) {
		super(0, null);
		this.id = id;
		this.email = email;
	}
	public String getId() {
		return id;
	}
	public String getPw() {
		return pw;
	}
	public String getPhone() {
		return phone;
	}
	public String getEmail() {
		return email;
	}
	public int getLevel() {
		return level;
	}
	public boolean getIsvalid_boolean() {
		return isvalid == 1 ? true : false;
	}
	public boolean getIs_lost_boolean() {
		return is_lost == 1 ? true : false;
	}
	public int getIsvalid() {
		return isvalid;
	}
	public int getIs_lost() {
		return is_lost;
	}
	public void setPw(String pw) {
		this.pw = pw;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public void setLevel(int level) {
		this.level = level;
	}
	public void setIs_valid(boolean is_valid) {
		this.isvalid = is_valid == true ? 1 : 0;
	}
	public void setIs_lost(boolean is_lost) {
		this.is_lost = is_lost == true ? 1 : 0;
	}
	
}
