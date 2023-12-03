package com.bikeseoul.bikeseoul_kw.manager;

import com.bikeseoul.bikeseoul_kw.container.PaymentLog;
import com.bikeseoul.bikeseoul_kw.service.PaymentLogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class PaymentLogManager {

    @Autowired
    private PaymentLogService paymentLogService;

    public List<PaymentLog> getPaymentLogList(int user_uid) {
        return paymentLogService.getPaymentLogList(user_uid);
    }

    public List<PaymentLog> getRefundLogList(int user_uid) {
        return paymentLogService.getRefundLogList(user_uid);
    }
}
