<template>
	<view class="content-chest">
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
.content-chest {
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
	margin-top: 16rpx;
	.chest {		
		display: flex;
		flex-direction: column;
		margin-left: 16rpx;
		margin-bottom: 16rpx;
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
