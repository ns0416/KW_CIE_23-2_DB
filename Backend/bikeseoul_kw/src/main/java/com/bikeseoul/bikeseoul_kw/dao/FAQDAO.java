package com.bikeseoul.bikeseoul_kw.dao;

import com.bikeseoul.bikeseoul_kw.container.FAQ;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface FAQDAO {
    List<FAQ> getFAQList();
    List<FAQ> getFAQListByName(String faq_name);
    List<FAQ> getFAQArticleList(int faq_uid);
    List<FAQ> getFAQArticleListByTitle(String title);
    FAQ getFAQArticle(int uid);
}
