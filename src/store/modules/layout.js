import Layout from '../../data/config.json';

const state = {
	layout: Layout,
	sidebarType: localStorage.getItem('SidebarType') || 'default',
	sidebar:'default',
	boxlayout: true
};


const getters = {

};

const mutations = {
	set: (state) => {
		document.body.className = state.layout.color.mix_layout;
		document.body.setAttribute('main-theme-layout', state.layout.settings.layout_type);
		document.getElementsByTagName('html')[0].setAttribute('dir', state.layout.settings.layout_type);
		var primaryColor = localStorage.getItem('primary_color') || state.layout.color.primary_color;
		var secondaryColor = localStorage.getItem('secondary_color') || state.layout.color.secondary_color;
		var layoutVersion = localStorage.getItem('mode') || 'light-only';
		if (primaryColor || secondaryColor) {
			addStyle(primaryColor, secondaryColor);
			if (layoutVersion)
				console.log(layoutVersion);
				document.body.className = layoutVersion;
		}
	},
	setLayout: (state, payload) => {
		document.body.className = payload;
	},
	setCustomizeSidebarType: (state, payload) => {
		state.sidebar = payload.type
		localStorage.setItem('SidebarType', payload.layout);
	},
	setColorScheme: (state, payload) => {
		setColor(state, payload);
		state.primaryColor = payload.primary;
		state.secondaryColor = payload.secondary;
		state.layout.color.layout_version = 'light';
		localStorage.setItem('layoutVersion', state.layout.color.layout_version);
	},
	setColorDarkScheme: (state, payload) => {
		setColor(state, payload);
		state.layout.color.layout_version = 'dark-only';
		localStorage.setItem('layoutVersion', state.layout.color.layout_version);
	},
	setLayoutType: (state, payload) => {

		document.body.setAttribute('class', payload);
		document.body.setAttribute('main-theme-layout', payload);

		state.layout.settings.layout_type = payload;
		document.getElementsByTagName('html')[0].setAttribute('dir', payload);
	},

};


const actions = {
	set: (context) => {
		context.commit('set');
	},
	setLayoutType: (context, payload) => {
		context.commit('setLayoutType', payload);
	},
	setLayout: (context, payload) => {
		let layout = localStorage.getItem('mode') || 'light-only';
		localStorage.setItem('mode', payload);
		context.commit('setLayout', payload);

	},
	setCustomizeSidebarType: (context, payload) => {
		context.commit('setCustomizeSidebarType', payload);
	},
	setColorScheme: (context, payload) => {
		context.commit('setColorScheme', payload);
	},
	setColorDarkScheme: (context, payload) => {
		context.commit('setColorDarkScheme', payload);
	},

};

function addStyle(primary, secondary) {
	document.documentElement.style.setProperty('--theme-deafult', primary);
	document.documentElement.style.setProperty('--theme-secondary', secondary);
}

function setColor(state, color) {
	addStyle(color.primary, color.secondary);
	localStorage.setItem('primary_color', color.primary);
	localStorage.setItem('secondary_color', color.secondary);
	window.location.reload();
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
};
