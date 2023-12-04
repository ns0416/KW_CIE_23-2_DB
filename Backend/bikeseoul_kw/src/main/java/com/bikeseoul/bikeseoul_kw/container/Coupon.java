package com.bikeseoul.bikeseoul_kw.container;

import java.time.LocalDateTime;

public class Coupon extends Ticket{
    private String coupon_id;
    private int owner_uid;
    private LocalDateTime created_date;

    public Coupon(int ticket_id, ticket_type ticket_type, hours hours, int cost, boolean isvalid, LocalDateTime ticket_created_date, LocalDateTime ticket_updated_date, String coupon_id, int owner_uid, LocalDateTime created_date) {
        super(ticket_id, ticket_type, hours, cost, isvalid, ticket_created_date, ticket_updated_date);
        this.coupon_id = coupon_id;
        this.owner_uid = owner_uid;
        this.created_date = created_date;
    }

    public Coupon(String coupon_id, int owner_uid) {
        super(0, null, null, 0, false, null, null);
        this.coupon_id = coupon_id;
        this.owner_uid = owner_uid;
    }
    public String getCoupon_id() {
        return coupon_id;
    }

    public void setCoupon_id(String coupon_id) {
        this.coupon_id = coupon_id;
    }

    public int getOwner_uid() {
        return owner_uid;
    }

    public void setOwner_uid(int owner_uid) {
        this.owner_uid = owner_uid;
    }

    public LocalDateTime getCreated_date() {
        return created_date;
    }

    public void setCreated_date(LocalDateTime created_date) {
        this.created_date = created_date;
    }
}
