package com.bikeseoul.bikeseoul_kw.dao;

import com.bikeseoul.bikeseoul_kw.container.Ranking;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface RankingDao {
    List<Ranking> getWeeklyRankingList();

    List<Ranking> getMonthlyRankingList();
    int insertRankingWeekly();
    int insertRankingMonthly();
    int truncateRankingWeekly();
    int truncateRankingMonthly();
}
