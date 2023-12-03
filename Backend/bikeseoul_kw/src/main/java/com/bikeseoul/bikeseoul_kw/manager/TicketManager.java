package com.bikeseoul.bikeseoul_kw.manager;

import com.bikeseoul.bikeseoul_kw.container.Ticket;
import com.bikeseoul.bikeseoul_kw.container.Ticket_detail;
import com.bikeseoul.bikeseoul_kw.container.hours;
import com.bikeseoul.bikeseoul_kw.container.ticket_type;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.bikeseoul.bikeseoul_kw.container.CommonEnum;
import com.bikeseoul.bikeseoul_kw.container.Pair;
import com.bikeseoul.bikeseoul_kw.container.PaymentMethod;
import com.bikeseoul.bikeseoul_kw.service.PaymentLogService;
import com.bikeseoul.bikeseoul_kw.service.TicketService;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

@Component
public class TicketManager {
	
	@Autowired
	private TicketService ticketService;
	@Autowired
	private PaymentLogService paymentlogService;

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

	public List<Ticket> getTicketList(boolean checkValid, boolean validtype, String type) {
		int valid_t = 2;
		if(checkValid)
			valid_t = validtype ? 1 : 0;

		return ticketService.getTicketList(valid_t, type);
	}

	public Pair<Ticket, Ticket_detail> getTicketDetailInfo(int uid){
		List<Map<String, Object>> data =  ticketService.getTicketDetailInfo(uid);
		if(data == null || data.size() == 0)
			return null;
		Pair<Ticket, Ticket_detail> pair = new Pair();
		Ticket ticket = new Ticket((Integer)data.get(0).get("ticket_id"), ticket_type.valueOf((String)data.get(0).get("ticket_type")), hours.valueOf((String)data.get(0).get("hours")), (Integer)data.get(0).get("cost"), (Boolean)data.get(0).get("isvalid"), (LocalDateTime)data.get(0).get("ticket_created_date"), (LocalDateTime)data.get(0).get("ticket_updated_date"));
		Ticket_detail td = new Ticket_detail((Integer)data.get(0).get("ticket_detail_uid"), (Integer)data.get(0).get("member_uid"),(LocalDateTime)data.get(0).get("start_date"), (Boolean)data.get(0).get("activation") == true ? 1 : 0,(LocalDateTime)data.get(0).get("ticket_detail_created_date"));
		pair.set(ticket, td);
		return pair;
	}
	

}
