import ribbon from "../../data/ribbon.json"

const state = {
    colored : ribbon.colored,
    ribbon : ribbon.ribbon,
    left : ribbon.left,
    right:ribbon.right,
    verticalleft:ribbon.verticalleft,
    bookmark: ribbon.bookmark,
    verticalright:ribbon.verticalright,
    clip:ribbon.clip
   
};

export default {
    namespaced: true,
    state,
}