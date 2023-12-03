package com.bikeseoul.bikeseoul_kw.container;

import java.time.LocalDateTime;

public class PaymentLog extends CommonData{
    private int user_id, method_uid, amount, ticket_detail_uid;
    private payment_status status_;
    private LocalDateTime updated_date;


    public PaymentLog(int uid, int user_id, int method_uid, int amount, int ticket_detail_uid, payment_status status_, LocalDateTime created_date, LocalDateTime updated_date) {
        super(uid, created_date);
        this.user_id = user_id;
        this.method_uid = method_uid;
        this.amount = amount;
        this.ticket_detail_uid = ticket_detail_uid;
        this.status_ = status_;
        this.updated_date = updated_date;
    }
    /*
    public PaymentLog(int uid, int user_id, int method_uid, int amount, int ticket_detail_uid, payment_status status_, LocalDateTime created_date, LocalDateTime updated_date, String method_name, LocalDateTime method_created_date) {
        super(uid, created_date);
        this.user_id = user_id;
        this.method_uid = method_uid;
        this.amount = amount;
        this.ticket_detail_uid = ticket_detail_uid;
        this.status_ = status_;
        this.updated_date = updated_date;
        this.method_name = method_name;
        this.method_created_date = method_created_date;
    }

    public PaymentLog(int uid, int user_id, int method_uid, int amount, int ticket_detail_uid, payment_status status_, LocalDateTime created_date, LocalDateTime updated_date, String method_name, LocalDateTime method_created_date, ticket_type ticket_type, hours hours, int cost) {
        super(uid, created_date);
        this.user_id = user_id;
        this.method_uid = method_uid;
        this.amount = amount;
        this.ticket_detail_uid = ticket_detail_uid;
        this.status_ = status_;
        this.updated_date = updated_date;
        this.method_name = method_name;
        this.method_created_date = method_created_date;
        this.ticket_type = ticket_type;
        this.hours = hours;
        this.cost = cost;
    }*/
    public PaymentLog(int user_id, int method_uid, int amount, payment_status status_) {
        super(0, null);
        this.user_id = user_id;
        this.method_uid = method_uid;
        this.amount = amount;
        this.status_ = status_;
    }

    public int getUser_id() {
        return user_id;
    }

    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }

    public int getMethod_uid() {
        return method_uid;
    }

    public void setMethod_uid(int method_uid) {
        this.method_uid = method_uid;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    public int getTicket_detail_uid() {
        return ticket_detail_uid;
    }

    public void setTicket_detail_uid(int ticket_detail_uid) {
        this.ticket_detail_uid = ticket_detail_uid;
    }

    public payment_status getStatus_() {
        return status_;
    }

    public void setStatus_(payment_status status_) {
        this.status_ = status_;
    }

    public LocalDateTime getUpdated_date() {
        return updated_date;
    }

    public void setUpdated_date(LocalDateTime updated_date) {
        this.updated_date = updated_date;
    }

    public String getMethod_name() {
        return method_name;
    }

    public void setMethod_name(String method_name) {
        this.method_name = method_name;
    }

    public LocalDateTime getMethod_created_date() {
        return method_created_date;
    }

    public void setMethod_created_date(LocalDateTime method_created_date) {
        this.method_created_date = method_created_date;
    }

    public com.bikeseoul.bikeseoul_kw.container.ticket_type getTicket_type() {
        return ticket_type;
    }

    public void setTicket_type(com.bikeseoul.bikeseoul_kw.container.ticket_type ticket_type) {
        this.ticket_type = ticket_type;
    }

    public com.bikeseoul.bikeseoul_kw.container.hours getHours() {
        return hours;
    }

    public void setHours(com.bikeseoul.bikeseoul_kw.container.hours hours) {
        this.hours = hours;
    }

    public int getCost() {
        return cost;
    }

    public void setCost(int cost) {
        this.cost = cost;
    }
}
