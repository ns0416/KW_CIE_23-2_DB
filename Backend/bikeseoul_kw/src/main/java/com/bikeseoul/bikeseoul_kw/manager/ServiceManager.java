package com.bikeseoul.bikeseoul_kw.manager;


import java.time.LocalDateTime;
import java.util.Base64;
import java.util.List;

import com.bikeseoul.bikeseoul_kw.container.*;
import com.bikeseoul.bikeseoul_kw.controller.PaymentLogController;
import com.bikeseoul.bikeseoul_kw.service.GiftService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import com.bikeseoul.bikeseoul_kw.service.MileageService;
import com.bikeseoul.bikeseoul_kw.service.PaymentLogService;
import com.bikeseoul.bikeseoul_kw.service.RankingService;
import com.bikeseoul.bikeseoul_kw.service.TicketService;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;

@Component
public class ServiceManager {

	private HashingManager hashingManager;
	
	@Autowired
	private ConfigManager configManager;

	@Autowired
	private JavaMailSender mailSender;
	
	@Autowired
	private MileageService mileageService;
	
	@Autowired
	private RankingService rankingService;
	
	@Autowired
	private TicketService ticketService;
	

	public CommonEnum updateTransfercard(Transfercard card) {
		if(mileageService.updateTransfercardInfo(card) > 0)
			return CommonEnum.SUCCESS;
		return CommonEnum.FAILED;
	}
	public CommonEnum deleteTransfercard(int member_uid) {
		if(mileageService.deleteTransfercardInfo(member_uid) > 0)
			return CommonEnum.SUCCESS;
		return CommonEnum.FAILED;
	}
	
	@Scheduled(cron = "0 0 0 * * 7") 
	public void refreshRaningWeekly() {
		refreshRanking(true);
	}
	@Scheduled(cron = "0 0 0 1 * *") 
	public void refreshRaningMonthly() {
		refreshRanking(false);
	}
	@Transactional
	public CommonEnum refreshRanking(boolean is_weekly) {
		try {
			if(is_weekly) {
				if(rankingService.truncateRankingWeekly() >0) {
					if(rankingService.insertRankingWeekly() > 0)
						return CommonEnum.SUCCESS;
				}
			}else {
				if(rankingService.truncateRankingMonthly() >0) {
					if(rankingService.insertRankingMonthly() > 0)
						return CommonEnum.SUCCESS;
				}
			}
			throw new Exception();
		}catch(Exception e) {
			e.printStackTrace();
			throw new RuntimeException();
		}
		//return CommonEnum.FAILED;
	}
	public JsonObject requestFindpath(double s_lon, double s_lat, double d_lon, double d_lat) {
		String url = "http://ai_develop.namisnt.com:5000/findpath";
		UriComponentsBuilder url_builder = UriComponentsBuilder.fromHttpUrl(url);
		url_builder.queryParam("s_lon", s_lon);
		url_builder.queryParam("s_lat", s_lat);
		url_builder.queryParam("d_lon", d_lon);
		url_builder.queryParam("d_lat", d_lat);
		
		url = url_builder.encode().toUriString();
		RestTemplate rt = new RestTemplate();
		ResponseEntity<String> response = rt.exchange(url, HttpMethod.GET, null, String.class);
		if(response.getHeaders().getContentType().equals(MediaType.APPLICATION_JSON)) {
			JsonObject jo = (JsonObject)JsonParser.parseString(new String(response.getBody()));
			return jo;
		}
		return null;
	}
	public void sendMail(String sender_addr, String receiver_addr, String subject, String content) throws MessagingException {
		MimeMessage msg = mailSender.createMimeMessage();
		MimeMessageHelper helper = new MimeMessageHelper(msg, true, "UTF-8");
		helper.setFrom(sender_addr);
		helper.setTo(receiver_addr);
		helper.setSubject(subject);
		helper.setText(content, true); //true : html사용
		mailSender.send(msg);
	}
	

}
