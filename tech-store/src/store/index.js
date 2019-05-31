import imitationServer from '@/imitationServer'

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	modules: {
		cart: require('./cart').default
	},

	state: {
		date: 0,
		goods: []
	},

	mutations: {
		sort (state, goods) {
			state.goods = goods
		},

		update (state, goods) {
			state.goods = goods
			state.date = Date.now()
		}
	},

	actions: {
		async update () {
			if (Date.now() > this.state.date + 5000) {
				const goods = await imitationServer.getGoods('/goods')

				this.commit('update', goods)
			}
		},

		sort () {
			const goods = this.state.goods.sort(rSort)
			this.commit('sort', goods)
		},

		getGoodById (id) {
			for (const good in this.state.goods) {
				if (good.id === id) {
					return good
				}
			}
		}
	}
})

export default store

function rSort () {
	return Math.random() - Math.random()
}