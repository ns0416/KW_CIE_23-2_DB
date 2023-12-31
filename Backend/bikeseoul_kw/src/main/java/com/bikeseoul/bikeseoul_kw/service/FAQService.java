package com.bikeseoul.bikeseoul_kw.service;

import com.bikeseoul.bikeseoul_kw.container.FAQ;
import com.bikeseoul.bikeseoul_kw.dao.FAQDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class FAQService implements FAQDAO {
    @Autowired
    private FAQDAO faqdao;


    @Override
    public List<FAQ> getFAQList(String faq_name) {
        return faqdao.getFAQList(faq_name);
    }


    @Override
    public List<FAQ> getFAQArticleList(int faq_uid, String title) {
        return faqdao.getFAQArticleList(faq_uid, title);
    }

    @Override
    public FAQ getFAQArticle(int uid) {
        return faqdao.getFAQArticle(uid);
    }
}
