package com.bikeseoul.bikeseoul_kw.container;

import java.time.LocalDateTime;

public class Gift extends Ticket{
    private int gift_id, giver_id, receiver_id;

    private LocalDateTime gift_created_date;

    public Gift(int ticket_id, int cost, String ticket_type, String hours, LocalDateTime created_date, LocalDateTime updated_date, int gift_id, int giver_id, int receiver_id, LocalDateTime gift_created_date) {
        super(ticket_id, cost, ticket_type, hours, created_date, updated_date);
        this.gift_id = gift_id;
        this.giver_id = giver_id;
        this.receiver_id = receiver_id;
        this.gift_created_date = gift_created_date;
    }

    public int getGift_id() {
        return gift_id;
    }

    public int getGiver_id() {
        return giver_id;
    }

    public void setGiver_id(int giver_id) {
        this.giver_id = giver_id;
    }

    public int getReceiver_id() {
        return receiver_id;
    }

    public void setReceiver_id(int receiver_id) {
        this.receiver_id = receiver_id;
    }

    public LocalDateTime getGift_created_date() {
        return gift_created_date;
    }
}
