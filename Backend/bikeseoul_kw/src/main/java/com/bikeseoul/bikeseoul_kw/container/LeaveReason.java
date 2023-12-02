package com.bikeseoul.bikeseoul_kw.container;

public class LeaveReason extends CommonData{
	private String msg;
	public LeaveReason(int uid, String msg) {
		super(uid, null);
		this.msg = msg;
	}
	public String getMsg() {
		return msg;
	}
}
