import social from "../../data/social.json"

const state = {
    friends : social.friends,
    activity : social.activity,
    post: social.post,
    addfriend : social.addfriend
};

export default {
    namespaced: true,
    state,
}
