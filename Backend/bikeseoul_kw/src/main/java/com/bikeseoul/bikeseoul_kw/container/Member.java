package com.bikeseoul.bikeseoul_kw.container;

import java.time.LocalDateTime;

public class Member extends User{
	private String sex;
	private int age, weight;
	public Member(int uid, String id, String pw, String email, String phone, int level, String sex, int age, int weight,
		boolean is_lost, boolean isvalid, LocalDateTime regist_date) {
		super(uid, id, pw, email, phone, level, isvalid, is_lost, regist_date);
		// TODO Auto-generated constructor stub
		this.sex = sex;
		this.age = age;
		this.weight = weight;
	}
	public Member(int uid,String phone, int weight) {
			super(uid, phone);
			// TODO Auto-generated constructor stub
			this.weight = weight;
		}
	public Member(int uid,String email) {
		super(uid, null, null, email, null,0,false, false, null);
		// TODO Auto-generated constructor stub
	}
	public Member(int uid,boolean is_lost) {
		super(uid, null, null, null, null,0,false, is_lost, null);
		// TODO Auto-generated constructor stub
	}
	public Member(String id, String email) {
			super(id, email);
			// TODO Auto-generated constructor stub
		}
	public Member(int uid, String id, String pw, String email) {
		super(uid, id, pw, email);
		// TODO Auto-generated constructor stub
	}
	public Member(String id) {
		super(id);
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
