package com.bikeseoul.bikeseoul_kw.container;

import java.time.LocalDateTime;

public class Ticket_detail extends CommonData{
    // detail
    private int member_uid, ticket_uid;
    private int activation;
    private LocalDateTime start_date;

    // expired
    private LocalDateTime expired_date;


    
    public Ticket_detail(int uid, int member_uid, int Ticket_uid, LocalDateTime start_date, int activation, LocalDateTime created_date) {
    	super(0, created_date);
    	this.member_uid = member_uid;
    	this.ticket_uid = Ticket_uid;
    	this.start_date = start_date;
    	this.activation = activation;
    }
    public Ticket_detail(int uid, int member_uid, int Ticket_uid, LocalDateTime start_date, LocalDateTime expired_date,int activation, LocalDateTime created_date) {
    	super(0, created_date);
    	this.member_uid = member_uid;
    	this.ticket_uid = Ticket_uid;
    	this.start_date = start_date;
    	this.expired_date = expired_date;
    	this.activation = activation;
    }

    public Ticket_detail(int member_uid, int Ticket_uid) {
    	super(0, null);
    	this.member_uid = member_uid;
    	this.ticket_uid = Ticket_uid;
    	
    }

    public int getMember_uid() {
        return member_uid;
    }

    public void setMember_uid(int member_uid) {
        this.member_uid = member_uid;
    }
public int getTicket_uid() {
	return ticket_uid;
}
    public boolean isActivation() {
        return activation == 1 ? true : false;
    }

    public void setActivation(int activation) {
        this.activation = activation;
    }

    public LocalDateTime getStart_date() {
        return start_date;
    }

    public void setStart_date(LocalDateTime start_date) {
        this.start_date = start_date;
    }


    public LocalDateTime getExpired_date() {
        return expired_date;
    }

    public void setExpired_date(LocalDateTime expired_date) {
        this.expired_date = expired_date;
    }
}
