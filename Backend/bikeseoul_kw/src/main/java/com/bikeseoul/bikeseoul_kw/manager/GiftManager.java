package com.bikeseoul.bikeseoul_kw.manager;

import com.bikeseoul.bikeseoul_kw.container.Gift;
import com.bikeseoul.bikeseoul_kw.service.GiftService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class GiftManager {

    @Autowired
    private GiftService giftService;

    public List<Gift> getReceivedGiftList(int receiver_uid) {
        if (receiver_uid == 0) {
            return null;
        }
        return giftService.getReceivedGiftList(receiver_uid);
    }
    public List<Gift> getSentGiftList(int giver_uid) {
        if (giver_uid == 0) {
            return null;
        }
        return giftService.getSentGiftList(giver_uid);
    }
}
