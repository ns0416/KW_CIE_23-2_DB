package com.bikeseoul.bikeseoul_kw.dao;

import com.bikeseoul.bikeseoul_kw.container.Station;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface StationDao {
//    List<Station> getStationList();

    Station getStationInfo(int station_uid);

    List<Station> getFavoriteStationList(int user_uid);

    List<Station> getStationListByStationName(String station_name);

    int insertFavoriteStation(int station_uid, int user_uid);
}
