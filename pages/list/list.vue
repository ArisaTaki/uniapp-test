<template>
	<view>
		<text>通讯录</text>
		<view class="">{{userName}}</view>
		<view class="btn">
			<button type="default" @click="login('ゴノシプ')">登录</button>
			<button type="default" @click="logout">退出</button>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapActions
	} from 'vuex'
	export default {
		data() {
			return {

			}
		},

		onLoad() {
			// #ifdef H5
			alert('コニチワ')
			// #endif 
		},
		computed: {
			...mapState(['userName'])
		},
		methods: {
			...mapActions(['login', 'logout'])
		}
	}
</script>

<style>

</style>
