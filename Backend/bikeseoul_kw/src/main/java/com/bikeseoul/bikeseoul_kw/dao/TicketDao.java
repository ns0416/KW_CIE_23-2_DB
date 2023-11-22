package com.bikeseoul.bikeseoul_kw.dao;

import com.bikeseoul.bikeseoul_kw.container.Ticket;

import java.util.List;

public interface TicketDao {
    List<Ticket> getExpiredTicketList(int member_uid);

    Ticket getActivationTicket(int member_uid);

}
