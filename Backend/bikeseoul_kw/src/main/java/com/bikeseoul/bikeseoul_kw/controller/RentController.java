package com.bikeseoul.bikeseoul_kw.controller;

import com.bikeseoul.bikeseoul_kw.container.Bike;
import com.bikeseoul.bikeseoul_kw.container.CommonEnum;
import com.bikeseoul.bikeseoul_kw.container.Member;
import com.bikeseoul.bikeseoul_kw.container.Overdue;
import com.bikeseoul.bikeseoul_kw.container.Pair;
import com.bikeseoul.bikeseoul_kw.container.Rent;
import com.bikeseoul.bikeseoul_kw.container.Ticket_detail;
import com.bikeseoul.bikeseoul_kw.container.User;
import com.bikeseoul.bikeseoul_kw.manager.AccountManager;
import com.bikeseoul.bikeseoul_kw.manager.PaymentLogManager;
import com.bikeseoul.bikeseoul_kw.manager.RentManager;
import com.bikeseoul.bikeseoul_kw.manager.TicketManager;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoUnit;
import java.util.HashMap;
import java.util.List;

@RestController
public class RentController {
    @Autowired
    private RentManager rentManager;

    @Autowired
    private AccountManager am;
    
    @Autowired
    private PaymentLogManager paymentLogManager;
    
    @Autowired
    private TicketManager ticketManager;

    DateTimeFormatter dtf_kor = DateTimeFormatter.ofPattern("YYYY년 MM월 dd일 HH:mm:ss");
    DateTimeFormatter dtf_ymd = DateTimeFormatter.ofPattern("YYYY-MM-dd");
    DateTimeFormatter dtf = DateTimeFormatter.ofPattern("YYYY-MM-dd HH:mm:ss");

    @GetMapping("/rest/service/getRentList")
    @ResponseBody
    public String getRentList(HttpServletRequest request, @RequestParam(value = "start_date", required = false) LocalDateTime start_date, @RequestParam(value = "end_date", required = false) LocalDateTime end_date) {
        JsonObject jo = new JsonObject();
        HttpSession hs = request.getSession();
        Member mem = (Member)hs.getAttribute("member");
        if(mem == null) {
            jo.addProperty("result", "failed");
            return jo.toString();
        }
        int member_uid = mem.getUid();
        int weight = mem.getWeight();

        JsonArray ja = new JsonArray();

        try {
            if (start_date == null && end_date == null) {
                // 이번달
                LocalDateTime now = LocalDateTime.now();
                start_date = LocalDateTime.of(now.getYear(), now.getMonth(), 1, 0, 0, 0);
                end_date = LocalDateTime.of(now.getYear(), now.getMonth(), now.getMonth().maxLength(), 23, 59, 59);
            }
            List<Rent> rentList = rentManager.getRentList(member_uid, start_date, end_date);
            int total_distance = 0;
            int total_rent_minutes = 0;
            int calory = 0;
            int carbon_reduction;
            for(Rent rent:rentList) {
                total_distance += rent.getDistance();
                total_rent_minutes += ChronoUnit.MINUTES.between(rent.getStart_date(), rent.getReturn_date());
                JsonObject item = new JsonObject();
                item.addProperty("uid", rent.getUid());
                item.addProperty("member_uid", rent.getMember_uid());
                item.addProperty("bike_uid", rent.getBike_uid());
                item.addProperty("ticket_detail_uid", rent.getTicket_detail_uid());
                item.addProperty("start_date", rent.getStart_date().format(dtf_kor));
                item.addProperty("return_date", rent.getReturn_date().format(dtf_kor));
                item.addProperty("rent_station", rent.getRent_station());
                item.addProperty("return_station", rent.getReturn_station());
                item.addProperty("last_position_lat", rent.getLast_position_lat());
                item.addProperty("last_position_lon", rent.getLast_position_lon());
                item.addProperty("distance", rent.getDistance());
                item.addProperty("updated_date", rent.getCreated_date().format(dtf_kor));
                ja.add(item);
            }
            jo.addProperty("result", "success");
            jo.add("data", ja);
            jo.addProperty("total_distance", total_distance);
            jo.addProperty("total_rent_minutes", total_rent_minutes);
            // 계산식 = 몸무게 * 5.8(METS) * (운동시간(분) / 60) * 1.05
            // 5.8 METS: 보통 자전거(평균 시속 12 ~ 19km/h)
            calory = (int) (weight * 5.8 * (total_rent_minutes / 60) * 1.05);
            jo.addProperty("calory", calory);
            // 탄소저감 =  1kg 당 230g
            carbon_reduction = (int) (total_distance * 0.23);
            jo.addProperty("carbon_reduction", carbon_reduction);
        }catch (Exception e) {
            e.printStackTrace();
            jo.addProperty("result", "failed");
            return jo.toString();
        }
        return jo.toString();
    }
    
