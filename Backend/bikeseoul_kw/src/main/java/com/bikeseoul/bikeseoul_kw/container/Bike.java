package com.bikeseoul.bikeseoul_kw.container;

import java.time.LocalDateTime;

public class Bike {
    private int bike_id, station_uid;
    private bike_type bike_type;
    private bike_status status_;
    private LocalDateTime inspection_date, release_date, updated_date;

    public Bike(int bike_id, bike_type bike_type, int station_uid, bike_status status_, LocalDateTime inspection_date, LocalDateTime release_date, LocalDateTime updated_date) {
        this.bike_id = bike_id;
        this.bike_type = bike_type;
        this.station_uid = station_uid;
        this.status_ = status_;
        this.inspection_date = inspection_date;
        this.release_date = release_date;
        this.updated_date = updated_date;
    }
    public Bike(int bike_id, bike_status status_) {
        this.bike_id = bike_id;
        this.status_ = status_;
    }
    public Bike(int bike_id,int station_uid, bike_status status_) {
        this.bike_id = bike_id;
        this.status_ = status_;
        this.station_uid = station_uid;
    }
    public Bike(bike_type bike_type, int station_uid, bike_status status_, String inspection_date) {
    	this.bike_type = bike_type;
        this.station_uid = station_uid;
        this.status_ = status_;
        if(inspection_date != null)
        	this.inspection_date = LocalDateTime.now();
    }
    public int getBike_id() {
        return bike_id;
    }

    public void setBike_id(int bike_id) {
        this.bike_id = bike_id;
    }

    public int getStation_uid() {
        return station_uid;
    }

    public void setStation_uid(int station_uid) {
        this.station_uid = station_uid;
    }

    public com.bikeseoul.bikeseoul_kw.container.bike_type getBike_type() {
        return bike_type;
    }

    public void setBike_type(com.bikeseoul.bikeseoul_kw.container.bike_type bike_type) {
        this.bike_type = bike_type;
    }

    public bike_status getStatus_() {
        return status_;
    }

    public void setStatus_(bike_status status_) {
        this.status_ = status_;
    }

    public LocalDateTime getInspection_date() {
        return inspection_date;
    }

    public void setInspection_date(LocalDateTime inspection_date) {
        this.inspection_date = inspection_date;
    }

    public LocalDateTime getRelease_date() {
        return release_date;
    }

    public void setRelease_date(LocalDateTime release_date) {
        this.release_date = release_date;
    }

    public LocalDateTime getUpdated_date() {
        return updated_date;
    }

    public void setUpdated_date(LocalDateTime updated_date) {
        this.updated_date = updated_date;
    }
}
