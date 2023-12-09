package com.bikeseoul.bikeseoul_kw.container;

import java.time.LocalDateTime;

public class Station extends CommonData{
    private String station_name;
    private double lat, lon;
    private int size;
    private boolean is_valid;
    private station_type station_type;
    private int general_cnt, sprout_cnt;
    private int favorite_user_uid;
    private LocalDateTime favorite_created_date;

    public Station(int uid, String station_name, double lat, double lon, int size, boolean is_valid, station_type station_type, LocalDateTime created_date) {
        super(uid, created_date);
        this.station_name = station_name;
        this.lat = lat;
        this.lon = lon;
        this.size = size;
        this.is_valid = is_valid;
        this.station_type = station_type;
    }
    public Station(String station_name, double lat, double lon, int size, station_type station_type) {
        super(0, null);
        this.station_name = station_name;
        this.lat = lat;
        this.lon = lon;
        this.size = size;
        this.station_type = station_type;
    }
    public Station(int uid, String station_name, double lat, double lon, int size, station_type station_type, boolean is_valid) {
        super(uid, null);
        this.station_name = station_name;
        this.lat = lat;
        this.lon = lon;
        this.size = size;
        this.is_valid = is_valid;
        this.station_type = station_type;
    }

    public Station(int uid, String station_name, double lat, double lon, int size, boolean is_valid, station_type station_type, LocalDateTime created_date, int general_cnt, int sprout_cnt) {
        super(uid, created_date);
        this.station_name = station_name;
        this.lat = lat;
        this.lon = lon;
        this.size = size;
        this.is_valid = is_valid;
        this.station_type = station_type;
        this.general_cnt = general_cnt;
        this.sprout_cnt = sprout_cnt;
    }
    public Station(int uid, String station_name, double lat, double lon, int size, boolean is_valid, station_type station_type, int general_cnt, int sprout_cnt) {
        super(uid, null);
        this.station_name = station_name;
        this.lat = lat;
        this.lon = lon;
        this.size = size;
        this.is_valid = is_valid;
        this.station_type = station_type;
        this.general_cnt = general_cnt;
        this.sprout_cnt = sprout_cnt;
        //this.favorite_user_uid = favorite_user_uid;
        //this.favorite_created_date = favorite_created_date;
    }

    public Station(int uid, String station_name, double lat, double lon, int size, boolean is_valid, station_type station_type, int general_cnt, int sprout_cnt, int favorite_user_uid, LocalDateTime favorite_created_date) {
        super(uid, null);
        this.station_name = station_name;
        this.lat = lat;
        this.lon = lon;
        this.size = size;
        this.is_valid = is_valid;
        this.station_type = station_type;
        this.general_cnt = general_cnt;
        this.sprout_cnt = sprout_cnt;
        this.favorite_user_uid = favorite_user_uid;
        this.favorite_created_date = favorite_created_date;
    }

    public String getStation_name() {
        return station_name;
    }

    public void setStation_name(String station_name) {
        this.station_name = station_name;
    }

    public double getLat() {
        return lat;
    }

    public void setLat(double lat) {
        this.lat = lat;
    }

    public double getLon() {
        return lon;
    }

    public void setLon(double lon) {
        this.lon = lon;
    }

    public int getSize() {
        return size;
    }

    public void setSize(int size) {
        this.size = size;
    }

    public boolean isIs_valid() {
        return is_valid;
    }

    public void setIs_valid(boolean is_valid) {
        this.is_valid = is_valid;
    }

    public com.bikeseoul.bikeseoul_kw.container.station_type getStation_type() {
        return station_type;
    }

    public void setStation_type(com.bikeseoul.bikeseoul_kw.container.station_type station_type) {
        this.station_type = station_type;
    }

    public int getGeneral_cnt() {
        return general_cnt;
    }

    public void setGeneral_cnt(int general_cnt) {
        this.general_cnt = general_cnt;
    }

    public int getSprout_cnt() {
        return sprout_cnt;
    }

    public void setSprout_cnt(int sprout_cnt) {
        this.sprout_cnt = sprout_cnt;
    }

    public int getFavorite_user_uid() {
        return favorite_user_uid;
    }

    public void setFavorite_user_uid(int favorite_user_uid) {
        this.favorite_user_uid = favorite_user_uid;
    }

    public LocalDateTime getFavorite_created_date() {
        return favorite_created_date;
    }

    public void setFavorite_created_date(LocalDateTime favorite_created_date) {
        this.favorite_created_date = favorite_created_date;
    }
}
