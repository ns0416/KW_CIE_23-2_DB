package com.bikeseoul.bikeseoul_kw.manager;

import java.sql.Date;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Base64;
import java.util.Calendar;
import java.util.List;
import java.util.Map;
import java.util.Random;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import com.bikeseoul.bikeseoul_kw.container.CommonEnum;
import com.bikeseoul.bikeseoul_kw.container.Config;
import com.bikeseoul.bikeseoul_kw.container.LeaveReason;
import com.bikeseoul.bikeseoul_kw.container.Member;
import com.bikeseoul.bikeseoul_kw.container.Pair;
import com.bikeseoul.bikeseoul_kw.container.User;
import com.bikeseoul.bikeseoul_kw.service.MemberService;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;


import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;


@Component
public class AccountManager {
	
	@Autowired
	private ServiceManager serviceManager;

	@Autowired
	private MemberService memberService;
	@Autowired
	private HashingManager hashingManager;
	@Autowired
	private ConfigManager configManager;
	
	public User loginCheck(String id, String pw, boolean is_admin) {
		try {
			User mem = null;

			mem = new Member(id);
			if((mem = checkPW(mem, pw)) != null)
				return mem;
		}catch(Exception e) {
			e.printStackTrace();
		}
		return null;	
	}
	
	public int loginProcess(HttpServletRequest request, User mem) throws Exception{
		if(mem!=null){
				HttpSession hs = request.getSession(true);
				hs.setAttribute("id", mem.getId());
				if(mem instanceof Member) {
					hs.setAttribute("member", (Member)mem);
				}
				return 0; 
			}
		return 1; 
	}
	
	public User checkPW(User mem, String pw) throws Exception {
		
		User new_mem = mem;
		String pw_enc = hashingManager.HashSHA256(pw);
		if(new_mem.getUid() == 0) {
			new_mem = memberService.getMemberInfo(0, mem.getId(), null);
		}
		if(new_mem.getPw().equals(pw_enc) && new_mem.getIsvalid_boolean() == true)
			return new_mem;
		else
			return null;
		
	}
	
	public User checkLogged(HttpServletRequest request, boolean is_admin) {
		if(request!=null){
			HttpSession hs = request.getSession(true);
			if(hs != null) {
				if(is_admin && hs.getAttribute("admin")!=null)
					return (User)hs.getAttribute("admin");
				else if(!is_admin && hs.getAttribute("member")!=null)
					return (User)hs.getAttribute("member");
			}
		}
		return null;
	}
	
	public User getUserInfo(int uid, boolean is_admin) {
		User result = null;
		result = memberService.getMemberInfo(uid, null, null); //TODO : Normal member get user
		
		return result;
	}
	public User getUserInfo(String id, boolean email, boolean is_admin) {
		User result = null;
		if(email==false) {
			result = memberService.getMemberInfo(0, id, null); //TODO : Normal member get user
		}else{
			result = memberService.getMemberInfo(0, null, id); //TODO : Normal member get user
		}
		
		return result;
	}

	public int getUserCount(String type_, String value, boolean isAdmin) {
		int type = 0;
		if(type_ != null) {
			if(type_.equals("id"))
				type = 1;
			else if(type_.equals("email")) 
				type = 2;
			else if(type_.equals("nickname")) 
				type = 3;
			
		}
			return memberService.getMemberInfoCount(type, value);
	}
	
