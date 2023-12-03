package com.bikeseoul.bikeseoul_kw.container;

import java.time.LocalDateTime;

public class Gift extends CommonData{
    private int giver_uid, ticket_uid, ticket_detail_uid, receiver_uid;

    public Gift(int gift_id, int ticket_uid, int giver_uid, int receiver_uid, int ticket_detail_uid, LocalDateTime gift_created_date) {
        super(gift_id, gift_created_date);
        this.ticket_uid = ticket_uid;
        this.giver_uid = giver_uid;
        this.receiver_uid = receiver_uid;
        this.ticket_detail_uid = ticket_detail_uid;
    }
    
    public Gift(int ticket_uid, int giver_uid, int receiver_uid) {
        super(0, null);
        this.ticket_uid = ticket_uid;
        this.giver_uid = giver_uid;
        this.receiver_uid = receiver_uid;
    }

    public int getGiver_uid() {
        return giver_uid;
    }
    public int getTicket_uid() {
		return ticket_uid;
	}

    public void setGiver_uid(int giver_uid) {
        this.giver_uid = giver_uid;
    }

    public int getReceiver_uid() {
        return receiver_uid;
    }

    public int getTicket_detail_uid() {
		return ticket_detail_uid;
	}
    public void setReceiver_uid(int receiver_uid) {
        this.receiver_uid = receiver_uid;
    }
    public void setTicket_detail_uid(int ticket_detail_uid) {
		this.ticket_detail_uid = ticket_detail_uid;
	}

}
