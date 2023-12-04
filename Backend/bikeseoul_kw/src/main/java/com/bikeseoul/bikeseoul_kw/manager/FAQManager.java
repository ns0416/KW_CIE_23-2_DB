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
    public List<FAQ> getFAQList(String faq_name) {
        return faqService.getFAQList(faq_name);
    }
    public List<FAQ> getFAQArticleList(int faq_uid, String title) {
        return faqService.getFAQArticleList(faq_uid, title);
    }

    public FAQ getFAQArticle(int uid) {
        return faqService.getFAQArticle(uid);
    }
}
