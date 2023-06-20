import pagination from "../../data/pagination.json"

const state = {
    alignment : pagination.alignment,
    color : pagination.color,
    size : pagination.size
};

export default {
    namespaced: true,
    state,
}