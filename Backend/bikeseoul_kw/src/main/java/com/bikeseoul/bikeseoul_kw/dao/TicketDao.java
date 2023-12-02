package com.bikeseoul.bikeseoul_kw.dao;

import com.bikeseoul.bikeseoul_kw.container.Ticket;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface TicketDao {
    List<Ticket> getExpiredTicketList(int member_uid);

    Ticket getActivationTicket(int member_uid);
    List<Ticket> getTicketList(int checkvalid, String type);
}
