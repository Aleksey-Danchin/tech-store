import Vue from 'vue'
import Vuex from 'vuex'

import cart from './cart'
import products from './products'

Vue.use(Vuex)

const store = new Vuex.Store({
	modules: { cart, products }
})

export default store