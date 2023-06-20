import support from "../../data/support.json"

const state = {
    items : support.items,
    ticket: support.ticket
};

export default {
    namespaced: true,
    state,
}
