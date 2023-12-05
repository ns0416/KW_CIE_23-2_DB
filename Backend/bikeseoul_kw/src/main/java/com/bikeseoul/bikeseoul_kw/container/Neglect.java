package com.bikeseoul.bikeseoul_kw.container;

import java.time.LocalDateTime;

public class Neglect extends BoardArticle{
	private int bike_uid;
	private double lat, lon;
	private String detail_address;
	public Neglect(int uid, int board_uid, int user_uid, String title, String content, LocalDateTime created_date,
			LocalDateTime updated_date, int bike_uid, double lat, double lon, String detail_address) {
		super(uid, board_uid, user_uid, title, content, created_date, updated_date);
		// TODO Auto-generated constructor stub
		this.bike_uid = bike_uid;
		this.lat = lat;
		this.lon = lon;
		this.detail_address =detail_address;
	}
	public Neglect(int board_uid, int user_uid, String title, String content) {
		super(0, board_uid, user_uid, title, content, null, null);
		// TODO Auto-generated constructor stub
	}
	public Neglect(int uid, int board_uid, int user_uid, String title, String content) {
		super(uid, board_uid, user_uid, title, content, null, null);
		// TODO Auto-generated constructor stub
	}
public int getBike_uid() {
	return bike_uid;
}
public double getLat() {
	return lat;
}
public double getLon() {
	return lon;
}
public String getDetail_address() {
	return detail_address;
}
public void setBike_uid(int bike_uid) {
	this.bike_uid = bike_uid;
}
public void setLat(double lat) {
	this.lat = lat;
}
public void setLon(double lon) {
	this.lon = lon;
}
public void setDetail_address(String detail_address) {
	this.detail_address = detail_address;
}
	
}
