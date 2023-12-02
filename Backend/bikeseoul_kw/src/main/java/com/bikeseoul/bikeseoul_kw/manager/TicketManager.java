package com.bikeseoul.bikeseoul_kw.manager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.bikeseoul.bikeseoul_kw.container.CommonEnum;
import com.bikeseoul.bikeseoul_kw.service.TicketService;

@Component
public class TicketManager {
	
	@Autowired
	private TicketService ticketService;
	
	public CommonEnum registerTicketDetail(Ticket_detail td) {
		
	}
}
