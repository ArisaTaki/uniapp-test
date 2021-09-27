<template>
	<view>
		<text>This is the chart online</text>
		
		<!-- 聊天列表 -->
		
		<!-- 聊天输入 -->
		<input type="text" value="" placeholder="なにおあなた様たべましか"/>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 保存消息
				chatList: [{
					isMe: false,
					type: 'txt',
					content: 'こにちわ',
					　　　
				}]
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
	
</style>
