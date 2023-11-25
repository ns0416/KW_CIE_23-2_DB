package com.bikeseoul.bikeseoul_kw.dao;

import com.bikeseoul.bikeseoul_kw.container.Mileage;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import com.bikeseoul.bikeseoul_kw.container.Transfercard;

@Mapper
public interface MileageDao {
    List<Mileage> getMileageList(int member_uid);
    int getMileageSum(int member_uid);
    int updateTransfercardInfo(Transfercard card);
    int deleteTransfercardInfo(int member_uid);
}
