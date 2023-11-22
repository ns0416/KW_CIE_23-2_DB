package com.bikeseoul.bikeseoul_kw.dao;

import com.bikeseoul.bikeseoul_kw.container.Ranking;

import java.util.List;


public interface RankingDao {
    List<Ranking> getWeeklyRankingList();

    List<Ranking> getMonthlyRankingList();
}
