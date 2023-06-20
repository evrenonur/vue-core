import order from "../../data/order.json"

const state = {
    orderHistory : order.orderHistory
};

export default {
    namespaced: true,
    state,
}
