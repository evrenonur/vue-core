import ecommerce from "../../data/ecommerce.json"

const state = {
    invoice : ecommerce.invoice,
    whislist :  ecommerce.whislist,
    pricing :ecommerce.pricing,
simplePricing:ecommerce.simplePricing
};

export default {
    namespaced: true,
    state,
}
