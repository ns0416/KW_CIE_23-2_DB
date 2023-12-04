package com.bikeseoul.bikeseoul_kw.dao;

import com.bikeseoul.bikeseoul_kw.container.Coupon;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface CouponDao {
    // 등록한 쿠폰내역 가져옴 DR-3701
    List<Coupon> getUserCouponList(int owner_uid);

    // 쿠폰번호를 조회하는 기능(쿠폰번호 검색) DR-3801
    Coupon getCoupon(String coupon_id);

    // 전체 쿠폰 리스트 가져옴 관리자 기능
    List<Coupon> getCouponList();
    
    int insertCoupon(Coupon cp);
    int updateCoupon(Coupon cp);
}
