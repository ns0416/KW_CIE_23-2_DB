package com.bikeseoul.bikeseoul_kw.controller;

import java.time.format.DateTimeFormatter;
import java.util.Calendar;
import java.util.HashMap;

import com.bikeseoul.bikeseoul_kw.container.Config;
import com.bikeseoul.bikeseoul_kw.manager.ConfigManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.bikeseoul.bikeseoul_kw.container.CommonEnum;
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
	
	@GetMapping("/rest/service/getUserInfo")
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
		if(found == null || found.getIsvalid()==false) {
			jo.addProperty("result", "failed");
		}else {
			jo.addProperty("result", "success");
			jo.addProperty("id", found.getId().substring(0, 3)+"***"+found.getId().substring(found.getId().length()-2));
		}
		return jo.toString();
	}
	
	@PostMapping("/rest/findPW")
	public String findPW(HttpServletRequest request, @RequestBody HashMap<String, Object> body) {
		HttpSession hs = request.getSession(true);
		JsonObject jo = new JsonObject();
		//Member mem = am.findID(new Member((String)body.get("id"),(String)body.get("email")));
		Member found = am.findID(new Member((String)body.get("id"),(String)body.get("email")));
		if(found == null || found.getIsvalid()==false) {
			jo.addProperty("result", "failed");
		}else {
			if(found.getId().equals((String)body.get("id"))) {
				boolean emailcheck = am.sendAuthMail(hs, found.getEmail());
				if(emailcheck) {
					if(hs.getAttribute("register_emailauth") != null && (Boolean)hs.getAttribute("register_emailauth") == true) {
						hs.setAttribute("register_emailauth", null);
					}
					hs.setAttribute("findpw_emailauth", true);
					hs.setAttribute("userinfo", found);
					jo.addProperty("result", "success");
					
				}else {
					jo.addProperty("result", "email_failed");
				}
			}else {
				jo.addProperty("result", "failed");
			}
		}
		return jo.toString();
	}
	@PostMapping("/rest/updatePW")
	public String updatePW(HttpServletRequest request, @RequestBody HashMap<String, Object> body) {
		HttpSession hs = request.getSession(false);
		JsonObject jo = new JsonObject();
		if(hs == null) {
			jo.addProperty("result", "failed1");
			return jo.toString();
		}
		Member found = (Member)hs.getAttribute("userinfo");
		if(hs.getAttribute("findpw_email_check") == null  || (Boolean)hs.getAttribute("findpw_email_check") != true || found == null || am.checkResetPWTime(hs)==false) {
			jo.addProperty("result", "failed2");
		}else {
			Member user = new Member(found.getUid(), found.getId(), found.getPw(), found.getEmail());
			CommonEnum res = am.resetPW(user, (String)body.get("pw"), (String)body.get("pw_cfm"));
			if(res == CommonEnum.SUCCESS) {
				jo.addProperty("result", "success");
			}else if(res == CommonEnum.NOT_PERMITTED){
				jo.addProperty("result", "same_pw");
			}else if(res == CommonEnum.PW_ERROR){
				jo.addProperty("result", "pw_error");
			}else {
				jo.addProperty("result", "failed3");
			}
		}
		return jo.toString();
	}

	@PostMapping("/rest/checkAuthCode")
	public String checkAuthCode(HttpServletRequest request,  @RequestBody HashMap<String, Object> body) {
		HttpSession hs = request.getSession();
		JsonObject jo = new JsonObject();
		Calendar c = Calendar.getInstance();
		try {
			boolean checkauthcode = am.checkEmailAuth(hs,  (String)body.get("authcode"));
			if(checkauthcode) {
				jo.addProperty("result", "success");
				if(hs.getAttribute("findpw_emailauth") != null && (Boolean)hs.getAttribute("findpw_emailauth")) {
					hs.setAttribute("findpw_emailauth", null);
					hs.setAttribute("findpw_email_check", true);
					hs.setAttribute("findpw_authTime", Calendar.getInstance());
				}
			}else {
				jo.addProperty("result", "failed");
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			jo.addProperty("result", "failed");
		}
		return jo.toString();
	}

	@GetMapping("/rest/noticeId")
	@ResponseBody
	public String noticeId(){
		JsonObject jo = new JsonObject();
		Config config = new ConfigManager().getConfig();
		String group_code = "noticeId";
		String item_code = "noticeId";
		try{
			String noticeId = config.get(group_code, item_code);
			jo.addProperty("result", "success");
			jo.addProperty("noticeId", noticeId);
		}catch (Exception e){
			e.printStackTrace();
			jo.addProperty("result", "failed");
			return jo.toString();
		}
		return jo.toString();
	}

	// 이용안내, 이용권 사용안내, 보험안내
	@GetMapping("/rest/information")
	@ResponseBody
	public String information(){
		JsonObject jo = new JsonObject();
		Config config = new ConfigManager().getConfig();
		String group_code = "information";
		String item_code = "information";
		try{
			String information = config.get(group_code, item_code);
			jo.addProperty("result", "success");
			jo.addProperty("information", information);
		}catch (Exception e){
			e.printStackTrace();
			jo.addProperty("result", "failed");
			return jo.toString();
		}
		return jo.toString();
	}

	// 이용약관 및 방침
	@GetMapping("/rest/terms")
	@ResponseBody
	public String terms(@RequestParam("content") String content){
		JsonObject jo = new JsonObject();
		Config config = new ConfigManager().getConfig();
		String group_code = "terms";
		String item_code = content;
		try{
			String terms = config.get(group_code, item_code);
			jo.addProperty("result", "success");
			jo.addProperty("terms", terms);
		}catch (Exception e){
			e.printStackTrace();
			jo.addProperty("result", "failed");
			return jo.toString();
		}
		return jo.toString();
	}

	// 안전수칙
	@GetMapping("/rest/rules")
	@ResponseBody
	public String rules(@RequestParam("content") String content){
		JsonObject jo = new JsonObject();
		Config config = new ConfigManager().getConfig();
		String group_code = "rules";
		String item_code = content;
		try{
			String rules = config.get(group_code, item_code);
			jo.addProperty("result", "success");
			jo.addProperty("rules", rules);
		}catch (Exception e){
			e.printStackTrace();
			jo.addProperty("result", "failed");
			return jo.toString();
		}
		return jo.toString();
	}

}
