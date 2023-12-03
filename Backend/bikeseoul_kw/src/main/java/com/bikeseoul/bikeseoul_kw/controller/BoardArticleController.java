package com.bikeseoul.bikeseoul_kw.controller;

import com.bikeseoul.bikeseoul_kw.container.Attachment;
import com.bikeseoul.bikeseoul_kw.container.Board;
import com.bikeseoul.bikeseoul_kw.container.BoardArticle;
import com.bikeseoul.bikeseoul_kw.container.Comment;
import com.bikeseoul.bikeseoul_kw.container.CommonEnum;
import com.bikeseoul.bikeseoul_kw.container.Config;
import com.bikeseoul.bikeseoul_kw.container.Member;
import com.bikeseoul.bikeseoul_kw.container.PaymentLog;
import com.bikeseoul.bikeseoul_kw.manager.BoardManager;
import com.bikeseoul.bikeseoul_kw.manager.ConfigManager;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Random;

@RestController
public class BoardArticleController {
    @Autowired
    private BoardManager boardManager;
    
    @Autowired
    private ConfigManager configManager;
    
    DateTimeFormatter dtf_kor = DateTimeFormatter.ofPattern("YYYY년 MM월 dd일 HH:mm:ss");
    DateTimeFormatter dtf_ymd = DateTimeFormatter.ofPattern("YYYY-MM-dd");
    DateTimeFormatter dtf = DateTimeFormatter.ofPattern("YYYY-MM-dd HH:mm:ss");

    
    @GetMapping("/rest/getBoardArticleList")
    @ResponseBody
    public String getBoardArticleList(@RequestParam("board_uid") int board_uid) {
        JsonObject jo = new JsonObject();
        if (board_uid == 0) {
            jo.addProperty("result", "failed");
            return jo.toString();
        }

        JsonArray ja = new JsonArray();

        try {
            List<BoardArticle> boardArticleList = boardManager.getBoardArticleList(board_uid);
            for (BoardArticle boardArticle : boardArticleList) {
                JsonObject item = new JsonObject();
                item.addProperty("uid", boardArticle.getUid());
                item.addProperty("board_uid", boardArticle.getBoard_uid());
                item.addProperty("user_uid", boardArticle.getUser_uid());
                item.addProperty("title", boardArticle.getTitle());
                item.addProperty("content", boardArticle.getContent());
                item.addProperty("created_date", boardArticle.getCreated_date().format(dtf_kor));
                item.addProperty("updated_date", boardArticle.getUpdated_date().format(dtf_kor));
                ja.add(item);
            }
            jo.addProperty("result", "success");
            jo.add("data", ja);
            return jo.toString();
        } catch (Exception e) {
            jo.addProperty("result", "failed");
            return jo.toString();
        }
    }

