package com.bikeseoul.bikeseoul_kw.service;

import com.bikeseoul.bikeseoul_kw.container.Coupon;
import com.bikeseoul.bikeseoul_kw.dao.CouponDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CouponService implements CouponDao{
    @Autowired
    private CouponDao couponDao;

    @Override
    public List<Coupon> getUserCouponList(int owner_id) {
        return couponDao.getUserCouponList(owner_id);
    }

    @Override
    public Coupon getCoupon(int coupon_id) {
        return couponDao.getCoupon(coupon_id);
    }

    @Override
    public List<Coupon> getCouponList() {
        return couponDao.getCouponList();
    }

}
