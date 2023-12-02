package com.bikeseoul.bikeseoul_kw.service;

import com.bikeseoul.bikeseoul_kw.container.Ranking;
import com.bikeseoul.bikeseoul_kw.dao.RankingDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RankingService implements RankingDao{
    @Autowired
    private RankingDao rankingDao;

    @Override
    public List<Ranking> getWeeklyRankingList(){
        List<Ranking> rankingList = rankingDao.getWeeklyRankingList();
        for (int i = 0; i < rankingList.size(); i++){
            rankingList.get(i).setRank(i + 1);
        }
        return rankingList;
    }

    @Override
    public List<Ranking> getMonthlyRankingList(){
        List<Ranking> rankingList = rankingDao.getMonthlyRankingList();
        for (int i = 0; i < rankingList.size(); i++){
            rankingList.get(i).setRank(i + 1);
        }
        return rankingList;
    }

	@Override
	public int insertRankingWeekly() {
		// TODO Auto-generated method stub
		return rankingDao.insertRankingWeekly();
	}

	@Override
	public int insertRankingMonthly() {
		// TODO Auto-generated method stub
		return rankingDao.insertRankingMonthly();
	}

	@Override
	public int truncateRankingWeekly() {
		// TODO Auto-generated method stub
		return rankingDao.truncateRankingWeekly();
	}

	@Override
	public int truncateRankingMonthly() {
		// TODO Auto-generated method stub
		return rankingDao.truncateRankingMonthly();
	}
}
