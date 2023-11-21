package com.bikeseoul.bikeseoul_kw.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bikeseoul.bikeseoul_kw.container.Member;
import com.bikeseoul.bikeseoul_kw.dao.MemberDao;


@Service
public class MemberService implements MemberDao {

	@Autowired
	private MemberDao memberDao;
	
	@Override
	public Member getMemberInfo(int uid, String id, String email) {
		// TODO Auto-generated method stub
		return memberDao.getMemberInfo(uid, id, email);
	}

	@Override
	public List<Member> getMemberInfoList(int p_start, int p_end, String query_type, String query) {
		// TODO Auto-generated method stub
		return memberDao.getMemberInfoList(p_start, p_end, query_type, query);
	}

	@Override
	public int getMemberCount(int type, String value, int user_uid) {
		// TODO Auto-generated method stub
		return memberDao.getMemberCount(type, value, user_uid);
	}

	@Override
	public int updateMemberInfo(Member user) {
		// TODO Auto-generated method stub
		return memberDao.updateMemberInfo(user);
	}

	@Override
	public int registerMemberInfo(Member user) {
		// TODO Auto-generated method stub
		return memberDao.registerMemberInfo(user);
	}

	@Override
	public Member findID(Member user) {
		// TODO Auto-generated method stub
		return memberDao.findID(user);
	}

	@Override
	public int getMemberInfoCount(int type, String value) {
		// TODO Auto-generated method stub
		return memberDao.getMemberInfoCount(type, value);
	}

}
