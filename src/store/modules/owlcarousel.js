import owlcarousel from "../../data/owlcarousel"

const state = {
    items : owlcarousel.items,
    item : owlcarousel.item
};

export default {
    namespaced: true,
    state,
}