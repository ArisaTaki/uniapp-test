import Vue from "vue"
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vue.Store({
	state: {
		useName: 'ノゴイできましせ'
	},
	mutations: {
		MLOGIN(state, userName) {
			state.useName = userName
		},
		MLOGOUT(state) {
			state.userName = 'オテウサ'
		}
	},
	 actions: {
		login(context, userName) {
			context.commit('MLOGIN', userName)
		},
		logout(context, userName) {
			context.commit('MLOGOUT')
		}
	 }
})

export default store