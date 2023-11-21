package com.bikeseoul.bikeseoul_kw.container;

import java.time.LocalDateTime;

public class User extends CommonData {
	private String id, pw, email,phone;
	private boolean is_valid, is_lost;
	private int level;
	
	public User(String id) {
		super(0, null);
		this.id = id;
	}
	public User(int uid,String id, String pw, String email, String phone, int level, boolean is_valid, boolean is_lost, LocalDateTime regist_date) {
		super(uid, regist_date);
		this.id = id;
		this.pw = pw;
		this.email = email;
		this.phone = phone;
		this.level = level;
		this.is_valid = is_valid;
		this.is_lost = is_lost;
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
	public boolean getIs_valid() {
		return is_valid;
	}
	public boolean getIs_lost() {
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
		this.is_valid = is_valid;
	}
	public void setIs_lost(boolean is_lost) {
		this.is_lost = is_lost;
	}
	
}
