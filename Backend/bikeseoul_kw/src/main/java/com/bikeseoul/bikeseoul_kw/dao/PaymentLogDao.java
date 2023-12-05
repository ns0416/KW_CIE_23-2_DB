package com.bikeseoul.bikeseoul_kw.dao;

import com.bikeseoul.bikeseoul_kw.container.PaymentLog;
import com.bikeseoul.bikeseoul_kw.container.PaymentMethod;

import org.apache.ibatis.annotations.Mapper;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

@Mapper
public interface PaymentLogDao {
    List<Map<String, Object>> getPaymentLogList(int user_uid);

    List<Map<String, Object>> getRefundLogList(int user_uid);
    int getPaymentLogGiftUid(int log_uid);
    List<PaymentMethod> getPaymentMethodList();
    PaymentMethod getPaymentMethodInfo(int uid);
    int insertPaymentLog(PaymentLog log);
    int insertPaymentLogGift(int log_uid, int gift_uid);
}
