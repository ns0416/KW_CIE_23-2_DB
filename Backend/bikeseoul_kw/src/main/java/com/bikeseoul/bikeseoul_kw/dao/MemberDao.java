package com.bikeseoul.bikeseoul_kw.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.bikeseoul.bikeseoul_kw.containter.Member;


@Mapper
public interface MemberDao {
	Member getMemberInfo(int uid, String id, String email);
	List<Member> getMemberInfoList(int p_start, int p_end, String query_type, String query);
	int updateMemberInfo(Member user);
	int registerMemberInfo(Member user);
	int getMemberInfoCount(int type, String value);
	int getMemberCount(int type, String value, int user_uid);
	Member findID(Member user);
}
