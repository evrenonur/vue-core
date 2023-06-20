import faq from "@/data/faq.json"

const state = {
    featured : faq.featured,
    articles : faq.articles,
    articles1 : faq.articles1,
    articles2 : faq.articles2,
};

export default {
    namespaced: true,
    state,
}
