package com.bikeseoul.bikeseoul_kw.controller;

import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.HashMap;
import java.util.List;

import com.bikeseoul.bikeseoul_kw.container.Config;
import com.bikeseoul.bikeseoul_kw.container.LeaveReason;
import com.bikeseoul.bikeseoul_kw.manager.ConfigManager;
import com.bikeseoul.bikeseoul_kw.manager.ServiceManager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.bikeseoul.bikeseoul_kw.container.CommonEnum;
import com.bikeseoul.bikeseoul_kw.container.Member;
import com.bikeseoul.bikeseoul_kw.container.User;
import com.bikeseoul.bikeseoul_kw.manager.AccountManager;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;

@RestController
public class indexController {
	
	@Autowired
	private AccountManager am;

	@Autowired
	private ConfigManager configManager;

	@Autowired
	private ServiceManager serviceManager;
	
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

	@GetMapping("/rest/service/getUserInfoList")
	public String getUserInfoList(HttpServletRequest request,
								  @RequestParam(value = "page", required = false, defaultValue = "0") int page,
								  @RequestParam(value = "page_limit", required = false, defaultValue = "0") int page_limit,
								  @RequestParam(value = "type", required = false) String type,
								  @RequestParam(value = "value", required = false) String value)
	{
		JsonObject jo = new JsonObject();
		HttpSession hs = request.getSession();
		Member mem = (Member)hs.getAttribute("member");
		if(mem == null) {
			jo.addProperty("result", "failed");
			return jo.toString();
		}
		int level = mem.getLevel();
		if(level != 9999) {
			jo.addProperty("result", "failed");
			return jo.toString();
		}
		try{
			List<Member> memberList;

			if(page_limit == 0)
				memberList = am.getMemberList(-1, -1, type, value, true);
			else{
				memberList = am.getMemberList(page, page_limit, type, value, true);
			}
			JsonArray ja = new JsonArray();

			for(Member member : memberList) {
				JsonObject item = new JsonObject();
				item.addProperty("uid", member.getUid());
				item.addProperty("id", member.getId());
				item.addProperty("email", member.getEmail());
				item.addProperty("phone", member.getPhone());
				item.addProperty("level", member.getLevel());
				item.addProperty("sex", member.getSex());
				item.addProperty("age", member.getAge());
				item.addProperty("weight", member.getWeight());
				item.addProperty("is_lost", member.getIs_lost());
				item.addProperty("is_valid", member.getIsvalid());
				ja.add(item);
			}
			jo.addProperty("result", "success");
			jo.add("data", ja);
		}catch (Exception e){
			e.printStackTrace();
			jo.addProperty("result", "failed");
			return jo.toString();
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
		if(found == null || found.getIsvalid_boolean()==false) {
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
		if(found == null || found.getIsvalid_boolean()==false) {
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
		if(hs.getAttribute("findpw_email_check") == null  || (Boolean)hs.getAttribute("findpw_email_check") != true || found == null || am.checkAuthTime(hs,"findpw_authTime")==false) {
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
	
	@PostMapping("/rest/service/updateEmail")
	public String updateEmail(HttpServletRequest request, @RequestBody HashMap<String, Object> body) {
		HttpSession hs = request.getSession(false);
		JsonObject jo = new JsonObject();
		if(hs == null) {
			jo.addProperty("result", "failed1");
			return jo.toString();
		}
		Member mem = (Member)hs.getAttribute("member");
		if(hs.getAttribute("register_emailauth") == null  || (Boolean)hs.getAttribute("register_emailauth") != true|| am.checkAuthTime(hs, "register_authTime")==false) {
			jo.addProperty("result", "failed2");
		}else {
			Member user = new Member(mem.getUid(),(String)hs.getAttribute("authAddr"));
			CommonEnum res = am.updateUserInfo(user);
			if(res == CommonEnum.SUCCESS) {
				jo.addProperty("result", "success");
			}else if(res == CommonEnum.NOT_PERMITTED){
				jo.addProperty("result", "same_email");
			}else {
				jo.addProperty("result", "failed3");
			}
		}
		return jo.toString();
	}
	
	@PostMapping("/rest/registerMember1Step")
	public String registerMember1Step(HttpServletRequest request, @RequestBody HashMap<String, Object> body) {
		JsonObject jo = new JsonObject();
		try {
			HttpSession hs = request.getSession();
			Member user = new Member((String)body.get("id"), (String)body.get("pw"), (String)body.get("phone"), (String)hs.getAttribute("authAddr"));
			
			hs.setAttribute("register_info", user);
			hs.setAttribute("pw_cfm", (String)body.get("pw_cfm"));
			jo.addProperty("result", "success");
		} catch (Exception e) {
			// TODO Auto-generated catch block
			jo.addProperty("result", "failed");
			e.printStackTrace();
		}
		return jo.toString();
	}
	
	@PostMapping("/rest/registerMember")
	public String registerMember(HttpServletRequest request, @RequestBody HashMap<String, Object> body) {
		JsonObject jo = new JsonObject();
		try {
			HttpSession hs = request.getSession();
			Member user = (Member)hs.getAttribute("register_info");
			String pw_cfm = (String)hs.getAttribute("pw_cfm");
			String email = (String)hs.getAttribute("authAddr");
			if(user == null || pw_cfm == null || email == null)
				throw new Exception();
			Member mem = (Member)user;
			mem.setWeight((Integer)body.get("weight"));
			mem.setAge((Integer)body.get("age"));
			mem.setSex((String)body.get("sex"));
			mem.setEmail(email);
			CommonEnum res = am.registerUser(mem, pw_cfm);
			jo.addProperty("result", "success");
		} catch (Exception e) {
			// TODO Auto-generated catch block
			jo.addProperty("result", "failed");
			e.printStackTrace();
		}
		return jo.toString();
	}
	
	@PostMapping("/rest/service/setLost")
	public String setLost(HttpServletRequest request, @RequestBody HashMap<String, Object> body) {
		JsonObject jo = new JsonObject();
		try {
			HttpSession hs = request.getSession();
			Member mem = (Member)hs.getAttribute("member");
			
			String pw_cur = (String)body.get("pw_cur");
			Member mem_ = new Member(mem.getUid(), true);
			User chk_pw = am.checkPW(mem, pw_cur);
			if(chk_pw == null) {
				jo.addProperty("result", "failed");
				return jo.toString();
			}
			
			CommonEnum res = am.updateUserInfo(mem_);
			if(res == CommonEnum.SUCCESS) {
				jo.addProperty("result", "success");
			}else {
				if(res == CommonEnum.NOT_PERMITTED) {
					jo.addProperty("msg", "permission_error");
				}else if(res == CommonEnum.PW_ERROR) {
					jo.addProperty("msg", "pw_error");
				}
				jo.addProperty("result", "failed");
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return jo.toString();
	}
	
	@PostMapping("/rest/service/changePW")
	public String changePW(HttpServletRequest request, @RequestBody HashMap<String, Object> body) {
		HttpSession hs = request.getSession();
		Member mem = (Member)hs.getAttribute("member");
		JsonObject jo = new JsonObject();
		String pw_cur = (String)body.get("pw_cur");
		String pw = (String)body.get("pw");
		String pw_cfm = (String)body.get("pw_cfm");
		CommonEnum res = am.changePW(mem, pw_cur, pw, pw_cfm);
		if(res == CommonEnum.SUCCESS) {
			jo.addProperty("result", "success");
		}else {
			if(res == CommonEnum.NOT_PERMITTED) {
				jo.addProperty("msg", "cur_pw_not_match");
			}else if(res == CommonEnum.PW_ERROR) {
				jo.addProperty("msg", "pw_policy_error");
			}
			jo.addProperty("result", "failed");
		}
		
		return jo.toString();
	}
	@PostMapping("/rest/service/updateMember")
	public String updateMember(HttpServletRequest request, @RequestBody HashMap<String, Object> body) {
		HttpSession hs = request.getSession();
		Member mem = (Member)hs.getAttribute("member");
		JsonObject jo = new JsonObject();
		int weight = 0;
		if(body.containsKey("weight"))
			weight = (Integer)body.get("weight");
		String phone = (String)body.get("phone");
		if(phone != null)
			phone = phone.replaceAll("[^0-9]", "");
		Member new_mem = new Member(mem.getUid(), phone, weight);
		CommonEnum res = am.updateUserInfo(new_mem);
		if(res == CommonEnum.SUCCESS)
			jo.addProperty("result", "success");
		else
			jo.addProperty("result", "failed");
		return jo.toString();
	}
	@PostMapping("/rest/sendAuthMail")
	public String sendAuthMail(HttpServletRequest request,  @RequestBody HashMap<String, Object> body) {
		HttpSession hs = request.getSession();
		JsonObject jo = new JsonObject();
		try {
			boolean res = am.checkDuplication(2, (String)body.get("email"), 0, false);
			if(res) {
				jo.addProperty("result", "failed");
				jo.addProperty("msg", "duplicated_email");
				return jo.toString();
			}
			boolean sendmail = am.sendAuthMail(hs,  (String)body.get("email"));
			if(sendmail) {
				if(hs.getAttribute("findpw_emailauth") != null &&(Boolean)hs.getAttribute("findpw_emailauth") == true) {
					hs.setAttribute("findpw_emailauth", null);
					hs.setAttribute("userinfo", null);
				}
				hs.setAttribute("register_emailauth", true);
				jo.addProperty("result", "success");
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
	@GetMapping("/rest/service/getLeaveReasons")
	public String getLeaveReasons(HttpServletRequest request) {
		JsonObject jo = new JsonObject();
		List<LeaveReason> lr = am.getLeaveReasons(0);
		JsonArray ja = new JsonArray();
		for(LeaveReason item : lr) {
			JsonObject jo_item = new JsonObject();
			jo_item.addProperty("uid", item.getUid());
			jo_item.addProperty("msg", item.getMsg());
			ja.add(jo_item);
		}
		jo.addProperty("result", "success");
		jo.add("data", ja);
		return jo.toString();
	}
	@GetMapping("/rest/service/leaveUser")
	public String leaveUser(HttpServletRequest request, @RequestParam String lr_uid) {
		HttpSession hs = request.getSession();
		JsonObject jo = new JsonObject();
		Member mem = (Member)hs.getAttribute("member");
		try {
			Integer lr_uid_ = Integer.parseInt(lr_uid);
			if(lr_uid_ == null || lr_uid_==0)
				throw new Exception();
			List<LeaveReason> lr = am.getLeaveReasons(lr_uid_);
			if(lr == null || lr.size()==0)
				throw new Exception();
			CommonEnum res = am.LeaveUser(mem, lr.get(0));
			if(res != CommonEnum.SUCCESS)
				throw new Exception();
			jo.addProperty("result", "success");
		}catch(Exception e) {
			e.printStackTrace();
			jo.addProperty("result", "failed");
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
				}else {
					hs.setAttribute("register_authTime", Calendar.getInstance());
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

	@GetMapping("/rest/getConfig")
	@ResponseBody
	public String information(@RequestParam("group_code") String group_code, @RequestParam("item_code") String item_code){
		JsonObject jo = new JsonObject();
		Config config = configManager.getConfig();
		List<String> whitelist = new ArrayList<>();
		whitelist.add("rule");
		whitelist.add("payment_method");
		whitelist.add("terms_and_policy");
		whitelist.add("insurance_guide");
		if(group_code == null || item_code == null || !whitelist.contains(group_code)){
			jo.addProperty("result", "failed");
			return jo.toString();
		}
		try{
			String data = config.get(group_code, item_code);
			jo.addProperty("result", "success");
			jo.addProperty("data", data);
		}catch (Exception e){
			e.printStackTrace();
			jo.addProperty("result", "failed");
			return jo.toString();
		}
		return jo.toString();
	}
	@GetMapping("/rest/service/findPath")
	public String findPath(HttpServletRequest request, @RequestParam String s_lon, @RequestParam String s_lat, @RequestParam String d_lon, @RequestParam String d_lat) {
		HttpSession hs = request.getSession();
		JsonObject jo = new JsonObject();
		//Member mem = (Member)hs.getAttribute("member");
		try {
			double s_lon_ = Double.parseDouble(s_lon);
			double s_lat_ = Double.parseDouble(s_lat);
			double d_lon_ = Double.parseDouble(d_lon);
			double d_lat_ = Double.parseDouble(d_lat);
			
			
			JsonObject res = serviceManager.requestFindpath(s_lon_, s_lat_, d_lon_, d_lat_);
			if(res == null)
				throw new Exception();
			jo.addProperty("result", "success");
			jo.add("data", res);
		}catch(Exception e) {
			e.printStackTrace();
			jo.addProperty("result", "failed");
		}
		return jo.toString();
	}
	@PostMapping("/rest/admin/registerMember")
	public String registerMemberAdmin(HttpServletRequest request, @RequestBody HashMap<String, Object> body) {
		HttpSession hs = request.getSession();
		JsonObject jo = new JsonObject();
		Integer age = (Integer)body.get("age");
		Integer weight = (Integer)body.get("weight");
		
		Member mem = new Member((String)body.get("id"),(String)body.get("pw"), (String)body.get("email"), (String)body.get("phone"), (String)body.get("sex"), age == null ? 0 : age, weight == null ? 0 : weight, (Boolean)body.get("is_lost"), (Boolean)body.get("isvalid"));
		CommonEnum res = am.registerUser(mem, mem.getPw());
		if(res == CommonEnum.SUCCESS)
			jo.addProperty("result", "success");
		else
			jo.addProperty("result", "failed");
		return jo.toString();
	}
	@PostMapping("/rest/admin/updateMember")
	public String updateMemberAdmin(HttpServletRequest request, @RequestBody HashMap<String, Object> body) {
		HttpSession hs = request.getSession();
		JsonObject jo = new JsonObject();
		Integer age = (Integer)body.get("age");
		Integer weight = (Integer)body.get("weight");
		
		Member mem = new Member((Integer)body.get("uid"), (String)body.get("pw"), (String)body.get("email"), (String)body.get("phone"), (String)body.get("sex"), age == null ? 0 : age, weight == null ? 0 : weight, (Boolean)body.get("is_lost"), (Boolean)body.get("isvalid"));
		CommonEnum res = am.updateUserInfo(mem);
		if(res == CommonEnum.SUCCESS)
			jo.addProperty("result", "success");
		else
			jo.addProperty("result", "failed");
		return jo.toString();
	}
}
