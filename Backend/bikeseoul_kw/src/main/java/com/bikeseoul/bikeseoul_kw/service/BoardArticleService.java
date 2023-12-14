package com.bikeseoul.bikeseoul_kw.service;

import com.bikeseoul.bikeseoul_kw.container.Attachment;
import com.bikeseoul.bikeseoul_kw.container.Board;
import com.bikeseoul.bikeseoul_kw.container.BoardArticle;
import com.bikeseoul.bikeseoul_kw.container.Breakdown;
import com.bikeseoul.bikeseoul_kw.container.Comment;
import com.bikeseoul.bikeseoul_kw.container.Neglect;
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
	public Board getBoardInfo(String board_name, int uid) {
		// TODO Auto-generated method stub
		return boardArticleDao.getBoardInfo(board_name, uid);
	}

	@Override
	public List<Board> getBoardList() {
		return boardArticleDao.getBoardList();
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

	@Override
	public int writeBreakdown(Breakdown bd) {
		// TODO Auto-generated method stub
		return boardArticleDao.writeBreakdown(bd);
	}

	@Override
	public int updateBreakdown(Breakdown bd) {
		// TODO Auto-generated method stub
		return boardArticleDao.updateBreakdown(bd);
	}

	@Override
	public int deleteBreakdown(int uid, int member_uid) {
		// TODO Auto-generated method stub
		return boardArticleDao.deleteBreakdown(uid, member_uid);
	}

	@Override
	public int deleteArticle(int uid) {
		// TODO Auto-generated method stub
		return boardArticleDao.deleteArticle(uid);
	}

	@Override
	public int writeNeglect(Neglect ngt) {
		// TODO Auto-generated method stub
		return boardArticleDao.writeNeglect(ngt);
	}

	@Override
	public int updateNeglect(Neglect ngt) {
		// TODO Auto-generated method stub
		return boardArticleDao.updateNeglect(ngt);
	}

	@Override
	public int deleteNeglect(int uid) {
		// TODO Auto-generated method stub
		return boardArticleDao.deleteNeglect(uid);
	}
}
