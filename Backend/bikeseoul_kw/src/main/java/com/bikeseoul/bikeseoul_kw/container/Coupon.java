package com.bikeseoul.bikeseoul_kw.container;

import java.time.LocalDateTime;

public class Coupon extends Ticket{
    private int coupon_id, owner_id;
    private LocalDateTime coupon_created_date;

    public Coupon(int ticket_id, int cost, String ticket_type, String hours, LocalDateTime created_date, LocalDateTime updated_date, int coupon_id, int owner_id, LocalDateTime coupon_created_date) {
        super(ticket_id, cost, ticket_type, hours, created_date, updated_date);
        this.coupon_id = coupon_id;
        this.owner_id = owner_id;
        this.coupon_created_date = coupon_created_date;
    }

    public int getCoupon_id() {
        return coupon_id;
    }


    public int getOwner_id() {
        return owner_id;
    }

    public void setOwner_id(int owner_id) {
        this.owner_id = owner_id;
    }

    public LocalDateTime getCoupon_created_date() {
        return coupon_created_date;
    }
}
