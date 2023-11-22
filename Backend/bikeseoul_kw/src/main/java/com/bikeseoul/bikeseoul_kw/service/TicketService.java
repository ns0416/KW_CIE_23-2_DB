package com.bikeseoul.bikeseoul_kw.service;

import com.bikeseoul.bikeseoul_kw.container.Ticket;
import com.bikeseoul.bikeseoul_kw.dao.TicketDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class TicketService implements TicketDao {
    @Autowired
    private TicketDao ticketDao;

    @Override
    public List<Ticket> getExpiredTicketList(int member_uid) {
        return ticketDao.getExpiredTicketList(member_uid);
    }

    @Override
    public Ticket getActivationTicket(int member_uid) {
        return ticketDao.getActivationTicket(member_uid);
    }
}
