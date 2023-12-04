package com.bikeseoul.bikeseoul_kw.service;

import com.bikeseoul.bikeseoul_kw.container.Transfercard;
import com.bikeseoul.bikeseoul_kw.dao.TransfercardDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TransfercardService implements TransfercardDao {
    @Autowired
    private TransfercardDao transfercardDao;
    @Override
    public List<Transfercard> getTransfercardList(int member_uid) {
        return transfercardDao.getTransfercardList(member_uid);
    }
}