    @GetMapping("/rest/service/getOverdueAmount")
    public String getOverdueAmount(HttpServletRequest request) {
    	JsonObject jo = new JsonObject();
        HttpSession hs = request.getSession();
        User user = (User)hs.getAttribute("member");
        List<Pair<Rent, List<Overdue>>> data = rentManager.getOverdueList(user.getUid(), true);
        int amount = 0;
        for(Pair<Rent, List<Overdue>> pair : data) {
        	for(Overdue item : pair.getSecond()) {
        		amount+= item.getOverdue_amount();
        	}
        }
        hs.setAttribute("overdue", data);
        
        jo.addProperty("result", "success");
        jo.addProperty("amount", amount);
        return jo.toString();
    }
    
    @PostMapping("/rest/service/paymentOverdue")
    public String paymentOverdue(HttpServletRequest request, @RequestBody HashMap<String, Object> body) {
    	JsonObject jo = new JsonObject();
        HttpSession hs = request.getSession();
        User user = (User)hs.getAttribute("member");
        List<Pair<Rent, List<Overdue>>> data = (List<Pair<Rent, List<Overdue>>>)hs.getAttribute("overdue");
        Integer payment_method = (Integer)body.get("payment_method"); 
        CommonEnum res = paymentLogManager.paymentOverdue(user, data, payment_method);
        if(res == CommonEnum.SUCCESS)
        	jo.addProperty("result", "success");
        else
        	jo.addProperty("result", "failed");
    	return jo.toString();
    }
    
    @PostMapping("/rest/service/rentBike")
    public String rentBike(HttpServletRequest request, @RequestBody HashMap<String, Object> body) {
    	JsonObject jo = new JsonObject();
        HttpSession hs = request.getSession();
        User user = (User)hs.getAttribute("member");
        String qr = (String)body.get("qr");
        Integer bike_id = 0; // TODO : bike_id from QR
        Ticket_detail td = ticketManager.getActivationTicket(user.getUid());
        Bike bike = rentManager.getBikeInfo(bike_id);
        if(td == null) {
        	jo.addProperty("result", "failed");
        	jo.addProperty("msg", "no_activated_ticket");
        	return jo.toString();
        }
        Rent rent = new Rent(user.getUid(), bike.getBike_id(), td.getUid(), bike.getStation_uid());
        CommonEnum res = rentManager.rentBike(rent);
        if(res == CommonEnum.SUCCESS)
        	jo.addProperty("result", "success");
        else
        	jo.addProperty("result", "failed");
        return jo.toString();
    }
    @PostMapping("/rest/admin/returnBike")
    public String returnBike(HttpServletRequest request, @RequestBody HashMap<String, Object> body) {
    	JsonObject jo = new JsonObject();
        Integer bike_id = (Integer)body.get("bike_id");
        Integer station_id = (Integer)body.get("station_id");
        Rent rent = rentManager.getRentInfo(0, bike_id, 0);
        CommonEnum res = rentManager.returnBike(rent, station_id);
        if(res == CommonEnum.SUCCESS)
        	jo.addProperty("result", "success");
        else
        	jo.addProperty("result", "failed");
        return jo.toString();
    }
    
    @PostMapping("/rest/service/reportCurrentPosition")
    public String reportCurrentPosition(HttpServletRequest request, @RequestBody HashMap<String, Object> body) {
    	JsonObject jo = new JsonObject();
    	HttpSession hs = request.getSession();
    	User user = (User)hs.getAttribute("member");
    	double lat = (double)body.get("lat");
    	double lon = (double)body.get("lon");
    	Ticket_detail td = ticketManager.getActivationTicket(user.getUid());
        Rent rent = rentManager.getRentInfo(0, 0, td.getUid());
        double dist = rent.getDistance()+rentManager.getDistance_arc(rent.getLast_position_lat(), rent.getLast_position_lon(), lat, lon);
        Rent new_rent = new Rent(rent.getUid(), lat, lon, dist);
        CommonEnum res = rentManager.updateRent(new_rent);
        if(res == CommonEnum.SUCCESS)
        	jo.addProperty("result", "success");
        else
        	jo.addProperty("result", "failed");
        return jo.toString();
    }
}