import blog from "@/data/blog.json"

const state = {
    details : blog.details,
    single: blog.single
};

export default {
    namespaced: true,
    state,
}
