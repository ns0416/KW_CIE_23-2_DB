package com.bikeseoul.bikeseoul_kw.manager;


import java.time.LocalDateTime;
import java.util.List;

import com.bikeseoul.bikeseoul_kw.container.*;
import com.bikeseoul.bikeseoul_kw.controller.PaymentLogController;
import com.bikeseoul.bikeseoul_kw.service.GiftService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.bikeseoul.bikeseoul_kw.service.MileageService;
import com.bikeseoul.bikeseoul_kw.service.PaymentLogService;
import com.bikeseoul.bikeseoul_kw.service.RankingService;
import com.bikeseoul.bikeseoul_kw.service.TicketService;

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
	public List<Ticket_detail> getExpiredTicketList(int member_uid) {
		if (member_uid == 0) {
			return null;
		}
		return ticketService.getExpiredTicketList(member_uid);
	}
	public Ticket_detail getActivationTicket(int member_uid) {
		if (member_uid == 0) {
			return null;
		}
		return ticketService.getActivationTicket(member_uid);
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
		}
		return CommonEnum.FAILED;
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
