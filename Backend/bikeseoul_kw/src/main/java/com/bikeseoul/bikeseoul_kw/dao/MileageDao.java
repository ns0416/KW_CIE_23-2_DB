package com.bikeseoul.bikeseoul_kw.dao;

import com.bikeseoul.bikeseoul_kw.container.Mileage;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface MileageDao {
    List<Mileage> getMileageList(int member_uid);
    int getMileageSum(int member_uid);
}
