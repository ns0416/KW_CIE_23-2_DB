package com.bikeseoul.bikeseoul_kw.manager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.bikeseoul.bikeseoul_kw.container.CommonEnum;
import com.bikeseoul.bikeseoul_kw.container.Coupon;
import com.bikeseoul.bikeseoul_kw.container.Member;
import com.bikeseoul.bikeseoul_kw.service.CouponService;

import java.util.List;

@Component
public class CouponManager {

	@Autowired
	private CouponService couponService;

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


	public CommonEnum useCoupon(Coupon cp, Member user) {
		// TODO Auto-generated method stub
		return CommonEnum.FAILED;
	}
	
}
