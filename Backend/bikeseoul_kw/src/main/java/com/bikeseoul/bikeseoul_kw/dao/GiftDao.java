package com.bikeseoul.bikeseoul_kw.dao;

import com.bikeseoul.bikeseoul_kw.container.Gift;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface GiftDao {
    List<Map<String, Object>> getReceivedGiftList(int receiver_uid);

    List<Map<String, Object>> getSentGiftList(int giver_uid);
    int insertGiftInfo(Gift gift);
    Gift getGiftInfo(int uid);
}
