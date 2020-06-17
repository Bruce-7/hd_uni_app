<template>
	<view class="container">
		<block v-for="(chest, index) in chests" :key="chest.index">
			<view class="chest">
				<image class="chest-image" v-if="chest.name === 'Silver Chest'" src="../../static/chest/silver-chest.png" mode=""></image>
				<image class="chest-image" v-else-if="chest.name === 'Golden Chest'" src="../../static/chest/gold-chest.png" mode=""></image>
				<image class="chest-image" v-else-if="chest.name === 'Giant Chest'" src="../../static/chest/giant-chest.png" mode=""></image>
				<image class="chest-image" v-else-if="chest.name === 'Magical Chest'" src="../../static/chest/magical-chest.png" mode=""></image>
				<image class="chest-image" v-else-if="chest.name === 'Epic Chest'" src="../../static/chest/epic-chest.png" mode=""></image>
				<image class="chest-image" v-else-if="chest.name === 'Mega Lightning Chest'" src="../../static/chest/super-lightning-chest.png" mode=""></image>
				<image class="chest-image" v-else-if="chest.name === 'Legendary Chest'" src="../../static/chest/legendary-chest.png" mode=""></image>
				<text class="chest-text" v-if="chest.index === 0">下一个</text>
				<text class="chest-text" v-else>+{{ chest.index }}</text>
			</view>
		</block>
	</view>
</template>

<script>
export default {
	props: {
		chests: Array
	}
};
</script>

<style lang="scss">
.container {
	background-color: white;
	padding: 12rpx;
	display: flex;
	flex-wrap: wrap;
	.chest {
		display: flex;
		flex-direction: column;
		padding-top: 20rpx;
		padding-left: 20rpx;
		.chest-image {
			width: 118rpx;
			height: 118rpx;
		}

		.chest-text {
			font-size: 24rpx;
			text-align: center;
		}
	}
}
</style>
