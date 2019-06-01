const cartStore = {
	namespaced: true,

	state: {
		list: [
			{ id: 1, count: 1 },
			{ id: 2, count: 2 }
		]
	},

	mutations: {},

	actions: {},

	getters: {
		order (state, getters, rootState) {
			return state.list.map(item => {
				for (const product of rootState.products.list) {
					if (product.id === item.id) {
						return Object.assign({}, item, product)
					}
				}
			})
		}
	}
}

export default cartStore