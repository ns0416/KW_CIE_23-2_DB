package com.bikeseoul.bikeseoul_kw.dao;

import com.bikeseoul.bikeseoul_kw.container.Gift;

import java.util.List;

public interface GiftDao {
    List<Gift> getReceivedGiftList(int receiver_id);

    List<Gift> getSentGiftList(int giver_id);
}
