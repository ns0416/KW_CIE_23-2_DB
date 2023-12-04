package com.bikeseoul.bikeseoul_kw.container;

import java.time.LocalDateTime;

public class Ticket extends CommonData{
    private ticket_type ticket_type;
    private hours hours;
    private int cost;
    private boolean isvalid;
    private LocalDateTime updated_date;

    public Ticket(int uid, ticket_type ticket_type, hours hours, int cost, boolean isvalid, LocalDateTime created_date, LocalDateTime updated_date) {
        super(uid, created_date);
        this.ticket_type = ticket_type;
        this.hours = hours;
        this.cost = cost;
        this.isvalid = isvalid;
        this.updated_date = updated_date;
    }

    public Ticket(ticket_type ticket_type, hours hours, int cost) {
        super(0, null);
        this.ticket_type = ticket_type;
        this.hours = hours;
        this.cost = cost;
    }

    public int getTicket_id() {
        return super.getUid();
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

    public int getCost() {
        return cost;
    }

    public void setCost(int cost) {
        this.cost = cost;
    }

    public boolean isIsvalid() {
        return isvalid;
    }

    public void setIsvalid(boolean isvalid) {
        this.isvalid = isvalid;
    }

    public LocalDateTime getTicket_created_date() {
        return super.getCreated_date();
    }

    public LocalDateTime getTicket_updated_date() {
        return updated_date;
    }

    public void setTicket_updated_date(LocalDateTime updated_date) {
        this.updated_date = updated_date;
    }
}
