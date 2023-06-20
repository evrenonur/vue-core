import productlist from "../../data/productlist.json"

const state = {
    list : productlist.list
};

export default {
    namespaced: true,
    state,
}