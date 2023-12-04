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

	public List<Pair<Ticket, Ticket_detail>> getExpiredTicketList(int member_uid) {
		List<Pair<Ticket, Ticket_detail>> expiredTicketList = null;
		List<Map<String, Object>> data = ticketService.getExpiredTicketList(member_uid);
		if (data == null || data.size() == 0) {
			return null;
		}
		for (Map<String, Object> map : data) {
			Ticket ticket = new Ticket((Integer)map.get("ticket_id"), ticket_type.valueOf((String)map.get("ticket_type")), hours.valueOf((String)map.get("hours")), (Integer)map.get("cost"), (Boolean)map.get("isvalid"), (LocalDateTime)map.get("ticket_created_date"), (LocalDateTime)map.get("ticket_updated_date"));
			Ticket_detail td = new Ticket_detail((Integer)map.get("ticket_detail_uid"), (Integer)map.get("member_uid"),(LocalDateTime)map.get("start_date"), (Boolean)map.get("activation") == true ? 1 : 0,(LocalDateTime)map.get("ticket_detail_created_date"));
			Pair<Ticket, Ticket_detail> pair = new Pair();
			pair.set(ticket, td);
			expiredTicketList.add(pair);
		}
		return expiredTicketList;
	}
	public Pair<Ticket, Ticket_detail> getActivationTicket(int member_uid) {
		List<Map<String, Object>> data = ticketService.getActivationTicket(member_uid);
		if(data == null || data.size() == 0)
			return null;
		Pair<Ticket, Ticket_detail> pair = new Pair();
		Ticket ticket = new Ticket((Integer)data.get(0).get("ticket_id"), ticket_type.valueOf((String)data.get(0).get("ticket_type")), hours.valueOf((String)data.get(0).get("hours")), (Integer)data.get(0).get("cost"), (Boolean)data.get(0).get("isvalid"), (LocalDateTime)data.get(0).get("ticket_created_date"), (LocalDateTime)data.get(0).get("ticket_updated_date"));
		Ticket_detail td = new Ticket_detail((Integer)data.get(0).get("ticket_detail_uid"), (Integer)data.get(0).get("member_uid"),(LocalDateTime)data.get(0).get("start_date"), (Boolean)data.get(0).get("activation") == true ? 1 : 0,(LocalDateTime)data.get(0).get("ticket_detail_created_date"));
		pair.set(ticket, td);
		return pair;
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
