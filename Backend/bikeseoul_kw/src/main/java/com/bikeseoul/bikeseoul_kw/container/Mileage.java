package com.bikeseoul.bikeseoul_kw.container;

import java.time.LocalDateTime;

public class Mileage extends CommonData{
    private int member_uid, amount;

    public Mileage(int uid, int member_uid, int amount, LocalDateTime created_date) {
        super(uid, created_date);
        this.member_uid = member_uid;
        this.amount = amount;
    }


    public int getMember_uid() {
        return member_uid;
    }

    public void setMember_uid(int member_uid) {
        this.member_uid = member_uid;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

}
