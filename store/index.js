import Vue from "vue"
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		userName: uni.getStorageSync('userName') ? uni.getStorageSync('userName') : 'ノゴイできましせ'
	},
	mutations: {
		MLOGIN(state, userName) {
			uni.setStorageSync('userName', userName)
			state.userName = userName
		},
		MLOGOUT(state) {
			uni.clearStorageSync()
			state.userName = 'オテウサ'
		}
	},
	actions: {
		login(context, userName) {
			context.commit('MLOGIN', userName)
		},
		logout(context) {
			context.commit('MLOGOUT')
		}
	}
})

export default store
