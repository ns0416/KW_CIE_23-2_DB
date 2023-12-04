package com.bikeseoul.bikeseoul_kw.service;

import com.bikeseoul.bikeseoul_kw.container.PaymentLog;
import com.bikeseoul.bikeseoul_kw.container.PaymentMethod;
import com.bikeseoul.bikeseoul_kw.dao.PaymentLogDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PaymentLogService implements PaymentLogDao {
    @Autowired
    private PaymentLogDao paymentLogDao;

    @Override
    public List<PaymentLog> getPaymentLogList(int user_uid) {
        return paymentLogDao.getPaymentLogList(user_uid);
    }

    @Override
    public List<PaymentLog> getRefundLogList(int user_uid) {
        return paymentLogDao.getRefundLogList(user_uid);
    }

	@Override
	public List<PaymentMethod> getPaymentMethodList() {
		// TODO Auto-generated method stub
		return paymentLogDao.getPaymentMethodList();
	}

	@Override
	public PaymentMethod getPaymentMethodInfo(int uid) {
		// TODO Auto-generated method stub
		return paymentLogDao.getPaymentMethodInfo(uid);
	}

	@Override
	public int insertPaymentLog(PaymentLog log) {
		// TODO Auto-generated method stub
		return paymentLogDao.insertPaymentLog(log);
	}
}