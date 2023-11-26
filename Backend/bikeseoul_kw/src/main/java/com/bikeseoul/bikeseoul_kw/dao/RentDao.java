package com.bikeseoul.bikeseoul_kw.dao;

import com.bikeseoul.bikeseoul_kw.container.Rent;
import org.apache.ibatis.annotations.Mapper;

import java.time.LocalDateTime;
import java.util.List;

@Mapper
public interface RentDao {
    List<Rent> getRentList(int member_uid);

    List<Rent> getRentListByDate(int member_uid, LocalDateTime start_date, LocalDateTime end_date);
}
