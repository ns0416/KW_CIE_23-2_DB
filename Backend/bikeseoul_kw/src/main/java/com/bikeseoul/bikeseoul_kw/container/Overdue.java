package com.bikeseoul.bikeseoul_kw.container;

import java.time.LocalDateTime;

public class Overdue extends CommonData{
	private int rent_uid, overdue_amount, payment_finished;
	private LocalDateTime updated_date;
	
	public Overdue(int uid, int rent_uid, int overdue_amount, int payment_finished, LocalDateTime created_date, LocalDateTime updated_date) {
		super(uid, created_date);
		this.rent_uid = rent_uid;
		this.overdue_amount = overdue_amount;
		this.payment_finished = payment_finished;
		this.updated_date = updated_date;
	}
	public Overdue(int overdue_amount, int payment_finished, LocalDateTime created_date, LocalDateTime updated_date) {
		super(0, created_date);
		this.overdue_amount = overdue_amount;
		this.payment_finished = payment_finished;
		this.updated_date = updated_date;
	}
	public int getOverdue_amount() {
		return overdue_amount;
	}
	public int getPayment_finished() {
		return payment_finished;
	}
	
	public int getRent_uid() {
		return rent_uid;
	}
	public LocalDateTime getUpdated_date() {
		return updated_date;
	}
	
	

}
