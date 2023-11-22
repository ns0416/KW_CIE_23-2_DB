package com.bikeseoul.bikeseoul_kw.dao;


import com.bikeseoul.bikeseoul_kw.container.Config;

import java.util.List;
import java.util.Map;

public interface ConfigDao {
	List<Map<String, Object>> getConfig();
} 
