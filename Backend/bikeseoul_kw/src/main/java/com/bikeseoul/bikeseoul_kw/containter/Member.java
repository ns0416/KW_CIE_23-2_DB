package com.bikeseoul.bikeseoul_kw.containter;

import java.time.LocalDateTime;

public class Member extends User{
	private String sex;
	private int age, weight;
	public Member(int uid, String id, String pw, String email, String phone, int level, String sex, int age, int weight,
		boolean is_lost, boolean is_valid, LocalDateTime regist_date) {
		super(uid, id, pw, email, phone, level, is_valid, is_lost, regist_date);
		// TODO Auto-generated constructor stub
		this.sex = sex;
		this.age = age;
		this.weight = weight;
	}
	
	public Member(String name, String id) {
			super(name, id);
			// TODO Auto-generated constructor stub
		}
	public Member(String id) {
		super(null, id);
		// TODO Auto-generated constructor stub
	}
	public String getSex() {
		return sex;
	}
	public int getAge() {
		return age;
	}
	public int getWeight() {
		return weight;
	}
}
