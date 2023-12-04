package com.bikeseoul.bikeseoul_kw.manager;

import com.bikeseoul.bikeseoul_kw.container.Bike;
import com.bikeseoul.bikeseoul_kw.container.CommonEnum;
import com.bikeseoul.bikeseoul_kw.container.Overdue;
import com.bikeseoul.bikeseoul_kw.container.Pair;
import com.bikeseoul.bikeseoul_kw.container.Rent;
import com.bikeseoul.bikeseoul_kw.container.bike_status;
import com.bikeseoul.bikeseoul_kw.service.RentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

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
				rent = new Rent((Integer)item.get("bike_uid"), (Integer)item.get("ticket_detail_uid"), (LocalDateTime)item.get("start_date"), (LocalDateTime)item.get("return_date"), (Integer)item.get("rent_station"), (Integer)item.get("return_station"), (double)item.get("distance"));
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
	public Bike getBikeInfo(Integer bike_id) {
		// TODO Auto-generated method stub
		return rentService.getBikeInfo(bike_id);
	}
	@Transactional
	public CommonEnum rentBike(Rent rent) {
		// TODO Auto-generated method stub
		try {
			Bike bike = new Bike(rent.getBike_uid(), bike_status.rent);
			CommonEnum res1 = rentService.updateBikeInfo(bike) > 0 ? CommonEnum.SUCCESS : CommonEnum.FAILED;
			if(res1 != CommonEnum.SUCCESS)
				throw new Exception();
			CommonEnum res2 = rentService.insertRentInfo(rent) > 0 ? CommonEnum.SUCCESS : CommonEnum.FAILED;
			if(res2 != CommonEnum.SUCCESS)
				throw new Exception();
			return res2;
		}catch(Exception e) {
			e.printStackTrace();
		}
		return CommonEnum.FAILED;
	}
	
	public Rent getRentInfo(int rent_uid, Integer bike_uid, int ticket_detail_uid) {
		// TODO Auto-generated method stub
		return rentService.getRentInfo(rent_uid, bike_uid, ticket_detail_uid);
	}
	@Transactional
	public CommonEnum returnBike(Rent rent, Integer station_id) {
		// TODO Auto-generated method stub
		try {
			Rent return_rent = new Rent(rent.getUid(), station_id);
			CommonEnum res1 = rentService.updateRent(return_rent) > 0 ? CommonEnum.SUCCESS : CommonEnum.FAILED;
			if(res1 != CommonEnum.SUCCESS)
				throw new Exception();
			Bike bike = new Bike(rent.getBike_uid(), bike_status.ready);
			CommonEnum res2 = rentService.updateBikeInfo(bike) > 0 ? CommonEnum.SUCCESS : CommonEnum.FAILED;
			return res2;
		}catch(Exception e) {
			e.printStackTrace();
		}
		return CommonEnum.FAILED;
	}
	public double getDistance_arc(double sLat, double sLong, double dLat, double dLong){
		final int radius=6371009;
		double uLat=Math.toRadians(sLat-dLat);
		double uLong=Math.toRadians(sLong-dLong);
		double a = Math.sin(uLat/2) * Math.sin(uLat/2) + Math.cos(Math.toRadians(sLong)) * Math.cos(Math.toRadians(dLong)) * Math.sin(uLong/2) * Math.sin(uLong/2);
		double c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
		double distance = radius * c;
		return Double.parseDouble(String.format("%.3f", distance/1000));
	}
	public CommonEnum updateRent(Rent rent) {
		// TODO Auto-generated method stub
		return rentService.updateRent(rent)> 0 ? CommonEnum.SUCCESS : CommonEnum.FAILED;
	}
}