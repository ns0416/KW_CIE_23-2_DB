package com.bikeseoul.bikeseoul_kw.manager;

import com.bikeseoul.bikeseoul_kw.container.Rent;
import com.bikeseoul.bikeseoul_kw.service.RentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.util.List;

@Component
public class RentManager {

    @Autowired
    private RentService rentService;
    public List<Rent> getRentList(int member_uid, LocalDateTime start_date, LocalDateTime end_date) {
        if (member_uid == 0) {
            return null;
        }
        return rentService.getRentList(member_uid, start_date, end_date);
    }
}
