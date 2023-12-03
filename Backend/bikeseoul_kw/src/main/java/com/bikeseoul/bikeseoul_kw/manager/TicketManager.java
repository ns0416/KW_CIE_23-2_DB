package com.bikeseoul.bikeseoul_kw.manager;

import com.bikeseoul.bikeseoul_kw.container.Ticket;
import com.bikeseoul.bikeseoul_kw.container.Ticket_detail;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.bikeseoul.bikeseoul_kw.container.CommonEnum;
import com.bikeseoul.bikeseoul_kw.service.TicketService;

import java.util.List;

@Component
public class TicketManager {
	
	@Autowired
	private TicketService ticketService;

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

	public CommonEnum registerTicketDetail(Ticket_detail td) {
		
	}
}