	public CommonEnum updateUserInfo(User mem/*, String pw_cfm*/) {
		try {
			if(mem instanceof Member){
				if(memberService.updateMemberInfo((Member)mem)>0) {//TODO: Normal member update user
					return CommonEnum.SUCCESS;
				}else {
					return CommonEnum.FAILED;
				}
			}
			return CommonEnum.FAILED;
				/*
			String pw = mem.getPw();
			if(checkValidPW(pw, pw_cfm)) {
					mem.setPw(hashingManager.HashSHA256(pw));
				if(mem instanceof Member){
					if(memberService.updateMemberInfo((Member)mem)>0) {//TODO: Normal member update user
						return CommonEnum.SUCCESS;
					}else {
						return CommonEnum.FAILED;
					}
				}else {
					return CommonEnum.UNKNOWN;
				}
			}else {	
				return CommonEnum.PW_ERROR;
			}
			*/
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return CommonEnum.UNKNOWN;
		}
	}
	public List<LeaveReason> getLeaveReasons(int uid){
		return memberService.getLeaveReason(uid);
	}
	@Transactional
	public CommonEnum LeaveUser(User mem, LeaveReason lr){
		try {
			if(lr == null || mem == null)
				throw new Exception();
			Member new_mem = new Member(mem.getUid(), mem.getEmail(), false);
			CommonEnum update_res = updateUserInfo(new_mem);
			if(update_res != CommonEnum.SUCCESS)
				throw new Exception();
			if(memberService.registerLeaveReason(mem.getUid(), lr.getUid()) > 0)
				return CommonEnum.SUCCESS;
			throw new Exception();
		}catch(Exception e) {
			e.printStackTrace();
		}
		return CommonEnum.FAILED;
	}
	public CommonEnum resetPW(User mem, String pw, String pw_cfm) {
		try {
			String pw_org = mem.getPw();
			if(checkValidPW(pw, pw_cfm)) {
					String new_pw = hashingManager.HashSHA256(pw);
					if(pw_org != null && pw_org.equals(new_pw) || pw_org ==null) {
						return CommonEnum.NOT_PERMITTED;
					}
					mem.setPw(new_pw);
					mem.setEmail(null);
				if(mem instanceof Member){
					if(memberService.updateMemberInfo((Member)mem)>0) {//TODO: Normal member update user
						return CommonEnum.SUCCESS;
					}else {
						return CommonEnum.FAILED;
					}
				}else {
					return CommonEnum.UNKNOWN;
				}
			}else {	
				return CommonEnum.PW_ERROR;
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			throw new RuntimeException();
			//return CommonEnum.UNKNOWN;
		}
	}
	public Member findID(Member mem) {
		return memberService.findID(mem);
	}
	public CommonEnum deleteUser(Member mem) {
		if(mem == null)
			return CommonEnum.FAILED;
		mem.setIs_valid(false);
		try {
			if(memberService.updateMemberInfo(mem)>0)
				return CommonEnum.SUCCESS;
			else
				return CommonEnum.FAILED;
		}catch(Exception e) {
			e.printStackTrace();
			return CommonEnum.UNKNOWN;
		}
	}
	public CommonEnum registerUser(User mem, String pw_cfm) {
		// TODO Auto-generated method stub
		try {
			String pw = mem.getPw();
			if(checkValidPW(pw, pw_cfm)) {
				mem.setPw(hashingManager.HashSHA256(pw));
				if(mem instanceof Member) {
					if(memberService.registerMemberInfo((Member)mem)>0) {//TODO: Normal member update user
						return CommonEnum.SUCCESS;
					}else {
						return CommonEnum.FAILED;
					}
				}else {
					return CommonEnum.UNKNOWN;
				}
			}else {
					return CommonEnum.PW_ERROR;
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return CommonEnum.UNKNOWN;
		}
		
	}
	public boolean checkValidPW(String pw, String pw_cfm) {
		if(pw!=null && pw_cfm != null && pw.length()> 7 && (pw.equals(pw_cfm)) && !pw.matches("[0-9|a-z|A-Z|ㄱ-ㅎ|ㅏ-ㅣ|가-힝]*"))
			return true;
		return false;
	}

	public List<Member> getMemberList(int page, int page_limit, String query_type, String query,boolean is_admin) {
		// TODO Auto-generated method stub
		int p_start = page_limit*page;
		return memberService.getMemberInfoList(p_start, page_limit, query_type, query);
	}

	public boolean checkDuplication(int type, String value, int user_uid, boolean is_admin) {
		// TODO Auto-generated method stub
		return memberService.getMemberCount(type, value, user_uid) >0; //TODO: Normal member checking duplication
		
	}
	/*public void insertResetPWSession(member mem, String key) {
		commandMap cMap = new commandMap();
		cMap.put("uid", mem.getUid());
		cMap.put("user_key", key);
		outputService.insertResetPWSession(cMap);
	}
	public member checkResetPWSession(int uid, String key) {
		commandMap cMap = new commandMap();
		cMap.put("uid", uid);
		cMap.put("user_key", key);
		return outputService.checkResetPWSession(cMap);
		
	}*/
	
	
	public String generateUserKey() {
		int start = 48;
		int end = 122;
		int length = 15;
		Random random = new Random();
		String result = random.ints(start, end+1).filter(i->(i<=57 || i>=65) && (i<=90 || i>=97)).limit(length).collect(StringBuilder::new, StringBuilder::appendCodePoint, StringBuilder::append).toString();
		return result;
	}
	public String generateUserAuthKey() {
		int start = 100000;
		int end = 999999;
		int result = (int) (Math.random()*(end-start+1)+1);
		String res = result+"";
		return res;
	}
	
	
	public boolean checkEmailAuth(HttpSession hs, String authcode) {
		String saved = (String)hs.getAttribute("authcode");
		Calendar validate = (Calendar)hs.getAttribute("authTime");
		Calendar now = Calendar.getInstance();
		validate.add(Calendar.MINUTE, 5);
		if(now.before(validate) && authcode.equals(saved)) {
			hs.setAttribute("authResult", true);
			return true;
		}else {
			hs.setAttribute("authResult", false);
			return false;
		}
	}
	public boolean checkAuthTime(HttpSession hs, String val_code) {
		Calendar validate = (Calendar)hs.getAttribute(val_code);
		Calendar now = Calendar.getInstance();
		validate.add(Calendar.MINUTE, 5);
		if(now.before(validate)) {
			return true;
		}else {
			return false;
		}
	}
	
	public JsonObject requestHTTP(boolean isGet, String url, List<Pair<String, String>> headers, List<Pair<String, Object>> params) {
		
		HttpHeaders headers_ = new HttpHeaders();
		if(headers != null) {
			for(Pair<String, String> item : headers) {
				headers_.add(item.getFirst(), item.getSecond());
			}
		}
		MultiValueMap<String, Object> params_req = new LinkedMultiValueMap();
		if(isGet) {
			if(params != null) {
				UriComponentsBuilder url_builder = UriComponentsBuilder.fromHttpUrl(url);
				for(Pair<String, Object> item : params) {
					url_builder.queryParam(item.getFirst(), item.getSecond());
				}
				url = url_builder.encode().toUriString();
			}
		}else {
			if(params != null) {
				for(Pair<String, Object> item : params) {
					if(item.getSecond() instanceof ByteArrayResource)
						headers_.setContentType(MediaType.MULTIPART_FORM_DATA);
					params_req.add(item.getFirst(), item.getSecond());
				}
			}
		}
		
		HttpEntity<MultiValueMap<String, Object>> entity = new HttpEntity<>(params_req, headers_);
		RestTemplate rt = new RestTemplate();
		try {
			ResponseEntity<String> response = rt.exchange(url, isGet ? HttpMethod.GET : HttpMethod.POST, entity, String.class);
			JsonObject jo = (JsonObject)JsonParser.parseString(new String(response.getBody()));
			return jo;
		}catch(Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
	
	public boolean sendAuthMail(HttpSession hs, String email) {
		Config config = configManager.getConfig();
		String sitename = config.get("basic", "sitename");
		String siteurl = config.get("basic", "siteurl");
		String key = generateUserAuthKey();
		String from = config.get("sendmail", "findpw");
		String subject = "["+sitename+"] 이메일 인증번호 발송";
		String content = "<!doctype html>\r\n" + 
				"<html>\r\n" + 
				"<head>\r\n" + 
				"	<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n" + 
				"<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0\" />\r\n" + 
				"<meta charset=\"utf-8\">\r\n" + 
				"<title>이메일 인증번호 발송</title>\r\n" + 
				"	<link rel=\"stylesheet\" type=\"text/css\" href=\"css/style.css\">\r\n" + 
				"	<link rel=\"stylesheet\" type=\"text/css\" href=\"css/login_page.css\">\r\n" + 
				"	<link rel=\"stylesheet\" type=\"text/css\" href=\"css/header.css\">\r\n" + 
				"	<link rel=\"stylesheet\" type=\"text/css\" href=\"css/bootstrap-4.3.1.css\">\r\n" + 
				"	\r\n" + 
				"</head>\r\n" + 
				"\r\n" + 
				"<body>\r\n" + 
				"	\r\n" + 
				"	<div id = \"content\">\r\n" + 
				"			<div id=\"login_section\" class=\" border-top border-bottom bg-light shadow\">\r\n" + 
				"				<form method=\"post\" action=\"login_func.do\" name=\"loginform\">\r\n" + 
				"					<div class=\"title middle\">이메일 인증번호 발송</div>\r\n" + 
				"					<div>\r\n" + 
				"						<span>인증번호 요청에 따른 인증메일입니다.</span><br><br>\r\n" + 
				"						<span>아래 인증번호를 인증번호 란에 입력해주세요.</span>\r\n" + 
				"							</div>\r\n" + 
				" 				 <div class=\"loginbt mt-4 container px-0\">\r\n" + 
				" 				 	<div class=\"row\">\r\n" + 
				" 				 		<div class=\"col-md-5 text-center\">\r\n" + 
				"  							<span>"+key+"</span>\r\n" + 
				"  						</div>\r\n" + 
				"\r\n" + 
				"  					</div>\r\n" + 
				"  				</div>\r\n" + 
				"				</form>\r\n" + 
				"		</div>\r\n" + 
				"	</div>\r\n" + 
				"	\r\n" + 
				"	\r\n" + 
				"</body>\r\n" + 
				"</html>\r\n"; 
		try {
			hs.setAttribute("authAddr", email);
			hs.setAttribute("authcode", key);
			hs.setAttribute("authTime", Calendar.getInstance());
			serviceManager.sendMail(from, email, subject, content);
			return true;
		} catch (MessagingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return false;
	}
	
	public boolean sendPWMail(User user) {
		Config config = configManager.getConfig();
		String sitename = config.get("basic", "sitename");
		String siteurl = config.get("basic", "siteurl");
		String key = generateUserKey();
		String from = config.get("sendmail", "findpw");
		String link = siteurl+"resetPassword.do?key="+key+"&uid="+user.getUid();
		String subject = "["+sitename+"] 비밀번호 찾기 ";
		String content = "<!doctype html>\r\n" + 
				"<html>\r\n" + 
				"<head>\r\n" + 
				"	<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n" + 
				"<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0\" />\r\n" + 
				"<meta charset=\"utf-8\">\r\n" + 
				"<title>대시보드</title>\r\n" + 
				"	<link rel=\"stylesheet\" type=\"text/css\" href=\"css/style.css\">\r\n" + 
				"	<link rel=\"stylesheet\" type=\"text/css\" href=\"css/login_page.css\">\r\n" + 
				"	<link rel=\"stylesheet\" type=\"text/css\" href=\"css/header.css\">\r\n" + 
				"	<link rel=\"stylesheet\" type=\"text/css\" href=\"css/bootstrap-4.3.1.css\">\r\n" + 
				"	\r\n" + 
				"</head>\r\n" + 
				"\r\n" + 
				"<body>\r\n" + 
				"	\r\n" + 
				"	<div id = \"content\">\r\n" + 
				"			<div id=\"login_section\" class=\" border-top border-bottom bg-light shadow\">\r\n" + 
				"				<form method=\"post\" action=\"login_func.do\" name=\"loginform\">\r\n" + 
				"					<div class=\"title middle\">비밀번호 재설정 인증 메일</div>\r\n" + 
				"					<div>\r\n" + 
				"						<span>비밀번호 재설정기능 요청에 따른 재설정 인증메일입니다.</span><br><br>\r\n" + 
				"						<span>아래 버튼을 클릭하여 비밀번호를 재설정해주세요.</span>\r\n" + 
				"							</div>\r\n" + 
				" 				 <div class=\"loginbt mt-4 container px-0\">\r\n" + 
				" 				 	<div class=\"row\">\r\n" + 
				" 				 		<div class=\"col-md-5 text-center\">\r\n" + 
				"  							<a href='"+link+"'><button type=\"button\" id=\"loginbt\" class=\"btn btn-primary w-md-auto w-100\">비밀번호 재설정</button></a>\r\n" + 
				"  						</div>\r\n" + 
				"\r\n" + 
				"  					</div>\r\n" + 
				"  				</div>\r\n" + 
				"				</form>\r\n" + 
				"		</div>\r\n" + 
				"	</div>\r\n" + 
				"	\r\n" + 
				"	\r\n" + 
				"</body>\r\n" + 
				"</html>\r\n"; 
		try {
			serviceManager.sendMail(from, user.getEmail(), subject, content);
			return true;
		} catch (MessagingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return false;
	}

	public CommonEnum changePW(User mem, String pw_cur, String pw, String pw_cfm) {
		// TODO Auto-generated method stub
		try {
			String pw_enc = hashingManager.HashSHA256(pw_cur);
			Member mem_pw = (Member)getUserInfo(mem.getUid(), false);
			if(!mem_pw.getPw().equals(pw_enc))
				return CommonEnum.NOT_PERMITTED;
			return resetPW(mem_pw, pw, pw_cfm);
		}catch(Exception e) {
			e.printStackTrace();
		}
		return CommonEnum.FAILED;
	}
	
}
