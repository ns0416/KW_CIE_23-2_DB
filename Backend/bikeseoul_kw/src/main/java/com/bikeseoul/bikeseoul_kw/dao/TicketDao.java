package com.bikeseoul.bikeseoul_kw.dao;

import com.bikeseoul.bikeseoul_kw.container.Coupon;
import com.bikeseoul.bikeseoul_kw.container.Ticket;
import com.bikeseoul.bikeseoul_kw.container.Ticket_detail;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface TicketDao {
    List<Map<String, Object>> getExpiredTicketList(int member_uid);
    List<Map<String, Object>> getActivationTicket(int member_uid);
    List<Ticket> getTicketList(int checkvalid, String type);
    Ticket getTicketInfo(int ticket_id);
    int insertTicketDetail(Ticket_detail td);
    int insertTicketDetailtoExpired(int uid);
    int deleteTicketDetail(int uid);
    List<Map<String, Object>> getTicketDetailInfo(int uid);
    
}
