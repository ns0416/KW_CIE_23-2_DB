package com.bikeseoul.bikeseoul_kw.manager;


import java.io.File;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import com.bikeseoul.bikeseoul_kw.container.*;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.mail.javamail.JavaMailSender;
//import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.bikeseoul.bikeseoul_kw.service.BoardArticleService;
import com.bikeseoul.bikeseoul_kw.service.CouponService;
import com.bikeseoul.bikeseoul_kw.service.MileageService;
import com.bikeseoul.bikeseoul_kw.service.TicketService;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;

@Component
public class BoardManager {
	
	@Autowired
	private ConfigManager configManager;
	@Autowired
	private BoardArticleService boardArticleService;

	public Board getBoardInfo(String board_name, int uid) {
		return boardArticleService.getBoardInfo(board_name, uid);
	}
	public List<Pair<BoardArticle,Pair<String, String>>> getBoardArticleList(int board_uid) {
		List<Pair<BoardArticle,Pair<String, String>>> boardList = new ArrayList<>();
		List<Map<String, Object>> boardArticleListMap = boardArticleService.getBoardArticleList(board_uid);
		for(Map<String, Object> item : boardArticleListMap) {
			BoardArticle article = new BoardArticle((int)item.get("uid"), (int)item.get("board_uid"), (int)item.get("user_uid"), (String)item.get("title"), (String)item.get("content"), (LocalDateTime)item.get("created_date"), (LocalDateTime)item.get("updated_date"));
			Pair<String, String> id_pair = new Pair();
			id_pair.set((String)item.get("board_name"), (String)item.get("id"));
			Pair<BoardArticle,Pair<String, String>> pair = new Pair();
			pair.set(article, id_pair);
			boardList.add(pair);
		}
		return boardList;
	}
	private CommonEnum writeArticle_only(BoardArticle art) throws Exception {
		if(boardArticleService.writeArticle(art) > 0)
			return CommonEnum.SUCCESS;
		throw new Exception();
	}
	
	private CommonEnum writeAttachment(ArrayList<Attachment> atts) throws Exception{
		for(Attachment att : atts) {
			if(boardArticleService.writeAttachment(att) <= 0) 
				throw new Exception();
		}
		return CommonEnum.SUCCESS;
	}
	
