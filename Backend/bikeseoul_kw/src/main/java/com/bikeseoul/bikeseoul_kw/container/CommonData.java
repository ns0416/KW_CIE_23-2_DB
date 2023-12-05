package com.bikeseoul.bikeseoul_kw.container;

import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.TimeZone;

public class CommonData {
	protected int uid;
	protected LocalDateTime created_date;
	
	public CommonData(int uid, LocalDateTime created_date) {this.uid = uid; this.created_date= created_date;/*created_date != null ? created_date.atZone(ZoneId.systemDefault()).toInstant().toEpochMilli() : 0;*/}
	
	public int getUid() {
		return uid;
	}
	public LocalDateTime getCreated_date() {
		return created_date; //LocalDateTime.ofInstant(Instant.ofEpochMilli(created_date), TimeZone.getDefault().toZoneId());
	}
}
