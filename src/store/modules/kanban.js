import kanban from "@/data/kanban.json"

const state = {
    default : kanban.default,
    custom : kanban.custom,
    api : kanban.api
};

export default {
    namespaced: true,
    state,
}
