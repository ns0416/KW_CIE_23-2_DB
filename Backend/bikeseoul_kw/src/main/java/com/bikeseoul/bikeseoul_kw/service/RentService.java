package com.bikeseoul.bikeseoul_kw.service;

import com.bikeseoul.bikeseoul_kw.container.Overdue;
import com.bikeseoul.bikeseoul_kw.container.Rent;
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
}
