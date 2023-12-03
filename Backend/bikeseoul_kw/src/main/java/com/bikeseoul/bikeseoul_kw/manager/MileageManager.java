package com.bikeseoul.bikeseoul_kw.manager;

import com.bikeseoul.bikeseoul_kw.container.CommonEnum;
import com.bikeseoul.bikeseoul_kw.container.Mileage;
import com.bikeseoul.bikeseoul_kw.container.Transfercard;
import com.bikeseoul.bikeseoul_kw.service.MileageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class MileageManager {

    @Autowired
    private MileageService mileageService;

    public List<Mileage> getMileageList(int member_uid) {
        return mileageService.getMileageList(member_uid);
    }

    public int getMileageSum(int member_uid) {
        return mileageService.getMileageSum(member_uid);
    }

    public CommonEnum updateTransfercard(Transfercard card) {
        if(mileageService.updateTransfercardInfo(card) > 0)
            return CommonEnum.SUCCESS;
        return CommonEnum.FAILED;
    }
    public CommonEnum deleteTransfercard(int member_uid) {
        if(mileageService.deleteTransfercardInfo(member_uid) > 0)
            return CommonEnum.SUCCESS;
        return CommonEnum.FAILED;
    }
}
