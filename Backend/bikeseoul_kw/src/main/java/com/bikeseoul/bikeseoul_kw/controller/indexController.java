package com.bikeseoul.bikeseoul_kw.controller;

import java.time.format.DateTimeFormatter;
import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bikeseoul.bikeseoul_kw.container.Member;
import com.bikeseoul.bikeseoul_kw.container.User;
import com.bikeseoul.bikeseoul_kw.manager.AccountManager;
import com.google.gson.JsonObject;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;

@RestController
public class indexController {
	
	@Autowired
	private AccountManager am;
	
	DateTimeFormatter dtf_kor = DateTimeFormatter.ofPattern("YYYY년 MM월 dd일 HH:mm:ss");
	DateTimeFormatter dtf_ymd = DateTimeFormatter.ofPattern("YYYY-MM-dd");
	DateTimeFormatter dtf = DateTimeFormatter.ofPattern("YYYY-MM-dd HH:mm:ss");
	
	@PostMapping("/rest/login")
	public String Login(HttpServletRequest request, @RequestBody HashMap<String, Object> body) {
		JsonObject jo = new JsonObject();
		jo.addProperty("result", "failed");
		try {
			//AccountManager am = new AccountManager();
			String id = (String)body.get("id");
			String pw = (String)body.get("pw");
			if(id != null && id != "" && pw != null && pw != "") {
				Member result = (Member)am.loginCheck(id, pw, false);
				if(result != null) {
					int login_result = am.loginProcess(request, (User)result);
					if(login_result == 0)
						jo.addProperty("result", "success");
				}
			}		
		}catch(Exception e) {
			e.printStackTrace();
		}
		return jo.toString();
	}
	
	@GetMapping("/rest/getUserInfo")
	public String getUserInfo(HttpServletRequest request) {
		Member mem = (Member)am.checkLogged(request, false);
		JsonObject jo = new JsonObject();
		if(mem == null) {
			jo.addProperty("logged", false);
		}else {
			jo.addProperty("logged", true);
			jo.addProperty("id", mem.getId());
			jo.addProperty("phone", mem.getPhone());
		}
		return jo.toString();
	}
	@GetMapping("/rest/logout")
	public String Logout(HttpServletRequest request) {
		HttpSession hs= request.getSession();
		hs.invalidate();
		JsonObject jo = new JsonObject();
		jo.addProperty("result", "success");
		return jo.toString();
	}
	@GetMapping("/rest/findID")
	public String findID(HttpServletRequest request, String email) {
		JsonObject jo = new JsonObject();
		Member mem = am.findID(new Member(null, email));
		Member found = am.findID(mem);
		if(found == null || found.getIs_valid()==false) {
			jo.addProperty("result", "failed");
		}else {
			jo.addProperty("result", "success");
			jo.addProperty("id", found.getId().substring(0, 3)+"***"+found.getId().substring(found.getId().length()-2));
		}
		return jo.toString();
	}
}
