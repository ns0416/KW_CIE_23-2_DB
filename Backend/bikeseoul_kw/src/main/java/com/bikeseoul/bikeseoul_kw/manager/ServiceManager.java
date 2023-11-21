package com.bikeseoul.bikeseoul_kw.manager;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Component;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;

@Component
public class ServiceManager {

	private HashingManager hashingManager;
	
	@Autowired
	private ConfigManager configManager;
	
	@Autowired
	private JavaMailSender mailSender;

	
	
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
