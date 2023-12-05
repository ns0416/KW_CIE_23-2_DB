package com.bikeseoul.bikeseoul_kw.container;

import java.time.LocalDateTime;

public class Breakdown extends BoardArticle{
	private break_type breaktype;
	public Breakdown(int uid, int member_uid, int bike_uid, break_type breaktype, String content, LocalDateTime created_date) {
		super(uid, bike_uid, member_uid, null, content, created_date, null);
		// TODO Auto-generated constructor stub
		this.breaktype = breaktype;
	}
	public Breakdown(int uid, break_type breaktype, String content) {
		super(uid, 0, 0, null, content, null, null);
		// TODO Auto-generated constructor stub
		this.breaktype = breaktype;
	}
	public Breakdown(int member_uid, int bike_uid, break_type breaktype, String content) {
		super(0, bike_uid, member_uid, null, content, null, null);
		// TODO Auto-generated constructor stub
		this.breaktype = breaktype;
	}
	public int getBike_uid() {
		return getBoard_uid();
	}
	public break_type getBreaktype() {
		return breaktype;
	}
	
}
