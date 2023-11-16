package com.bikeseoul.bikeseoul_kw.containter;

import java.util.HashMap;

public class Config{
	private HashMap<String, HashMap<String, String>> data = new HashMap();
	
	public void add(String group_code, String item_code, String value) {
		HashMap<String, String> map = null;
		if(!data.containsKey(group_code)) {
			data.put(group_code, new HashMap<String, String>());
		}
		map = data.get(group_code);
		map.put(item_code, value);
		data.put(group_code, map);
	}
	public String get(String group_code, String item_code) {
		if(!data.containsKey(group_code) || !data.get(group_code).containsKey(item_code))
			return null;
		return data.get(group_code).get(item_code);
	}
}
