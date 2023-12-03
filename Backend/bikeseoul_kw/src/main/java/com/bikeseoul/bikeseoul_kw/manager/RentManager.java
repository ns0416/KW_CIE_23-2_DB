package com.bikeseoul.bikeseoul_kw.manager;

import com.bikeseoul.bikeseoul_kw.container.Overdue;
import com.bikeseoul.bikeseoul_kw.container.Pair;
import com.bikeseoul.bikeseoul_kw.container.Rent;
import com.bikeseoul.bikeseoul_kw.service.RentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Component
public class RentManager {

    @Autowired
    private RentService rentService;
    public List<Rent> getRentList(int member_uid, LocalDateTime start_date, LocalDateTime end_date) {
        if (member_uid == 0) {
            return null;
        }
        return rentService.getRentList(member_uid, start_date, end_date);
    }
	public List<Pair<Rent, List<Overdue>>> getOverdueList(int member_uid, boolean payment_finished) {
		// TODO Auto-generated method stub
		List<Map<String, Object>> data = rentService.getOverdueList(member_uid, payment_finished == false ? 0 : 1);
		List<Pair<Rent, List<Overdue>>> result = new ArrayList();
		Rent rent = null;
		for(Map<String, Object> item : data) {
			if(rent == null || (Integer)item.get("uid") != rent.getUid()) {
				rent = new Rent((Integer)item.get("bike_uid"), (Integer)item.get("ticket_detail_uid"), (LocalDateTime)item.get("start_date"), (LocalDateTime)item.get("return_date"), (Integer)item.get("rent_station"), (Integer)item.get("return_station"), (double)item.get("distance"))
				Pair<Rent, List<Overdue>> list = new Pair();
				List<Overdue> od_list = new ArrayList();
				list.set(rent, od_list);		
				result.add(list);
			}
			Overdue od = new Overdue((Integer)item.get("overdue_amount"), (Integer)item.get("payment_finished"), (LocalDateTime)item.get("created_date"), (LocalDateTime)item.get("update_date"));
			result.get(result.size()-1).getSecond().add(od);
		}
		return result;
	}
}
