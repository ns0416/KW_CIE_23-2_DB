package com.bikeseoul.bikeseoul_kw.manager;

import com.bikeseoul.bikeseoul_kw.container.*;
import com.bikeseoul.bikeseoul_kw.service.GiftService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

@Component
public class GiftManager {

    @Autowired
    private GiftService giftService;

    public List<Pair<Ticket, Gift>> getReceivedGiftList(int receiver_uid) {
        List<Pair<Ticket, Gift>> receivedGiftList = null;
        List<Map<String, Object>> data = giftService.getReceivedGiftList(receiver_uid);
        for(Map<String, Object> map : data) {
            Ticket ticket = new Ticket((ticket_type)map.get("ticket_type"), (hours)map.get("hours"), (Integer)map.get("cost"));
            Gift gift = new Gift((Integer)map.get("gift_id"), (Integer)map.get("ticket_uid"), (Integer)map.get("giver_uid"), (Integer)map.get("receiver_uid"), (Integer)map.get("ticket_detail_uid"), (LocalDateTime)map.get("gift_created_date"));
            Pair<Ticket, Gift> pair = new Pair();
            pair.set(ticket, gift);
            receivedGiftList.add(pair);
        }
        return receivedGiftList;
    }
    public List<Pair<Ticket, Gift>> getSentGiftList(int giver_uid) {
        List<Pair<Ticket, Gift>> sentGiftList = null;
        List<Map<String, Object>> data = giftService.getSentGiftList(giver_uid);
        for(Map<String, Object> map : data) {
            Ticket ticket = new Ticket((ticket_type)map.get("ticket_type"), (hours)map.get("hours"), (Integer)map.get("cost"));
            Gift gift = new Gift((Integer)map.get("gift_id"), (Integer)map.get("ticket_uid"), (Integer)map.get("giver_uid"), (Integer)map.get("receiver_uid"), (Integer)map.get("ticket_detail_uid"), (LocalDateTime)map.get("gift_created_date"));
            Pair<Ticket, Gift> pair = new Pair();
            pair.set(ticket, gift);
            sentGiftList.add(pair);
        }
        return sentGiftList;
    }
	public Gift getGiftInfo(int log_gift_uid) {
		// TODO Auto-generated method stub
		return giftService.getGiftInfo(log_gift_uid);
	}
}
