package com.bikeseoul.bikeseoul_kw.manager;

import com.bikeseoul.bikeseoul_kw.container.CommonEnum;
import com.bikeseoul.bikeseoul_kw.container.Gift;
import com.bikeseoul.bikeseoul_kw.container.Overdue;
import com.bikeseoul.bikeseoul_kw.container.Pair;
import com.bikeseoul.bikeseoul_kw.container.PaymentLog;
import com.bikeseoul.bikeseoul_kw.container.PaymentMethod;
import com.bikeseoul.bikeseoul_kw.container.Rent;
import com.bikeseoul.bikeseoul_kw.container.Ticket;
import com.bikeseoul.bikeseoul_kw.container.Ticket_detail;
import com.bikeseoul.bikeseoul_kw.container.User;
import com.bikeseoul.bikeseoul_kw.container.payment_status;
import com.bikeseoul.bikeseoul_kw.service.GiftService;
import com.bikeseoul.bikeseoul_kw.service.PaymentLogService;
import com.bikeseoul.bikeseoul_kw.service.RentService;
import com.bikeseoul.bikeseoul_kw.service.TicketService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

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
    
    @Autowired
    private TicketManager ticketManager;
    
    @Autowired
    private RentService rentService;
    
    
    public List<Pair<PaymentLog,PaymentMethod>> getPaymentLogList(int user_uid) {
		List<Pair<PaymentLog,PaymentMethod>> paymentLogList = null;
		List<Map<String, Object>> data = paymentLogService.getPaymentLogList(user_uid);
		if (data == null || data.size() == 0) {
			return null;
		}
		for (Map<String, Object> map : data) {
			PaymentLog pl = new PaymentLog((Integer)map.get("uid"), (Integer)map.get("user_uid"), (Integer)map.get("method_uid"), (Integer)map.get("amount"), (Integer)map.get("ticket_detail_uid"), payment_status.valueOf((String)map.get("status_")), (LocalDateTime)map.get("log_created_date"), (LocalDateTime)map.get("log_updated_date"));
			PaymentMethod pm = new PaymentMethod((Integer)map.get("method_uid"), (String)map.get("name"), (LocalDateTime)map.get("method_created_date"));
			Pair<PaymentLog,PaymentMethod> pair = new Pair();
			pair.set(pl, pm);
			paymentLogList.add(pair);
		}
		return paymentLogList;
    }

    public List<Pair<PaymentLog,PaymentMethod>> getRefundLogList(int user_uid) {
		List<Pair<PaymentLog,PaymentMethod>> paymentLogList = null;
		List<Map<String, Object>> data = paymentLogService.getRefundLogList(user_uid);
		if (data == null || data.size() == 0) {
			return null;
		}
		for (Map<String, Object> map : data) {
			PaymentLog pl = new PaymentLog((Integer)map.get("uid"), (Integer)map.get("user_uid"), (Integer)map.get("method_uid"), (Integer)map.get("amount"), (Integer)map.get("ticket_detail_uid"), payment_status.valueOf((String)map.get("status_")), (LocalDateTime)map.get("log_created_date"), (LocalDateTime)map.get("log_updated_date"));
			PaymentMethod pm = new PaymentMethod((Integer)map.get("method_uid"), (String)map.get("name"), (LocalDateTime)map.get("method_created_date"));
			Pair<PaymentLog,PaymentMethod> pair = new Pair();
			pair.set(pl, pm);
			paymentLogList.add(pair);
		}
		return paymentLogList;
    }
    @Transactional
    public CommonEnum payment(User mem, Integer ticket_uid, Integer payment_method, String gift_email) {
		// TODO Auto-generated method stub
    	try {
    		Ticket ticket = ticketService.getTicketInfo(ticket_uid);
    		Ticket_detail td = null;
    		if(!ticket.isIsvalid())
    			return CommonEnum.NOT_PERMITTED;
    		PaymentMethod pm = paymentLogService.getPaymentMethodInfo(payment_method);
    		if(pm == null)
    			return CommonEnum.NOT_PERMITTED;
    		
    		CommonEnum res =  null;
    		if(gift_email != null) { //send gift
    			User mem_recv = am.getUserInfo(gift_email, true, false);
    			if(mem_recv == null)
    				throw new Exception();
    			Gift gift = new Gift(ticket.getUid(), mem.getUid(), mem_recv.getUid());
    			res = giftService.insertGiftInfo(gift) > 0 ? CommonEnum.SUCCESS : CommonEnum.FAILED;    			
    		}else {
    			td = new Ticket_detail(mem.getUid(), ticket.getUid());
    			res =  ticketService.insertTicketDetail(td) > 0 ? CommonEnum.SUCCESS : CommonEnum.FAILED;
    		}
    		PaymentLog log = new PaymentLog(mem.getUid(), td.getUid(), pm.getUid(),ticket.getCost(), payment_status.paid);
    		CommonEnum pay_res = paymentLogService.insertPaymentLog(log) > 0 ? CommonEnum.SUCCESS : CommonEnum.FAILED;
    		if(pay_res != CommonEnum.SUCCESS)
    			throw new Exception();
    		if(res != CommonEnum.SUCCESS)
    			throw new Exception();
			else
				return CommonEnum.SUCCESS;
    	}catch(DuplicateKeyException e) {
    		e.printStackTrace();
    		return CommonEnum.FAILED;
    	}catch(Exception e) {
    		e.printStackTrace();
    		throw new RuntimeException();
    	}
    	//return CommonEnum.FAILED;
	}
	public List<PaymentMethod> getPaymentMethod() {
		// TODO Auto-generated method stub
		return paymentLogService.getPaymentMethodList();
	}
	@Transactional
	public CommonEnum paymentOverdue(User user, List<Pair<Rent, List<Overdue>>> data, Integer payment_method) {
		// TODO Auto-generated method stub
		try {
			for(Pair<Rent, List<Overdue>> item : data) {
				Pair<Ticket, Ticket_detail> ticket = ticketManager.getTicketDetailInfo(item.getFirst().getTicket_detail_uid());
				CommonEnum res = payment(user, ticket.getFirst().getUid(), payment_method, null);
				if(res != CommonEnum.SUCCESS)
					throw new Exception();
				Overdue update = new Overdue(0, 1);
				CommonEnum overdue_res = rentService.updateOverdue(update) > 0 ? CommonEnum.SUCCESS : CommonEnum.FAILED;
				if(overdue_res == CommonEnum.SUCCESS) {
					return overdue_res;
				}
			}
			return CommonEnum.FAILED;
		}catch(Exception e) {
			e.printStackTrace();
			throw new RuntimeException();
		}
		//return CommonEnum.FAILED;
	}
}
