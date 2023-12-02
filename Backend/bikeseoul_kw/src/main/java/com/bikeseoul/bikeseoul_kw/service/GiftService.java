package com.bikeseoul.bikeseoul_kw.service;

import com.bikeseoul.bikeseoul_kw.container.Gift;
import com.bikeseoul.bikeseoul_kw.dao.GiftDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GiftService implements GiftDao {
    @Autowired
    private GiftDao giftDao;

    @Override
    public List<Gift> getReceivedGiftList(int receiver_uid) {
        return giftDao.getReceivedGiftList(receiver_uid);
    }

    @Override
    public List<Gift> getSentGiftList(int giver_uid) {
        return giftDao.getSentGiftList(giver_uid);
    }
}
