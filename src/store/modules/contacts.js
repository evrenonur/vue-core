import contacts from "../../data/contacts.json"

const state = {
	personal : contacts.personal,
	organization: contacts.organization,
	selectedContact:{
		"id":"1",
		"image":"user/2.png",
		"name2":"Barnes",
		"name1":"Bucky",
		"active":"active show",
		"email":"barnes@gmail.com",
		"gender":"Male",
		"day":"18",
		"month":" May",
		"year":"1994",
		"personality":"Cool",
		"city":"moline acres",
		"mobileno":"+0 1800 76855",
		"website":"www.test.com",
		"interest":"photography"
	}
   
};


const getters = {

};


const mutations = {
	active: (state, payload) =>{
		state.personal.find( personal => {
			if(personal.id === payload) {
				personal.active = 'active';
			}
		});
	},
	SET_CONTACT(state,payload){
		state.selectedContact = payload
	},

};


const actions = {
    active: (context, payload) => {
        context.commit('active',payload);
     },
	setSelectedContact({commit},payload){
		commit('SET_CONTACT',payload)
	},

	
};



export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
};
