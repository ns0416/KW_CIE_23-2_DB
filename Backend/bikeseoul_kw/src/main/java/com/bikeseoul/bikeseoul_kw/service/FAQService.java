package com.bikeseoul.bikeseoul_kw.service;

import com.bikeseoul.bikeseoul_kw.container.FAQ;
import com.bikeseoul.bikeseoul_kw.dao.FAQDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FAQService implements FAQDAO {
    @Autowired
    private FAQDAO faqdao;

    @Override
    public List<FAQ> getFAQList() {
        return faqdao.getFAQList();
    }

    @Override
    public List<FAQ> getFAQListByName(String faq_name) {
        return faqdao.getFAQListByName(faq_name);
    }

    @Override
    public List<FAQ> getFAQArticleList(int faq_uid) {
        return faqdao.getFAQArticleList(faq_uid);
    }

    @Override
    public List<FAQ> getFAQArticleListByTitle(String title) {
        return faqdao.getFAQArticleListByTitle(title);
    }

    @Override
    public FAQ getFAQArticle(int uid) {
        return faqdao.getFAQArticle(uid);
    }
}
