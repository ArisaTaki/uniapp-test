<template>
	<view class="content">
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<view>
			<navigator url="/subpages/careChat/careChat">goTo careChat!</navigator>
			<child :msg="title" @childEvent="sayHi"></child>
		</view>
	</view>
</template>

<script>
	import Child from '@/components/child.vue'
	export default {
		data() {
			return {
				title: 'hello, index'
			}
		},
		
		components:{
			Child
		},
		
		onShow() {
			console.log('index page show')
		},
		onLoad() {
		console.log(getCurrentPages())
		},
		
		onPullDownRefresh() {
			console.log('页面刷新')
		},
		methods: {
			sayHi(options) {
				console.log(options)
				this.title = `child Component ${options} connect to me`
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
