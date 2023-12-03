package com.bikeseoul.bikeseoul_kw.container;

import java.time.LocalDateTime;

public class PaymentMethod extends CommonData{
	private String method_name;
	public PaymentMethod(int uid, String method_name, LocalDateTime created_date) {
		super(uid, created_date);
		this.method_name = method_name;
	}
	public String getMethod_name() {
		return method_name;
	}
	
}
