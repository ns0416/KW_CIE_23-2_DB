package com.bikeseoul.bikeseoul_kw.manager;


import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Component;

import com.bikeseoul.bikeseoul_kw.container.CommonEnum;
import com.bikeseoul.bikeseoul_kw.container.Coupon;
import com.bikeseoul.bikeseoul_kw.container.Ticket;
import com.bikeseoul.bikeseoul_kw.container.Transfercard;
import com.bikeseoul.bikeseoul_kw.service.CouponService;
import com.bikeseoul.bikeseoul_kw.service.MileageService;
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
	private JavaMailSender mailSender;
	
	@Autowired
	private MileageService mileageService;
	
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
	
	public List<Ticket> getTicketList(boolean checkValid, boolean validtype, String type) {
		int valid_t = 2;
		if(checkValid) 
			valid_t = validtype ? 1 : 0;

		return ticketService.getTicketList(valid_t, type);
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
