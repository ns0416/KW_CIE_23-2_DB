package com.bikeseoul.bikeseoul_kw.container;

import java.time.LocalDateTime;

public class Gift extends Ticket{
    private int gift_id, giver_uid, receiver_uid;

    private LocalDateTime gift_created_date;

    public Gift(int ticket_id, ticket_type ticket_type, hours hours, int cost, boolean isvalid, LocalDateTime ticket_created_date, LocalDateTime ticket_updated_date, int gift_id, int giver_uid, int receiver_uid, LocalDateTime gift_created_date) {
        super(ticket_id, ticket_type, hours, cost, isvalid, ticket_created_date, ticket_updated_date);
        this.gift_id = gift_id;
        this.giver_uid = giver_uid;
        this.receiver_uid = receiver_uid;
        this.gift_created_date = gift_created_date;
    }

    public int getGift_id() {
        return gift_id;
    }

    public void setGift_id(int gift_id) {
        this.gift_id = gift_id;
    }

    public int getGiver_uid() {
        return giver_uid;
    }

    public void setGiver_uid(int giver_uid) {
        this.giver_uid = giver_uid;
    }

    public int getReceiver_uid() {
        return receiver_uid;
    }

    public void setReceiver_uid(int receiver_uid) {
        this.receiver_uid = receiver_uid;
    }

    public LocalDateTime getGift_created_date() {
        return gift_created_date;
    }

    public void setGift_created_date(LocalDateTime gift_created_date) {
        this.gift_created_date = gift_created_date;
    }

}
