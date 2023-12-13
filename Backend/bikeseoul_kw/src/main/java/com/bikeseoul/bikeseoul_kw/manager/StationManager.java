package com.bikeseoul.bikeseoul_kw.manager;

import com.bikeseoul.bikeseoul_kw.container.CommonEnum;
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

    public List<Station> getStationList() {
        return stationService.getStationList();
    }

    public List<Station> getStationList(String station_name, boolean lent) {
        return stationService.getStationList(station_name, lent);
    }

    public List<Station> getStationListNearby(double x, double y, double radius) {
    	double x1 = x-radius, y1 = y-radius, x2 = x+radius, y2=y+radius;
    	
        return stationService.getStationListNearby(x1, y1, x2, y2);
    }
    public int insertFavoriteStation(int station_uid, int user_uid) {
        return stationService.insertFavoriteStation(station_uid, user_uid);
    }
    public CommonEnum insertStation(Station station) {
    	return stationService.insertStation(station) > 0 ? CommonEnum.SUCCESS : CommonEnum.FAILED;
    }
    public CommonEnum updateStation(Station station) {
    	return stationService.updateStation(station) > 0 ? CommonEnum.SUCCESS : CommonEnum.FAILED;
    }
    public CommonEnum deleteStation(int station_uid) {
    	return stationService.deleteStation(station_uid) > 0 ? CommonEnum.SUCCESS : CommonEnum.FAILED;
    }
}
