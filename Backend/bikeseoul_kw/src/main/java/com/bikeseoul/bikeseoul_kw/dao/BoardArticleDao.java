package com.bikeseoul.bikeseoul_kw.dao;

import com.bikeseoul.bikeseoul_kw.container.Attachment;
import com.bikeseoul.bikeseoul_kw.container.Board;
import com.bikeseoul.bikeseoul_kw.container.BoardArticle;
import com.bikeseoul.bikeseoul_kw.container.Comment;

import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface BoardArticleDao {
    List<BoardArticle> getBoardArticleList(int board_uid);
    BoardArticle getBoardArticle(int uid);
    Board getBoardInfo(String board_name);
    int writeArticle(BoardArticle art);
    int writeAttachment(Attachment att);
    int writeComment(Comment cmt);
    List<Attachment> getAttachments(int article_uid);
    Attachment getAttachment(int article_uid, int att_uid);
    List<Comment> getComment(int article_uid);
    int deleteAttachment(int uid);
    int deleteComment(int uid);
    int updateArticle(BoardArticle art);
    int updateComment(Comment cmt);
}
