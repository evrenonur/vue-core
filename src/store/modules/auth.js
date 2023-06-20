import NetworkManager from "@/core/NetworkManager";
import ApiConstants from "@/core/ApiConstants";

const state = {
    token: localStorage.getItem('token') || null,
    user: {
        email: '',
        password: ''
    },
    name: '',
    email: '',
};

const getters = {
    loggedIn(state) {
        return state.token !== null;
    }
};

const actions = {
    async login({commit}, user) {
        const response = await NetworkManager.post(ApiConstants.LOGIN, user);
        if (response.status === 404 || response.status === 401) {
            return false;
        }
        if (response.status === 200) {
            commit('setToken', response.data.data.token);
            if (!localStorage.getItem('name') || !localStorage.getItem('email')) {
                localStorage.setItem('name', response.data.data.user.name);
                localStorage.setItem('email', response.data.data.user.email);
                localStorage.setItem('id', response.data.data.user.id);
                localStorage.setItem('role', response.data.data.user.role);
            }
            return true;
        }
        return false;

    },

};

const mutations = {
    setToken(state, token) {
        state.token = token;
        localStorage.setItem('token', token);
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}
