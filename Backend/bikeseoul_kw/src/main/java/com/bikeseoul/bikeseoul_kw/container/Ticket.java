package com.bikeseoul.bikeseoul_kw.container;

import java.time.LocalDateTime;

public class Ticket {
    private int ticket_id, cost, member_uid, giver_uid, receiver_uid;
    private ticket_type ticket_type;
    private hours hours;
    private boolean activation;
    private LocalDateTime created_date,updated_date, detail_start_date, detail_create_date, detail_expire_date;

    public Ticket(int ticket_id, int cost, ticket_type ticket_type, hours hours, LocalDateTime created_date, LocalDateTime updated_date) {
        this.ticket_id = ticket_id;
        this.cost = cost;
        this.ticket_type = ticket_type;
        this.hours = hours;
        this.created_date = created_date;
        this.updated_date = updated_date;
    }

    // expired ticket
    public Ticket(int member_uid, int ticket_id, int cost, ticket_type ticket_type, hours hours, LocalDateTime created_date, LocalDateTime updated_date, LocalDateTime detail_start_date, LocalDateTime detail_create_date, LocalDateTime detail_expire_date) {
        this.member_uid = member_uid;
        this.ticket_id = ticket_id;
        this.cost = cost;
        this.ticket_type = ticket_type;
        this.hours = hours;
        this.created_date = created_date;
        this.updated_date = updated_date;
        this.detail_start_date = detail_start_date;
        this.detail_create_date = detail_create_date;
        this.detail_expire_date = detail_expire_date;
    }

    // detail ticket
    public Ticket(int member_uid, int ticket_id, int cost, ticket_type ticket_type, hours hours, LocalDateTime created_date, LocalDateTime updated_date, LocalDateTime detail_start_date, boolean activation, LocalDateTime detail_create_date) {
        this.member_uid = member_uid;
        this.ticket_id = ticket_id;
        this.cost = cost;
        this.ticket_type = ticket_type;
        this.hours = hours;
        this.created_date = created_date;
        this.updated_date = updated_date;
        this.detail_start_date = detail_start_date;
        this.activation = activation;
        this.detail_create_date = detail_create_date;
    }

    public int getTicket_id() {
        return ticket_id;
    }

    public int getCost() {
        return cost;
    }

    public void setCost(int cost) {
        this.cost = cost;
    }

    public ticket_type getTicket_type() {
        return ticket_type;
    }

    public void setTicket_type(ticket_type ticket_type) {
        this.ticket_type = ticket_type;
    }

    public hours getHours() {
        return hours;
    }

    public void setHours(hours hours) {
        this.hours = hours;
    }

    public LocalDateTime getCreated_date() {
        return created_date;
    }

    public LocalDateTime getUpdated_date() {
        return updated_date;
    }

    public int getMember_uid() {
        return member_uid;
    }

    public void setMember_uid(int member_uid) {
        this.member_uid = member_uid;
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

    public boolean isActivation() {
        return activation;
    }

    public LocalDateTime getDetail_start_date() {
        return detail_start_date;
    }

    public LocalDateTime getDetail_create_date() {
        return detail_create_date;
    }

    public LocalDateTime getDetail_expire_date() {
        return detail_expire_date;
    }

    public void setActivation(boolean activation) {
        this.activation = activation;
    }
}
