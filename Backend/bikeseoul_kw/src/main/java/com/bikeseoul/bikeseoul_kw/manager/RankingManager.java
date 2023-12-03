package com.bikeseoul.bikeseoul_kw.manager;

import com.bikeseoul.bikeseoul_kw.container.Ranking;
import com.bikeseoul.bikeseoul_kw.service.RankingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class RankingManager {
    @Autowired
    private RankingService rankingService;

    public List<Ranking> getWeeklyRankingList(){
        List<Ranking> rankingList = rankingService.getWeeklyRankingList();
        for (int i = 0; i < rankingList.size(); i++){
            rankingList.get(i).setRank(i + 1);
        }
        return rankingList;
    }

    public List<Ranking> getMonthlyRankingList(){
        List<Ranking> rankingList = rankingService.getMonthlyRankingList();
        for (int i = 0; i < rankingList.size(); i++){
            rankingList.get(i).setRank(i + 1);
        }
        return rankingList;
    }
}
