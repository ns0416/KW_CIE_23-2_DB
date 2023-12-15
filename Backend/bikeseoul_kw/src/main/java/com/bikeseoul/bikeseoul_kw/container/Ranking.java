package com.bikeseoul.bikeseoul_kw.container;

import java.time.LocalDateTime;

public class Ranking extends CommonData{
    private int distance, rank;
    private String member_id;
    /*
    public Ranking(int uid, int distance, int rank, LocalDateTime created_date) {
        super(uid, created_date);
        
        this.distance = distance;
        this.rank = rank;
    }*/

    public Ranking(int uid,  String member_id, int distance, LocalDateTime created_date) {
        super(uid, created_date);
        this.distance = distance;
        this.member_id = member_id;
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
    public String getMember_id() {
		return member_id;
	}
}
