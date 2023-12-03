package com.bikeseoul.bikeseoul_kw.dao;

import com.bikeseoul.bikeseoul_kw.container.PaymentLog;
import com.bikeseoul.bikeseoul_kw.container.PaymentMethod;

import org.apache.ibatis.annotations.Mapper;

import java.time.LocalDateTime;
import java.util.List;

@Mapper
public interface PaymentLogDao {
    List<PaymentLog> getPaymentLogList(int user_uid);

    List<PaymentLog> getRefundLogList(int user_uid);
    List<PaymentMethod> getPaymentMethodList();
}
