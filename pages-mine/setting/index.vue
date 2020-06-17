<template>
	<view class="container">
		<van-cell-group><van-cell title="待开发功能" is-link size="large" clickable /></van-cell-group>
		<button class="feedback" open-type="feedback" @feedback="feedback">意见反馈</button>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {
		helpClick() {},
		feedback() {}
	}
};
</script>

<style lang="scss">
.container {
	.feedback {
		position: fixed;
		bottom: 32rpx;
		right: 32rpx;
		left: 32rpx;
		height: 88rpx;
		color: white;
		background-color: #007aff;
	}
}
</style>
