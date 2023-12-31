package com.bikeseoul.bikeseoul_kw.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.bikeseoul.bikeseoul_kw.interceptor.AdminInterceptor;
import com.bikeseoul.bikeseoul_kw.interceptor.MemberInterceptor;


@Configuration
public class WebMvcConfig implements WebMvcConfigurer {
	@Override
	public void addInterceptors(InterceptorRegistry registry) {
		// TODO Auto-generated method stub
		WebMvcConfigurer.super.addInterceptors(registry);
		registry.addInterceptor(new AdminInterceptor()).addPathPatterns("/rest/admin/**").excludePathPatterns("/rest/admin/login", "/rest/admin/logout");
		registry.addInterceptor(new MemberInterceptor()).addPathPatterns("/rest/service/**");
	}
}
