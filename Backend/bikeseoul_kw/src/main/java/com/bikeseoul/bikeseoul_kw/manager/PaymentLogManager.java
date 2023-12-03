package com.bikeseoul.bikeseoul_kw.manager;

import com.bikeseoul.bikeseoul_kw.container.CommonEnum;
import com.bikeseoul.bikeseoul_kw.container.Gift;
import com.bikeseoul.bikeseoul_kw.container.PaymentLog;
import com.bikeseoul.bikeseoul_kw.container.PaymentMethod;
import com.bikeseoul.bikeseoul_kw.container.Ticket;
import com.bikeseoul.bikeseoul_kw.container.Ticket_detail;
import com.bikeseoul.bikeseoul_kw.container.User;
import com.bikeseoul.bikeseoul_kw.container.payment_status;
import com.bikeseoul.bikeseoul_kw.service.GiftService;
import com.bikeseoul.bikeseoul_kw.service.PaymentLogService;
import com.bikeseoul.bikeseoul_kw.service.TicketService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Component
public class PaymentLogManager {

    @Autowired
    private PaymentLogService paymentLogService;

    @Autowired
	private TicketService ticketService;
    
    @Autowired
    private GiftService giftService;
    
    @Autowired
    private AccountManager am;
    
    public List<PaymentLog> getPaymentLogList(int user_uid) {
        return paymentLogService.getPaymentLogList(user_uid);
    }

    public List<PaymentLog> getRefundLogList(int user_uid) {
        return paymentLogService.getRefundLogList(user_uid);
    }
    @Transactional
    public CommonEnum payment(User mem, Integer ticket_uid, Integer payment_method, String gift_email) {
		// TODO Auto-generated method stub
    	try {
    		Ticket ticket = ticketService.getTicketInfo(ticket_uid);
    		if(ticket.isIsvalid())
    			return CommonEnum.NOT_PERMITTED;
    		PaymentMethod pm = paymentLogService.getPaymentMethodInfo(payment_method);
    		if(pm == null)
    			return CommonEnum.NOT_PERMITTED;
    		PaymentLog log = new PaymentLog(mem.getUid(), ticket.getUid(), pm.getUid(), payment_status.paid);
    		CommonEnum pay_res = paymentLogService.insertPaymentLog(log) > 0 ? CommonEnum.SUCCESS : CommonEnum.FAILED;
    		if(pay_res != CommonEnum.SUCCESS)
    			throw new Exception();
    		CommonEnum res =  null;
    		if(gift_email != null) { //send gift
    			User mem_recv = am.getUserInfo(gift_email, true, false);
    			if(mem_recv == null)
    				throw new Exception();
    			Gift gift = new Gift(ticket.getUid(), mem.getUid(), mem_recv.getUid());
    			res = giftService.insertGiftInfo(gift) > 0 ? CommonEnum.SUCCESS : CommonEnum.FAILED;    			
    		}else {
    			Ticket_detail td = new Ticket_detail(mem.getUid(), ticket.getUid());
    			res =  ticketService.insertTicketDetail(td) > 0 ? CommonEnum.SUCCESS : CommonEnum.FAILED;
    		}
    		if(res != CommonEnum.SUCCESS)
    			throw new Exception();
			else
				return CommonEnum.SUCCESS;
    	}catch(Exception e) {
    		e.printStackTrace();
    	}
    	return CommonEnum.FAILED;
	}
	public List<PaymentMethod> getPaymentMethod() {
		// TODO Auto-generated method stub
		return paymentLogService.getPaymentMethodList();
	}
}
