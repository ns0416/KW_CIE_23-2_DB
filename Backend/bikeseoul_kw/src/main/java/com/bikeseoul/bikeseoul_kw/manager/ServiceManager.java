package com.bikeseoul.bikeseoul_kw.manager;


import java.time.LocalDateTime;
import java.util.List;

import com.bikeseoul.bikeseoul_kw.container.*;
import com.bikeseoul.bikeseoul_kw.controller.Pay;
import com.bikeseoul.bikeseoul_kw.service.GiftService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.bikeseoul.bikeseoul_kw.service.CouponService;
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
	private CouponService couponservice;

	@Autowired
	private GiftService giftService;

	@Autowired
	private JavaMailSender mailSender;
	
	@Autowired
	private MileageService mileageService;
	
	@Autowired
	private TicketService ticketService;
	
	@Autowired
	private RankingService rankingService;
	
	@Autowired
	private PaymentLogService paymentlogService;

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
	public List<Ticket> getTicketList(boolean checkValid, boolean validtype, String type) {
		int valid_t = 2;
		if(checkValid) 
			valid_t = validtype ? 1 : 0;

		return ticketService.getTicketList(valid_t, type);
	}
	public List<Gift> getReceivedGiftList(int receiver_uid) {
		if (receiver_uid == 0) {
			return null;
		}
		return giftService.getReceivedGiftList(receiver_uid);
	}
	public List<Gift> getSentGiftList(int giver_uid) {
		if (giver_uid == 0) {
			return null;
		}
		return giftService.getSentGiftList(giver_uid);
	}
	public List<Coupon> getUserCouponList(int owner_uid) {
		if (owner_uid == 0) {
			return null;
		}
		return couponservice.getUserCouponList(owner_uid);
	}
	public Coupon getCoupon(String coupon_id) {
		if (coupon_id == null) {
			return null;
		}
		return couponservice.getCoupon(coupon_id);
	}
	public List<Coupon> getCouponList() {
		return couponservice.getCouponList();
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
	public List<PaymentMethod> getPaymentMethod() {
		// TODO Auto-generated method stub
		return paymentlogService.getPaymentMethodList();
	}


}
