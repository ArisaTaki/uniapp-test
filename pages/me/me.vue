<template>
	<view>
		<text>me</text>
		<text>{{name}}</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name: ''
			}
		},
		
		onLoad() {
			uni.$on('getInfo', (data) => {
				console.log('Me 页面中的全局事件被触发了')
				this.name = data
			})
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
