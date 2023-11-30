package com.bikeseoul.bikeseoul_kw.dao;

import com.bikeseoul.bikeseoul_kw.container.BoardArticle;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface BoardArticleDao {
    List<BoardArticle> getBoardArticleList(int board_uid);
    BoardArticle getBoardArticle(int uid);
}
