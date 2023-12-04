package com.bikeseoul.bikeseoul_kw.manager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.bikeseoul.bikeseoul_kw.container.CommonEnum;
import com.bikeseoul.bikeseoul_kw.container.Coupon;
import com.bikeseoul.bikeseoul_kw.container.Member;
import com.bikeseoul.bikeseoul_kw.container.Ticket_detail;
import com.bikeseoul.bikeseoul_kw.service.CouponService;
import com.bikeseoul.bikeseoul_kw.service.TicketService;

import java.util.List;

@Component
public class CouponManager {

	@Autowired
	private CouponService couponService;

	@Autowired
	private TicketService ticketService;
	
	public List<Coupon> getUserCouponList(int owner_uid) {
		if (owner_uid == 0) {
			return null;
		}
		return couponService.getUserCouponList(owner_uid);
	}
	public Coupon getCoupon(String coupon_id) {
		if (coupon_id == null) {
			return null;
		}
		return couponService.getCoupon(coupon_id);
	}
	public List<Coupon> getCouponList() {
		return couponService.getCouponList();
	}

	@Transactional
	public CommonEnum useCoupon(Coupon cp, Member mem) {
		// TODO Auto-generated method stub
		try {
			Ticket_detail td = new Ticket_detail(mem.getUid(), cp.getTicket_id());
			Coupon cp_new = new Coupon(cp.getCoupon_id(), mem.getUid());
			CommonEnum res1 = couponService.updateCoupon(cp_new) > 0 ? CommonEnum.SUCCESS : CommonEnum.FAILED;
			if(res1 != CommonEnum.SUCCESS)
				throw new Exception();
			CommonEnum res2 =  ticketService.insertTicketDetail(td) > 0 ? CommonEnum.SUCCESS : CommonEnum.FAILED;
			if(res2 != CommonEnum.SUCCESS)
				throw new Exception();
			return CommonEnum.SUCCESS;
			
		}catch(Exception e) {
			e.printStackTrace();
		}
		return CommonEnum.FAILED;
	}
	
}
