package com.bikeseoul.bikeseoul_kw.service;

import com.bikeseoul.bikeseoul_kw.container.Rent;
import com.bikeseoul.bikeseoul_kw.dao.RentDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class RentService implements RentDao {

    @Autowired
    private RentDao rentDao;

    @Override
    public List<Rent> getRentList(int member_uid) {
        return rentDao.getRentList(member_uid);
    }
    @Override
    public List<Rent> getRentList(int member_uid, LocalDateTime start_date, LocalDateTime end_date) {
        return rentDao.getRentList(member_uid, start_date, end_date);
    }
}
