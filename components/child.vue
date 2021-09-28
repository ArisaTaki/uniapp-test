<template>
	<view>
		<text class="red">This is Child Components</text>
		<text>This is father message: {{msg}}</text>
		<view class="btn">
			<button type="default" @click="sayHiToFather">发送</button>
		</view>
	</view>
</template>

<script>
	export default {
		name: "child",

		props: ['msg'],

		data() {
			return {
				
			};
		},
		
		methods:{
			sayHiToFather () {
				this.$emit('childEvent', 'トカテオ')
				
				uni.$emit('getInfo', 'ジョタイォ')
			}
		}
		
	}
</script>

<style scoped>
	.red {
		color: red;
	}
</style>
