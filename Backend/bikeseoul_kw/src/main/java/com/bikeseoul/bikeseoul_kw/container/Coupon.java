package com.bikeseoul.bikeseoul_kw.container;

import java.time.LocalDateTime;

public class Coupon extends Ticket{
    private String coupon_id;
    private int owner_uid;
    private LocalDateTime coupon_created_date;

    public Coupon(int ticket_id, int cost, String ticket_type, String hours, LocalDateTime created_date, LocalDateTime updated_date, String coupon_id, int owner_uid, LocalDateTime coupon_created_date) {
        super(ticket_id, cost, com.bikeseoul.bikeseoul_kw.container.ticket_type.valueOf(ticket_type), com.bikeseoul.bikeseoul_kw.container.hours.valueOf(hours), created_date, updated_date);
        this.coupon_id = coupon_id;
        this.owner_uid = owner_uid;
        this.coupon_created_date = coupon_created_date;
    }

    public String getCoupon_id() {
        return coupon_id;
    }

    public int getOwner_uid() {
        return owner_uid;
    }

    public void setOwner_uid(int owner_uid) {
        this.owner_uid = owner_uid;
    }

    public LocalDateTime getCoupon_created_date() {
        return coupon_created_date;
    }
}
