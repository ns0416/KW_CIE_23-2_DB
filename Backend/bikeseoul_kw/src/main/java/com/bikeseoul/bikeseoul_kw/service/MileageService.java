package com.bikeseoul.bikeseoul_kw.service;

import com.bikeseoul.bikeseoul_kw.container.Mileage;
import com.bikeseoul.bikeseoul_kw.dao.MileageDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.bikeseoul.bikeseoul_kw.container.Transfercard;

import java.util.List;

@Service
public class MileageService implements MileageDao {
    @Autowired
    private MileageDao mileageDao;

    @Override
    public List<Mileage> getMileageList(int member_uid) {
        return mileageDao.getMileageList(member_uid);
    }

    @Override
    public int getMileageSum(int member_uid) {
        return mileageDao.getMileageSum(member_uid);
    }

	@Override
	public int updateTransfercardInfo(Transfercard card) {
		// TODO Auto-generated method stub
		return mileageDao.updateTransfercardInfo(card);
	}

	@Override
	public int deleteTransfercardInfo(int member_uid) {
		// TODO Auto-generated method stub
		return mileageDao.deleteTransfercardInfo(member_uid);
	}
}