	@Transactional
	public CommonEnum writeArticle(BoardArticle art) {
		Config config = configManager.getConfig();
		String cache_dir = config.get("basic", "cache_dir");
		String file_dir = config.get("basic", "file_dir");
		try {
			CommonEnum art_res = writeArticle_only(art);
			CommonEnum att_res = null;
			if(art.getAttachments() != null) {
				for(Attachment att : art.getAttachments()) {
					att.setArticle_uid(art.getUid());
				}
				att_res = writeAttachment(art.getAttachments());
			}
    		if(art.getAttachments() != null) {
        		for(Attachment att : art.getAttachments()) {
        			File file = new File(cache_dir+att.getLoc());
        			File file_mv = new File(file_dir+att.getLoc());
        			if(!file.exists() || file_mv.exists()) {
        				throw new Exception();
        			}
        			if(!file.renameTo(file_mv))
        				throw new Exception();
        		}
        	}else {
        		att_res = CommonEnum.SUCCESS;
        	}
    		if(art instanceof Neglect && art_res == CommonEnum.SUCCESS) {
    			art_res = boardArticleService.writeNeglect((Neglect)art) > 0 ? CommonEnum.SUCCESS : CommonEnum.FAILED;
    		}
			if(art_res == CommonEnum.SUCCESS && att_res == CommonEnum.SUCCESS)
				return CommonEnum.SUCCESS;
			throw new Exception();
		}catch(Exception e) {
			e.printStackTrace();
			if(art.getAttachments() != null) {
				for(Attachment att : art.getAttachments()) {
					File file = new File(cache_dir+att.getLoc());
					File file_mv = new File(file_dir+att.getLoc());
					if(file.exists())
						file.delete();
					if(file_mv.exists())
						file_mv.delete();
				}
			}
			throw new RuntimeException();
			
		}//return CommonEnum.FAILED;
	}
	public CommonEnum writeComment(Comment cmt) {
		if(boardArticleService.writeComment(cmt)>0)
			return CommonEnum.SUCCESS;
		return CommonEnum.FAILED;
	}
	public List<Attachment> getAttachments(int article_uid) {
		return boardArticleService.getAttachments(article_uid);
	}
	public Attachment getAttachment(int article_uid, int att_uid) {
		return boardArticleService.getAttachment(article_uid, att_uid);
	}
	public BoardArticle getBoardArticle(int uid) {
		return boardArticleService.getBoardArticle(uid);
	}
	public List<Board> getBoardList(String query) {
		return boardArticleService.getBoardList(query);
	}
	public CommonEnum deleteAttachment(Attachment att) {
		// TODO Auto-generated method stub
		if(att == null)
			return CommonEnum.FAILED;
		try {
			CommonEnum res = boardArticleService.deleteAttachment(att.getUid()) > 0 ? CommonEnum.SUCCESS : CommonEnum.FAILED;
			Config config = configManager.getConfig();
			File file = new File(config.get("basic", "temp_dir")+att.getLoc());
			file.delete();
			//if(res != CommonEnum.SUCCESS)
				//throw new Exception();
			return res;//CommonEnum.SUCCESS;
		}catch(Exception e) {
			e.printStackTrace();
			return CommonEnum.FAILED;
		}
	}
	@Transactional
	public CommonEnum updateArticle(BoardArticle art, ArrayList<Attachment> del_atts) {
		// TODO Auto-generated method stub
		Config config = configManager.getConfig();
		String cache_dir = config.get("basic", "cache_dir");
		String file_dir = config.get("basic", "file_dir");
		String temp_dir = config.get("basic", "temp_dir");
		try {
			CommonEnum art_res = boardArticleService.updateArticle(art) > 0 ? CommonEnum.SUCCESS : CommonEnum.FAILED;
			CommonEnum att_res = null;
    		if(art.getAttachments() != null) {
    			for(Attachment att : art.getAttachments()) {
					att.setArticle_uid(art.getUid());
				}
    			att_res = writeAttachment(art.getAttachments());
        		for(Attachment att : art.getAttachments()) {
        			File file = new File(cache_dir+att.getLoc());
        			File file_mv = new File(file_dir+att.getLoc());
        			if(!file.exists() || file_mv.exists()) {
        				throw new Exception();
        			}
        			if(!file.renameTo(file_mv))
        				throw new Exception();
        		}
        	}else {
        		att_res = CommonEnum.SUCCESS;
        	}
    		CommonEnum del_res = CommonEnum.FAILED;
    		if(del_atts != null) {
    			for(Attachment att : del_atts) {
        			File file_mv = new File(temp_dir+att.getLoc());
        			File file = new File(file_dir+att.getLoc());
        			if(!file.exists() || file_mv.exists()) {
        				throw new Exception();
        			}
        			if(!file.renameTo(file_mv))
        				throw new Exception();
        		}
    			for(Attachment att : del_atts) {
    				del_res = deleteAttachment(att);
    				if(del_res != CommonEnum.SUCCESS)
    					break;
        		}
    			
    		}else {
    			del_res = CommonEnum.SUCCESS;
    		}
    		if(art instanceof Neglect && art_res == CommonEnum.SUCCESS) {
    			art_res = boardArticleService.updateNeglect((Neglect)art) > 0 ? CommonEnum.SUCCESS : CommonEnum.FAILED;
    		}
			if(art_res == CommonEnum.SUCCESS && att_res == CommonEnum.SUCCESS && del_res== CommonEnum.SUCCESS)
				return CommonEnum.SUCCESS;
			throw new Exception();
		}catch(Exception e) {
			e.printStackTrace();
			if(art.getAttachments() != null) {
				for(Attachment att : art.getAttachments()) {
					File file = new File(cache_dir+att.getLoc());
					File file_mv = new File(file_dir+att.getLoc());
					if(file.exists())
						file.delete();
					if(file_mv.exists())
						file_mv.delete();
				}
			}
			if(del_atts != null) {
				for(Attachment att : del_atts) {
					File file = new File(temp_dir+att.getLoc());
        			File file_mv = new File(file_dir+att.getLoc());
        			if(!file.exists() || file_mv.exists()) {
        				throw new RuntimeException();
        				//return CommonEnum.FAILED;
        			}
        			if(!file.renameTo(file_mv))
        				throw new RuntimeException();
        				//return CommonEnum.FAILED;
				}
			}
			throw new RuntimeException();
			//return CommonEnum.FAILED;
		}
	}
	public CommonEnum updateComment(Comment cmt) {
		// TODO Auto-generated method stub
		return boardArticleService.updateComment(cmt) > 0 ? CommonEnum.SUCCESS : CommonEnum.FAILED;
	}
	public CommonEnum deleteComment(int cmt_uid) {
		// TODO Auto-generated method stub
		return boardArticleService.deleteComment(cmt_uid) > 0 ? CommonEnum.SUCCESS : CommonEnum.FAILED;
	}
	public List<Comment> getComments(int article_uid) {
		// TODO Auto-generated method stub
		return boardArticleService.getComments(article_uid);
	}
	public Comment getComment(int cmt_uid) {
		// TODO Auto-generated method stub
		return boardArticleService.getComment(cmt_uid);
	}
	public String getBoardName(int board_uid) {
		// TODO Auto-generated method stub
		return boardArticleService.getBoardName(board_uid);
	}
	public CommonEnum writeBreakdown(Breakdown art) {
		// TODO Auto-generated method stub
		return boardArticleService.writeBreakdown(art) > 0 ? CommonEnum.SUCCESS : CommonEnum.FAILED;
	}
	public CommonEnum updateBreakdown(Breakdown art_update) {
		// TODO Auto-generated method stub
		return boardArticleService.updateBreakdown(art_update) > 0 ? CommonEnum.SUCCESS : CommonEnum.FAILED;
	}
	@Transactional
	public CommonEnum deleteArticle(BoardArticle art) {
		// TODO Auto-generated method stub
		Config config = configManager.getConfig();
		String file_dir = config.get("basic", "file_dir");
		String temp_dir = config.get("basic", "temp_dir");
		try {
			CommonEnum art_res = boardArticleService.deleteArticle(art.getUid()) > 0 ? CommonEnum.SUCCESS : CommonEnum.FAILED;
    		CommonEnum del_res = CommonEnum.SUCCESS;
    		if(art.getAttachments() != null) {
    			for(Attachment att : art.getAttachments()) {
        			File file_mv = new File(temp_dir+att.getLoc());
        			File file = new File(file_dir+att.getLoc());
        			if(!file.exists() || file_mv.exists()) {
        				throw new Exception();
        			}
        			if(!file.renameTo(file_mv))
        				throw new Exception();
        		}
    			for(Attachment att : art.getAttachments()) {
    				del_res = deleteAttachment(att);
    				if(del_res != CommonEnum.SUCCESS)
    					break;
        		}
    			
    		}
    		if(art instanceof Neglect && art_res == CommonEnum.SUCCESS) {
    			art_res = boardArticleService.deleteNeglect(art.getUid()) > 0 ? CommonEnum.SUCCESS : CommonEnum.FAILED;
    		}
			if(art_res == CommonEnum.SUCCESS && del_res== CommonEnum.SUCCESS)
				return CommonEnum.SUCCESS;
			throw new Exception();
		}catch(Exception e) {
			e.printStackTrace();
			if(art.getAttachments() != null) {
				for(Attachment att : art.getAttachments()) {
					File file = new File(temp_dir+att.getLoc());
        			File file_mv = new File(file_dir+att.getLoc());
        			if(!file.exists() || file_mv.exists()) {
        				return CommonEnum.FAILED;
        			}
        			if(!file.renameTo(file_mv))
        				return CommonEnum.FAILED;
				}
			}
			throw new RuntimeException();
			//return CommonEnum.FAILED;
		}
	}
	public CommonEnum deleteBreakdown(int uid, int member_uid) {
		// TODO Auto-generated method stub
		return boardArticleService.deleteBreakdown(uid, member_uid) > 0 ? CommonEnum.SUCCESS : CommonEnum.FAILED;
	}
	public CommonEnum insertBoard(Board board) {
		// TODO Auto-generated method stub
		return boardArticleService.insertBoard(board) > 0 ? CommonEnum.SUCCESS : CommonEnum.FAILED;
	}
	public CommonEnum updateBoard(Board board) {
		// TODO Auto-generated method stub
		return boardArticleService.updateBoard(board) > 0 ? CommonEnum.SUCCESS : CommonEnum.FAILED;
	}
	public CommonEnum deleteBoard(int uid) {
		// TODO Auto-generated method stub
		return boardArticleService.deleteBoard(uid) > 0 ? CommonEnum.SUCCESS : CommonEnum.FAILED;
	}
}
