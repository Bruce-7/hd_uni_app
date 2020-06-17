<template>
	<view>
		<view class="card">
			<view class="top">
				<view class="top-info">
					<image class="top-image" src="../../static/icon/description.png" mode=""></image>
					<text class="top-text">{{ title }}</text>
				</view>				
				<view class="top-line"></view>
			</view>			
			<block v-if="type == 0"><content-info :info="info"></content-info></block>
			<block v-if="type == 1"><content-chest :chests="chests"></content-chest></block>
		</view>
	</view>
</template>

<script>
import contentInfo from '../../components/card/content-info.vue';
import contentChest from '../../components/card/content-chest.vue';

export default {
	components: {
		contentInfo,
		contentChest
	},
	props: {
		type: {
			type: Number,
			default: 0
		}, // 0玩家信息，1宝箱顺序
		title: {
			type: String,
			default: ''
		},
		chests: {
			type: Array,
			default: []
		},
		info: {
			type: Object,
			default: {}
		}
	}
};
</script>

<style lang="scss">
.card {
	background-color: white;
	border-radius: 8rpx;
	margin: 32rpx;
	.top {
		height: 89rpx;
		.top-info {
			display: flex;
			align-items: center;
			height: 88rpx;
			.top-image {
				width: 60rpx;
				height: 60rpx;
				margin-left: 16rpx;
			}
			.top-text {
				font-size: 32rpx;
				font-weight: bold;
				margin-left: 16rpx;
			}
		}
		.top-line {
			background-color: #999999;
			width: 100%;
			height: 1rpx;
		}
	}
}
</style>
