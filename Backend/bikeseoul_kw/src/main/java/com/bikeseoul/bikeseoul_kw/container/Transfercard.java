package com.bikeseoul.bikeseoul_kw.container;

import java.time.LocalDateTime;

public class Transfercard extends CommonData{

	private int member_uid;
	private String card_number;
	private card_type card_type;
	private LocalDateTime updated_time;
	
	public Transfercard(int uid, int member_uid, String card_number, card_type card_type, LocalDateTime updated_time, LocalDateTime created_date) {
		super(uid, created_date);
		this.member_uid = member_uid;
		this.card_number = card_number;
		this.card_type = card_type;
		this.updated_time = updated_time;
	}
	public Transfercard(int member_uid, String card_number, card_type card_type) {
		super(0, null);
		this.member_uid = member_uid;
		this.card_number = card_number;
		this.card_type = card_type;
	}
	public int getMember_uid() {
		return member_uid;
	}
	public String getCard_number() {
		return card_number;
	}
	public card_type getCard_type() {
		return card_type;
	}
	public LocalDateTime getUpdated_time() {
		return updated_time;
	}
	public void setCard_type(card_type card_type) {
		this.card_type = card_type;
	}
	public void setCard_number(String card_number) {
		this.card_number = card_number;
	}
	
}
