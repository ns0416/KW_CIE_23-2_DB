package com.bikeseoul.bikeseoul_kw.manager;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.bikeseoul.bikeseoul_kw.container.Config;
import com.bikeseoul.bikeseoul_kw.service.ConfigService;


@Component
public class ConfigManager {

	@Autowired
	private ConfigService configService;
	
	public Config getConfig() {
		List<Map<String, Object>> data = configService.getConfig();
		
		Config config = new Config();
		for(Map<String, Object> item : data) {
			config.add((String)item.get("group_name"), (String)item.get("item_name"), (String)item.get("value"));
		}
		return config;
	}
}
