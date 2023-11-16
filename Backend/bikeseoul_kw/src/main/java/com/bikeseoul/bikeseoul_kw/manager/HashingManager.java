package com.bikeseoul.bikeseoul_kw.manager;

import java.security.MessageDigest;
import java.util.Base64;
import java.util.Random;

import org.springframework.stereotype.Component;

import java.util.Base64.Encoder;

@Component
public class HashingManager {
	int left = 48;
	int right = 122;
	int length = 16;
	Random random = new Random();
	
	public String HashSHA256(String org) throws Exception
    {
    	  MessageDigest md = MessageDigest.getInstance("SHA-256");
          md.update(org.getBytes());  
          return bytesToHex1(md.digest());

    }
	public static String bytesToHex1(byte[] bytes) {
    	   StringBuilder builder = new StringBuilder();
    	   for (byte b: bytes) {
    	       builder.append(String.format("%02x", b));
    	    }
    	return builder.toString();
	}
	
	public String getHashString() {
		String hash = random.ints(left, right+1).filter(i->(i<=57 || i>=65) && (i<=90 || i>=97)).limit(length).collect(StringBuilder::new, StringBuilder::appendCodePoint,  StringBuilder::append).toString();
		byte[] bytes = hash.getBytes();
		Encoder encoder = Base64.getEncoder();
		byte[] encoded = encoder.encode(bytes);
		return new String(encoded);
	}
}
