package com.bikeseoul.bikeseoul_kw.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bikeseoul.bikeseoul_kw.container.Transfercard;
import com.bikeseoul.bikeseoul_kw.dao.MileageDao;


@Service
public class MileageService implements MileageDao{
	@Autowired
	private MileageDao mileageDao;

	@Override
	public int updateTransfercardInfo(Transfercard card) {
		// TODO Auto-generated method stub
		return mileageDao.updateTransfercardInfo(card);
	}
}
