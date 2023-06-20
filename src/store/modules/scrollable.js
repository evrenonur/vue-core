import scrollable from "@/data/scrollable.json"

const state = {
    horizontalscroll : scrollable.horizontalscroll,
    alwaysVisible : scrollable.alwaysVisible,
    verticalscroll: scrollable.verticalscroll
   
};

export default {
    namespaced: true,
    state,
}