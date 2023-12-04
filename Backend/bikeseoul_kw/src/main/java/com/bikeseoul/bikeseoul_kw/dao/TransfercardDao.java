package com.bikeseoul.bikeseoul_kw.dao;

import com.bikeseoul.bikeseoul_kw.container.Transfercard;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface TransfercardDao {
    List<Transfercard> getTransfercardList(int member_uid);
}
