package com.bikeseoul.bikeseoul_kw.service;

import com.bikeseoul.bikeseoul_kw.container.*;
import com.bikeseoul.bikeseoul_kw.dao.RentDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class RentService implements RentDao {

    @Autowired
    private RentDao rentDao;

    @Override
    public List<Rent> getRentList(int member_uid, LocalDateTime start_date, LocalDateTime end_date) {
        return rentDao.getRentList(member_uid, start_date, end_date);
    }

	@Override
	public List<Map<String, Object>> getOverdueList(int member_uid, int payment_finished) {
		// TODO Auto-generated method stub
		return rentDao.getOverdueList(member_uid, payment_finished);
	}

	@Override
	public int insertRentInfo(Rent rent) {
		// TODO Auto-generated method stub
		return rentDao.insertRentInfo(rent);
	}

	@Override
	public int updateOverdue(Overdue overdue) {
		// TODO Auto-generated method stub
		return rentDao.updateOverdue(overdue);
	}

	@Override
	public int updateRent(Rent rent) {
		// TODO Auto-generated method stub
		return rentDao.updateRent(rent);
	}

	@Override
	public Bike getBikeInfo(int uid) {
		// TODO Auto-generated method stub
		return rentDao.getBikeInfo(uid);
	}

	@Override
	public List<Bike> getBikeList(String station_name) {
		return rentDao.getBikeList(station_name);
	}

	@Override
	public int updateBikeInfo(Bike bike) {
		// TODO Auto-generated method stub
		return rentDao.updateBikeInfo(bike);
	}

	@Override
	public List<Rent> getRentInfo(int rent_uid, int bike_uid, int ticket_detail_uid) {
		// TODO Auto-generated method stub
		return rentDao.getRentInfo(rent_uid, bike_uid, ticket_detail_uid);
	}

	@Override
	public int insertOverdue(Overdue overdue) {
		// TODO Auto-generated method stub
		return rentDao.insertOverdue(overdue);
	}

	@Override
	public List<Breakdown> getBreakdownList(int member_uid) {
		return rentDao.getBreakdownList(member_uid);
	}

	@Override
	public List<Neglect> getNeglectList(int member_uid) {
		return rentDao.getNeglectList(member_uid);
	}
}
