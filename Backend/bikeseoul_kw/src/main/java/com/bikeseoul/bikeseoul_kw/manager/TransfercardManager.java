package com.bikeseoul.bikeseoul_kw.manager;

import com.bikeseoul.bikeseoul_kw.container.Transfercard;
import com.bikeseoul.bikeseoul_kw.service.TransfercardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class TransfercardManager {
    @Autowired
    private TransfercardService transfercardService;

    public List<Transfercard> getTransfercardList() {
        return transfercardService.getTransfercardList();
    }

    public List<Transfercard> getTransfercardList(int member_uid) {
        return transfercardService.getTransfercardList(member_uid);
    }
}
