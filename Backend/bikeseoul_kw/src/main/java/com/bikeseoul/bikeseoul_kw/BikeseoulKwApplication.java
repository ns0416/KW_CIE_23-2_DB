package com.bikeseoul.bikeseoul_kw;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@EnableScheduling
@SpringBootApplication
public class BikeseoulKwApplication {

	public static void main(String[] args) {
		SpringApplication.run(BikeseoulKwApplication.class, args);
	}

}
