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
    public List<Gift> getReceivedGiftList(int receiver_id) {
        return giftDao.getReceivedGiftList(receiver_id);
    }

    @Override
    public List<Gift> getSentGiftList(int giver_id) {
        return giftDao.getSentGiftList(giver_id);
    }
}
