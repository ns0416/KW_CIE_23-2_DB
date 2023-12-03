package com.bikeseoul.bikeseoul_kw.service;

import com.bikeseoul.bikeseoul_kw.container.Ticket;
import com.bikeseoul.bikeseoul_kw.container.Ticket_detail;
import com.bikeseoul.bikeseoul_kw.dao.TicketDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;


@Service
public class TicketService implements TicketDao {
    @Autowired
    private TicketDao ticketDao;

    @Override
    public List<Ticket_detail> getExpiredTicketList(int member_uid) {
        return ticketDao.getExpiredTicketList(member_uid);
    }

    @Override
    public Ticket_detail getActivationTicket(int member_uid) {
        return ticketDao.getActivationTicket(member_uid);
    }

	@Override
	public List<Ticket> getTicketList(int checkvalid, String type) { // 0 : false, 1 : true, 2 : don't care
		// TODO Auto-generated method stub
		return ticketDao.getTicketList(checkvalid, type);
	}

	@Override
	public Ticket getTicketInfo(int ticket_id) {
		// TODO Auto-generated method stub
		return ticketDao.getTicketInfo(ticket_id);
	}

	@Override
	public int insertTicketDetail(Ticket_detail td) {
		// TODO Auto-generated method stub
		return ticketDao.insertTicketDetail(td);
	}

	@Override
	public int insertTicketDetailtoExpired(int uid) {
		// TODO Auto-generated method stub
		return ticketDao.insertTicketDetailtoExpired(uid);
	}

	@Override
	public int deleteTicketDetail(int uid) {
		// TODO Auto-generated method stub
		return ticketDao.deleteTicketDetail(uid);
	}

	@Override
	public List<Map<String, Object>> getTicketDetailInfo(int uid) {
		// TODO Auto-generated method stub
		return ticketDao.getTicketDetailInfo(uid);
	}
}
