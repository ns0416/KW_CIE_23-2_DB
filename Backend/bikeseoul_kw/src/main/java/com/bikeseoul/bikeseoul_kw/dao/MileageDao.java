package com.bikeseoul.bikeseoul_kw.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.bikeseoul.bikeseoul_kw.container.Transfercard;

@Mapper
public interface MileageDao {
	
	int updateTransfercardInfo(Transfercard card);
}
