<template>
	<view class="list-item">
		<view class="item">
			<text class="left-text">{{ title }}</text>
			<text class="right-text">{{ describe }}</text>
		</view>
		<block v-if="showLine">
			<view class="list-line"></view>
		</block>		
	</view>
</template>

<script>
export default {
	props: {
		title: String,
		describe: String,
		showLine: {
			type: Boolean,
			default: true
		}
	}
};
</script>

<style lang="scss">
.list-item {
	height: 81rpx;
	.item {
		display: flex;
		justify-content: space-between;
		align-items: center;		
		height: 80rpx;
		.left-text {
			font-size: 30rpx;
			padding-left: 16rpx;
			text-align: left;
		}
		.right-text {
			color: #666666;
			font-size: 28rpx;
			padding-right: 16rpx;
			text-align: right;
		}
	}
	.list-line {
		background-color: #E5E5E5;
		width: 94%;
		margin-left: 3%;
		height: 1rpx;
	}
}
</style>
