import ApiConstants from "@/core/ApiConstants";
import NetworkManager from "@/core/NetworkManager";

const state = {
    urunler : []
};

const getters = {
    items: state => state.urunler,
}

const mutations = {
    setItems(state, items) {
        state.urunler = items;

    }
}

const actions = {
    async getItemsProducts({commit}) {
        const response = await NetworkManager.get(ApiConstants.ALL_PRODUCTS)
        if (response.status === 200){
            let items = response.data.data;
            items.forEach(item => {
                item.id = item.id.toString();
                item.title = item.title.toString();
                item.created_at = item.created_at.toString();
                item.updated_at = item.updated_at.toString();
            });
        }else{
            this.urunler = [];
        }
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions

}
