package com.bikeseoul.bikeseoul_kw.service;

import com.bikeseoul.bikeseoul_kw.container.Gift;
import com.bikeseoul.bikeseoul_kw.dao.GiftDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class GiftService implements GiftDao {
    @Autowired
    private GiftDao giftDao;

    @Override
    public List<Map<String, Object>> getReceivedGiftList(int receiver_uid) {
        return giftDao.getReceivedGiftList(receiver_uid);
    }

    @Override
    public List<Map<String, Object>> getSentGiftList(int giver_uid) {
        return giftDao.getSentGiftList(giver_uid);
    }

	@Override
	public int insertGiftInfo(Gift gift) {
		// TODO Auto-generated method stub
		return giftDao.insertGiftInfo(gift);
	}

	@Override
	public Gift getGiftInfo(int uid) {
		// TODO Auto-generated method stub
		return giftDao.getGiftInfo(uid);
	}
    
}
