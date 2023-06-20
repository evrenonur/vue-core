import knowledgebase from "@/data/knowledgebase.json"

const state = {
    featured : knowledgebase.featured,
    category : knowledgebase.category
  
};

export default {
    namespaced: true,
    state,
}