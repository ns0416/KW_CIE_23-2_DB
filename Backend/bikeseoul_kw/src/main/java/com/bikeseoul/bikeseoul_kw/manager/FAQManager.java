package com.bikeseoul.bikeseoul_kw.manager;

import com.bikeseoul.bikeseoul_kw.container.FAQ;
import com.bikeseoul.bikeseoul_kw.service.FAQService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class FAQManager {

    @Autowired
    private FAQService faqService;

    public List<FAQ> getFAQList() {
        return faqService.getFAQList();
    }

    public List<FAQ> getFAQListByName(String faq_name) {
        return faqService.getFAQListByName(faq_name);
    }

    public List<FAQ> getFAQArticleList(int faq_uid) {
        return faqService.getFAQArticleList(faq_uid);
    }

    public List<FAQ> getFAQArticleListByTitle(String title) {
        return faqService.getFAQArticleListByTitle(title);
    }

    public FAQ getFAQArticle(int uid) {
        return faqService.getFAQArticle(uid);
    }
}
