package com.bikeseoul.bikeseoul_kw.container;

import java.time.LocalDateTime;

public class Ranking {
    private int member_uid, distance, rank;
    private LocalDateTime created_date;

    public int getMember_uid() {
        return member_uid;
    }

    public int getDistance() {
        return distance;
    }

    public void setDistance(int distance) {
        this.distance = distance;
    }

    public int getRank() {
        return rank;
    }

    public void setRank(int rank) {
        this.rank = rank;
    }

    public LocalDateTime getCreated_date() {
        return created_date;
    }
}
