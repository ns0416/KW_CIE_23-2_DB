package com.bikeseoul.bikeseoul_kw.dao;

import com.bikeseoul.bikeseoul_kw.container.Attachment;
import com.bikeseoul.bikeseoul_kw.container.Board;
import com.bikeseoul.bikeseoul_kw.container.BoardArticle;
import com.bikeseoul.bikeseoul_kw.container.Breakdown;
import com.bikeseoul.bikeseoul_kw.container.Comment;
import com.bikeseoul.bikeseoul_kw.container.Neglect;

import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface BoardArticleDao {
    List<BoardArticle> getBoardArticleList(int board_uid);
    BoardArticle getBoardArticle(int uid);
    Board getBoardInfo(String board_name, int uid);
    int writeArticle(BoardArticle art);
    int writeAttachment(Attachment att);
    int writeComment(Comment cmt);
    List<Attachment> getAttachments(int article_uid);
    Attachment getAttachment(int article_uid, int att_uid);
    List<Comment> getComments(int article_uid);
    Comment getComment(int cmt_uid);
    int deleteAttachment(int uid);
    int deleteComment(int uid);
    int updateArticle(BoardArticle art);
    int updateComment(Comment cmt);
    int writeBreakdown(Breakdown bd);
    int updateBreakdown(Breakdown bd);
    int deleteBreakdown(int uid, int member_uid);
    int deleteArticle(int uid);
    int writeNeglect(Neglect ngt);
    int updateNeglect(Neglect ngt);
    int deleteNeglect(int uid);
}
