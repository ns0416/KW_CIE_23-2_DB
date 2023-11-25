package com.bikeseoul.bikeseoul_kw.dao;

import com.bikeseoul.bikeseoul_kw.container.Gift;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface GiftDao {
    List<Gift> getReceivedGiftList(int receiver_id);

    List<Gift> getSentGiftList(int giver_id);
}
