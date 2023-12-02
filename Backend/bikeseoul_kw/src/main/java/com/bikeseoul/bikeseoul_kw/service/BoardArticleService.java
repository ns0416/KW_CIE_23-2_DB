package com.bikeseoul.bikeseoul_kw.service;

import com.bikeseoul.bikeseoul_kw.container.Attachment;
import com.bikeseoul.bikeseoul_kw.container.Board;
import com.bikeseoul.bikeseoul_kw.container.BoardArticle;
import com.bikeseoul.bikeseoul_kw.container.Comment;
import com.bikeseoul.bikeseoul_kw.dao.BoardArticleDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BoardArticleService implements BoardArticleDao {
    @Autowired
    private BoardArticleDao boardArticleDao;

    @Override
    public List<BoardArticle> getBoardArticleList(int board_uid) {
        return boardArticleDao.getBoardArticleList(board_uid);
    }

    @Override
    public BoardArticle getBoardArticle(int uid) {
        return boardArticleDao.getBoardArticle(uid);
    }

	@Override
	public Board getBoardInfo(String board_name) {
		// TODO Auto-generated method stub
		return boardArticleDao.getBoardInfo(board_name);
	}

	@Override
	public int writeArticle(BoardArticle art) {
		// TODO Auto-generated method stub
		return boardArticleDao.writeArticle(art);
	}

	@Override
	public int writeAttachment(Attachment att) {
		// TODO Auto-generated method stub
		return boardArticleDao.writeAttachment(att);
	}

	@Override
	public int writeComment(Comment cmt) {
		// TODO Auto-generated method stub
		return boardArticleDao.writeComment(cmt);
	}

	@Override
	public List<Attachment> getAttachments(int article_uid) {
		// TODO Auto-generated method stub
		return boardArticleDao.getAttachments(article_uid);
	}

	@Override
	public List<Comment> getComments(int article_uid) {
		// TODO Auto-generated method stub
		return boardArticleDao.getComments(article_uid);
	}
	@Override
	public Comment getComment(int cmt_uid) {
		// TODO Auto-generated method stub
		return boardArticleDao.getComment(cmt_uid);
	}

	@Override
	public Attachment getAttachment(int article_uid, int att_uid) {
		// TODO Auto-generated method stub
		return boardArticleDao.getAttachment(article_uid, att_uid);
	}

	@Override
	public int deleteAttachment(int uid) {
		// TODO Auto-generated method stub
		return boardArticleDao.deleteAttachment(uid);
	}

	@Override
	public int deleteComment(int uid) {
		// TODO Auto-generated method stub
		return boardArticleDao.deleteComment(uid);
	}

	@Override
	public int updateArticle(BoardArticle art) {
		// TODO Auto-generated method stub
		return boardArticleDao.updateArticle(art);
	}

	@Override
	public int updateComment(Comment cmt) {
		// TODO Auto-generated method stub
		return boardArticleDao.updateComment(cmt);
	}
}
