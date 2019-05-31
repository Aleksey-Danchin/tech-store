import Vuex from 'vuex'

const cartStore = new Vuex.Store({
	namespaced: true,

	state: {
		goods: [
			{
				id: 1,
				count: 1
			}
		]
	},

	mutations: {},

	actions: {},
})

export default cartStore