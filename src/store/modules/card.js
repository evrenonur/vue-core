import card from "../../data/card.json"

const state = {
    creative : card.creative,
    draggable: card.draggable,
    basic :card.basic,
    footer:card.footer,
    cardbody: card.cardbody,
    faq:card.faq
};

export default {
    namespaced: true,
    state,
}