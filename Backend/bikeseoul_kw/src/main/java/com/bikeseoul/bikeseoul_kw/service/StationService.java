package com.bikeseoul.bikeseoul_kw.service;

import com.bikeseoul.bikeseoul_kw.container.Station;
import com.bikeseoul.bikeseoul_kw.dao.StationDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StationService implements StationDao {

    @Autowired
    private StationDao stationDao;

    @Override
    public Station getStationInfo(int station_id) {
        return stationDao.getStationInfo(station_id);
    }

    @Override
    public List<Station> getFavoriteStationList(int member_uid) {
        return stationDao.getFavoriteStationList(member_uid);
    }

    @Override
    public List<Station> getStationList(String station_name) {
        return stationDao.getStationList(station_name);
    }

    @Override
    public int insertFavoriteStation(int station_uid, int user_uid) {
        return stationDao.insertFavoriteStation(station_uid, user_uid);
    }

	@Override
	public List<Station> getStationListNearby(double x1, double y1, double x2, double y2) {
		// TODO Auto-generated method stub
		return stationDao.getStationListNearby(x1, y1, x2, y2);
	}
}
