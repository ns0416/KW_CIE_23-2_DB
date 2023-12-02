package com.bikeseoul.bikeseoul_kw.manager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.bikeseoul.bikeseoul_kw.container.CommonEnum;
import com.bikeseoul.bikeseoul_kw.container.Coupon;
import com.bikeseoul.bikeseoul_kw.container.Member;
import com.bikeseoul.bikeseoul_kw.service.CouponService;

@Component
public class CouponManager {

	@Autowired
	private CouponService couponService;
	
	public Coupon getCoupon(String coupon_id) {
		return couponService.getCoupon(coupon_id);
	}

	public CommonEnum useCoupon(Coupon cp, Member user) {
		// TODO Auto-generated method stub
		return CommonEnum.FAILED;
	}
	
}
