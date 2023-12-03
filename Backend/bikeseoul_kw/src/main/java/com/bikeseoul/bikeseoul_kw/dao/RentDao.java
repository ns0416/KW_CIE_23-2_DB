package com.bikeseoul.bikeseoul_kw.dao;

import com.bikeseoul.bikeseoul_kw.container.Overdue;
import com.bikeseoul.bikeseoul_kw.container.Rent;
import org.apache.ibatis.annotations.Mapper;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Mapper
public interface RentDao {

    List<Rent> getRentList(int member_uid, LocalDateTime start_date, LocalDateTime end_date);
    List<Map<String, Object>> getOverdueList(int member_uid, int payment_finished);
}