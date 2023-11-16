package com.bikeseoul.bikeseoul_kw.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bikeseoul.bikeseoul_kw.dao.ConfigDao;



@Service
public class ConfigService implements ConfigDao{
	
	@Autowired
	private ConfigDao configDao;

	@Override
	public List<Map<String, Object>> getConfig() {
		// TODO Auto-generated method stub
		return configDao.getConfig();
	}


}
