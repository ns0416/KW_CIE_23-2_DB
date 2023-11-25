package com.bikeseoul.bikeseoul_kw.dao;


import com.bikeseoul.bikeseoul_kw.container.Config;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface ConfigDao {
	List<Map<String, Object>> getConfig();
} 
