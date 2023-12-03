package com.bikeseoul.bikeseoul_kw.dao;

import com.bikeseoul.bikeseoul_kw.container.Coupon;
import com.bikeseoul.bikeseoul_kw.container.Ticket;
import com.bikeseoul.bikeseoul_kw.container.Ticket_detail;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface TicketDao {
    List<Ticket_detail> getExpiredTicketList(int member_uid);

    Ticket_detail getActivationTicket(int member_uid);
    List<Ticket> getTicketList(int checkvalid, String type);
    Ticket getTicketInfo(int ticket_id);
    int insertTicketDetail(Ticket_detail td);
    int insertTicketDetailtoExpired(int uid);
    int deleteTicketDetail(int uid);
    
}
