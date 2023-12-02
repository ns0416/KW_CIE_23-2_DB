package com.bikeseoul.bikeseoul_kw.container;

import java.time.LocalDateTime;

public class Ticket_detail extends Ticket{
    // detail
    private int uid, member_uid;
    private boolean activation;
    private LocalDateTime start_date, created_date;

    // expired
    private LocalDateTime expired_date;

    public Ticket_detail(int ticket_id, ticket_type ticket_type, hours hours, int cost, boolean isvalid, LocalDateTime ticket_created_date, LocalDateTime ticket_updated_date, int uid, int member_uid, LocalDateTime start_date, boolean activation, LocalDateTime created_date) {
        super(ticket_id, ticket_type, hours, cost, isvalid, ticket_created_date, ticket_updated_date);
        this.uid = uid;
        this.member_uid = member_uid;
        this.start_date = start_date;
        this.activation = activation;
        this.created_date = created_date;
    }

    public Ticket_detail(int ticket_id, ticket_type ticket_type, hours hours, int cost, boolean isvalid, LocalDateTime ticket_created_date, LocalDateTime ticket_updated_date, int uid, int member_uid, LocalDateTime start_date, boolean activation, LocalDateTime created_date, LocalDateTime expired_date) {
        super(ticket_id, ticket_type, hours, cost, isvalid, ticket_created_date, ticket_updated_date);
        this.uid = uid;
        this.member_uid = member_uid;
        this.start_date = start_date;
        this.activation = activation;
        this.created_date = created_date;
        this.expired_date = expired_date;
    }

    public int getUid() {
        return uid;
    }

    public int getMember_uid() {
        return member_uid;
    }

    public void setMember_uid(int member_uid) {
        this.member_uid = member_uid;
    }

    public boolean isActivation() {
        return activation;
    }

    public void setActivation(boolean activation) {
        this.activation = activation;
    }

    public LocalDateTime getStart_date() {
        return start_date;
    }

    public void setStart_date(LocalDateTime start_date) {
        this.start_date = start_date;
    }

    public LocalDateTime getCreated_date() {
        return created_date;
    }

    public void setCreated_date(LocalDateTime created_date) {
        this.created_date = created_date;
    }

    public LocalDateTime getExpired_date() {
        return expired_date;
    }

    public void setExpired_date(LocalDateTime expired_date) {
        this.expired_date = expired_date;
    }
}
