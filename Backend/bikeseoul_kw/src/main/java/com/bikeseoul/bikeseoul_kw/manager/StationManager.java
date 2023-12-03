package com.bikeseoul.bikeseoul_kw.manager;

import com.bikeseoul.bikeseoul_kw.container.Station;
import com.bikeseoul.bikeseoul_kw.service.StationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class StationManager {

    @Autowired
    private StationService stationService;

    public Station getStationInfo(int station_id) {
        return stationService.getStationInfo(station_id);
    }

    public List<Station> getFavoriteStationList(int member_uid) {
        return stationService.getFavoriteStationList(member_uid);
    }

    public List<Station> getStationListByStationName(String station_name) {
        return stationService.getStationListByStationName(station_name);
    }

    public int insertFavoriteStation(int station_uid, int user_uid) {
        return stationService.insertFavoriteStation(station_uid, user_uid);
    }
}
