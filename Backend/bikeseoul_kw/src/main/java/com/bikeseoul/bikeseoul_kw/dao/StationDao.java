package com.bikeseoul.bikeseoul_kw.dao;

import com.bikeseoul.bikeseoul_kw.container.Station;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface StationDao {
//    List<Station> getStationList();

    Station getStationInfo(int station_uid);

    List<Station> getFavoriteStationList(int user_uid);
    List<Station> getStationList();
    List<Station> getStationList(String station_name, boolean lent);
    int insertFavoriteStation(int station_uid, int user_uid);
    int insertStation(Station station);
    List<Station> getStationListNearby(double x1, double y1, double x2, double y2);
    int updateStation(Station station);
    int deleteStation(int uid);
}
