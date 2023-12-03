package com.bikeseoul.bikeseoul_kw.container;

import java.time.LocalDateTime;

public class Rent extends CommonData{
    private int member_uid, bike_uid, ticket_detail_uid, rent_station, return_station;

    private double last_position_lat, last_position_lon, distance;
    private LocalDateTime start_date, return_date;

    public Rent(int uid, int member_uid, int bike_uid, int ticket_detail_uid, LocalDateTime start_date, LocalDateTime return_date, int rent_station, int return_station, double last_position_lat, double last_position_lon, double distance, LocalDateTime updated_date) {
        super(uid, updated_date);
        this.member_uid = member_uid;
        this.bike_uid = bike_uid;
        this.ticket_detail_uid = ticket_detail_uid;
        this.start_date = start_date;
        this.return_date = return_date;
        this.rent_station = rent_station;
        this.return_station = return_station;
        this.last_position_lat = last_position_lat;
        this.last_position_lon = last_position_lon;
        this.distance = distance;
    }
    
    public Rent(int bike_uid, int ticket_detail_uid, LocalDateTime start_date, LocalDateTime return_date, int rent_station, int return_station,double distance) {
        super(0, null);
    	this.bike_uid = bike_uid;
        this.ticket_detail_uid = ticket_detail_uid;
        this.start_date = start_date;
        this.return_date = return_date;
        this.rent_station = rent_station;
        this.return_station = return_station;
        this.distance = distance;
    }

    public int getMember_uid() {
        return member_uid;
    }

    public void setMember_uid(int member_uid) {
        this.member_uid = member_uid;
    }

    public int getBike_uid() {
        return bike_uid;
    }

    public void setBike_uid(int bike_uid) {
        this.bike_uid = bike_uid;
    }

    public int getTicket_detail_uid() {
        return ticket_detail_uid;
    }

    public void setTicket_detail_uid(int ticket_detail_uid) {
        this.ticket_detail_uid = ticket_detail_uid;
    }

    public int getRent_station() {
        return rent_station;
    }

    public void setRent_station(int rent_station) {
        this.rent_station = rent_station;
    }

    public int getReturn_station() {
        return return_station;
    }

    public void setReturn_station(int return_station) {
        this.return_station = return_station;
    }

    public double getLast_position_lat() {
        return last_position_lat;
    }

    public void setLast_position_lat(double last_position_lat) {
        this.last_position_lat = last_position_lat;
    }

    public double getLast_position_lon() {
        return last_position_lon;
    }

    public void setLast_position_lon(double last_position_lon) {
        this.last_position_lon = last_position_lon;
    }

    public double getDistance() {
        return distance;
    }

    public void setDistance(double distance) {
        this.distance = distance;
    }

    public LocalDateTime getStart_date() {
        return start_date;
    }

    public void setStart_date(LocalDateTime start_date) {
        this.start_date = start_date;
    }

    public LocalDateTime getReturn_date() {
        return return_date;
    }

    public void setReturn_date(LocalDateTime return_date) {
        this.return_date = return_date;
    }
}
