package com.bikeseoul.bikeseoul_kw.container;

public class Pair<K, V> {
	private K first;
	private V second;
	
	public void set(K first, V second) {
		this.first = first;
		this.second = second;
	}
	public K getFirst() {return this.first;}
	public V getSecond() {return this.second;}
	

}