    @GetMapping("/rest/getBoardArticle")
    @ResponseBody
    public String getBoardArticle(@RequestParam("uid") int uid) {
        JsonObject jo = new JsonObject();
        if (uid == 0) {
            jo.addProperty("result", "failed");
            return jo.toString();
        }

        try {
            BoardArticle boardArticle = boardManager.getBoardArticle(uid);
			List<Attachment> atts = boardManager.getAttachments(uid);
			List<Comment> cmts = boardManager.getComments(uid);
            JsonObject item = new JsonObject();
            item.addProperty("uid", boardArticle.getUid());
            item.addProperty("board_uid", boardArticle.getBoard_uid());
            item.addProperty("user_uid", boardArticle.getUser_uid());
            item.addProperty("title", boardArticle.getTitle());
            item.addProperty("content", boardArticle.getContent());
            item.addProperty("created_date", boardArticle.getCreated_date().format(dtf_kor));
            item.addProperty("updated_date", boardArticle.getUpdated_date().format(dtf_kor));
			JsonArray att_ja = new JsonArray();
			for(Attachment att : atts) {
				JsonObject att_item = new JsonObject();
				att_item.addProperty("uid", att.getUid());
				att_item.addProperty("file_name", att.getFilename());
				att_item.addProperty("loc", att.getLoc());
				att_item.addProperty("created_date", att.getCreated_date().format(dtf_kor));
				att_ja.add(att_item);
			}
			JsonArray cmt_ja = new JsonArray();
			for(Comment cmt : cmts) {
				JsonObject cmt_item = new JsonObject();
				cmt_item.addProperty("uid", cmt.getUid());
				cmt_item.addProperty("user_uid", cmt.getUser_uid());
				cmt_item.addProperty("content", cmt.getContent());
				cmt_item.addProperty("created_date", cmt.getCreated_date().format(dtf_kor));
				cmt_item.addProperty("updated_date", cmt.getUpdated_date().format(dtf_kor));
				cmt_ja.add(cmt_item);
			}
            jo.addProperty("result", "success");
            jo.add("article", item);
			jo.add("attachments", att_ja);
			jo.add("comments", cmt_ja);
            return jo.toString();
        } catch (Exception e) {
            jo.addProperty("result", "failed");
            return jo.toString();
        }
    }
    @PostMapping(value="/rest/service/uploadAttachment", consumes = {MediaType.APPLICATION_JSON_VALUE, MediaType.MULTIPART_FORM_DATA_VALUE})
    public String uploadAttachment(@RequestBody HashMap<String, Object> body, @RequestPart(required=false) MultipartFile file, HttpServletRequest request) {
    	JsonObject jo = new JsonObject();
    	
    	if(file == null) {
    		jo.addProperty("result", "failed");
    		return jo.toString();
    	}
    	try {
	    	HttpSession hs = request.getSession();
	    	Member mem = (Member)hs.getAttribute("member");
	    	ArrayList<Attachment> att = (ArrayList<Attachment>)hs.getAttribute("attachments");
	    	if(att == null) {
	    		att = new ArrayList();
	    		hs.setAttribute("attachments", att);
	    	}
	    	ByteArrayResource file_resource = new ByteArrayResource(file.getBytes()) {
				@Override
				public String getFilename() {
					return file.getOriginalFilename();
				}
			};
			Random random = new Random();
			random.setSeed(System.currentTimeMillis());
			String filename = System.currentTimeMillis()+random.nextInt(100)+1+"_"+file_resource.getFilename();
			Config config = configManager.getConfig();
			String cache_dir = config.get("basic", "cache_dir");
			
				OutputStream fos = new FileOutputStream(cache_dir+filename);
				fos.write(file_resource.getByteArray());
			
			Attachment att_item = new Attachment(file_resource.getFilename(), filename);
			att.add(att_item);
	    	jo.addProperty("result", "success");
	    	return jo.toString();
    	}catch(FileNotFoundException e) {
			e.printStackTrace();
			jo.addProperty("result", "failed");
			return jo.toString();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			jo.addProperty("result", "failed");
			return jo.toString();
		}
    }
    @PostMapping("/rest/service/writeArticle")
    public String writeArticle(HttpServletRequest request, @RequestBody HashMap<String, Object> body) {
    	JsonObject jo = new JsonObject();
    	HttpSession hs = request.getSession();
    	Member mem = (Member)hs.getAttribute("member");
    	Board brd = boardManager.getBoardInfo((String)body.get("board_name"));
    	if(brd == null) {
    		jo.addProperty("result", "failed");
    		return jo.toString();
    	}
    	BoardArticle art = new BoardArticle(brd.getUid(), mem.getUid(), (String)body.get("title"), (String)body.get("content"));
    	ArrayList<Attachment> atts = (ArrayList<Attachment>)hs.getAttribute("attachments");
    	if(atts != null) {
    		for(Attachment att : atts) {
    			art.addAttachment(att);
    		}
    	}
    	CommonEnum res = boardManager.writeArticle(art);
    	if(res == CommonEnum.SUCCESS) {
    		hs.setAttribute("attachments", null);
    		jo.addProperty("result", "success");
    	}
    	
    	jo.addProperty("result", "failed");
		return jo.toString();
    }
    @GetMapping("/rest/service/setArticleUpdateMode")
    public String setArticleUpdateMode(HttpServletRequest request, @RequestParam String att_uid) {
    	JsonObject jo = new JsonObject();
    	HttpSession hs = request.getSession();
    	Member mem = (Member)hs.getAttribute("member");
    	if(Integer.parseInt(att_uid) == 0) {
    		hs.setAttribute("articleUpdate", null);
    		hs.setAttribute("delete_atts", null);
    		hs.setAttribute("attachments", null);
    		jo.addProperty("result", "success");
        	return jo.toString();
    	}
    		
    	BoardArticle art = boardManager.getBoardArticle(Integer.parseInt(att_uid));
    	if(art.getUser_uid() != mem.getUid()) {
    		jo.addProperty("result", "failed");
    		return jo.toString();
    	}
    	hs.setAttribute("delete_atts", null);
    	hs.setAttribute("attachments", null);
    	hs.setAttribute("articleUpdate", art);
    	jo.addProperty("result", "success");
    	return jo.toString();
    }
    @GetMapping("/rest/service/deleteAttachments")
    public String deleteAttachments(HttpServletRequest request, @RequestParam String att_uid) {
    	JsonObject jo = new JsonObject();
    	HttpSession hs = request.getSession();
    	Member mem = (Member)hs.getAttribute("member");
    	BoardArticle art = (BoardArticle)hs.getAttribute("articleUpdate");
    	if(art == null || art.getUser_uid() != mem.getUid()) {
    		jo.addProperty("result", "failed");
    		return jo.toString();
    	}
    	ArrayList<Attachment> atts = (ArrayList<Attachment>)hs.getAttribute("delete_atts");
    	if(atts == null) {
    		atts = new ArrayList();
    		hs.setAttribute("delete_atts", atts);
    	}
    	Attachment att = boardManager.getAttachment(art.getUid(), Integer.parseInt(att_uid));
    	if(att != null) {
    		atts.add(att);
    		jo.addProperty("result", "success");
    		return jo.toString();
    	}
    	jo.addProperty("result", "failed");
		return jo.toString();
    }
    @GetMapping("/rest/service/deleteComment")
    public String deleteComment(HttpServletRequest request, @RequestParam String cmt_uid) {
    	JsonObject jo = new JsonObject();
    	HttpSession hs = request.getSession();
    	Member mem = (Member)hs.getAttribute("member");
		if(mem == null) {
			jo.addProperty("result", "failed");
			return jo.toString();
		}
    	Comment cmt = boardManager.getComment(Integer.parseInt(cmt_uid));
    	if(cmt == null || cmt.getUser_uid() != mem.getUid()) {
    		jo.addProperty("result", "failed");
    		return jo.toString();
    	}
    		
    	CommonEnum res = boardManager.deleteComment(Integer.parseInt(cmt_uid));
    	if(res == CommonEnum.SUCCESS)
    		jo.addProperty("result", "success");
    	else
    		jo.addProperty("result", "failed");
		return jo.toString();
    }
    @PostMapping("/rest/service/updateArticle")
    public String updateArticle(HttpServletRequest request, @RequestBody HashMap<String, Object> body) {
    	JsonObject jo = new JsonObject();
    	HttpSession hs = request.getSession();
    	Member mem = (Member)hs.getAttribute("member");
    	BoardArticle art = boardManager.getBoardArticle((Integer)body.get("art_uid"));
    	if(art == null || art.getUser_uid() != mem.getUid()) {
    		jo.addProperty("result", "failed");
    		return jo.toString();
    	}
    	BoardArticle art_update = new BoardArticle(art.getUid(), (String)body.get("title"), (String)body.get("content"));
    	ArrayList<Attachment> atts = (ArrayList<Attachment>)hs.getAttribute("attachments");
    	ArrayList<Attachment> del_atts = (ArrayList<Attachment>)hs.getAttribute("delete_atts");
    	if(atts != null) {
    		for(Attachment att : atts) {
    			art.addAttachment(att);
    		}
    	}
    	CommonEnum res = boardManager.updateArticle(art_update, del_atts);
    	if(res == CommonEnum.SUCCESS) {
    		hs.setAttribute("attachments", null);
    		hs.setAttribute("delete_atts", null);
    		jo.addProperty("result", "success");
    	}
    	
    	jo.addProperty("result", "failed");
		return jo.toString();
    }
    @PostMapping("/rest/service/updateComment")
    public String updateComment(HttpServletRequest request, @RequestBody HashMap<String, Object> body) {
    	JsonObject jo = new JsonObject();
    	HttpSession hs = request.getSession();
    	Member mem = (Member)hs.getAttribute("member");
    	BoardArticle art = boardManager.getBoardArticle((Integer)body.get("cmt_uid"));
    	if(art == null) {
    		jo.addProperty("result", "failed");
    		return jo.toString();
    	}
    	Comment cmt = new Comment(art.getUid(), mem.getUid(),(String)body.get("content"));
    	CommonEnum res = boardManager.updateComment(cmt);
    	if(res == CommonEnum.SUCCESS) {
    		jo.addProperty("result", "success");
    	}
    	
    	jo.addProperty("result", "failed");
		return jo.toString();
    }
    @PostMapping("/rest/service/writeComment")
    public String writeComment(HttpServletRequest request, @RequestBody HashMap<String, Object> body) {
    	JsonObject jo = new JsonObject();
    	HttpSession hs = request.getSession();
    	Member mem = (Member)hs.getAttribute("member");
    	BoardArticle art = boardManager.getBoardArticle((Integer)body.get("article_uid"));
    	if(art == null) {
    		jo.addProperty("result", "failed");
    		return jo.toString();
    	}
    	Comment cmt = new Comment(art.getUid(), mem.getUid(), (String)body.get("content"));
    	CommonEnum res = boardManager.writeComment(cmt);
    	if(res == CommonEnum.SUCCESS) {
    		hs.setAttribute("attachments", null);
    		jo.addProperty("result", "success");
    	}
    	
    	jo.addProperty("result", "failed");
		return jo.toString();
    }
}
