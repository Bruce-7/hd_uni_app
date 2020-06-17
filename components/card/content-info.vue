<template>
	<view>
		<block v-if="info">
			<list-item title="名字" :describe="info.name"></list-item>
			<list-item title="国王塔等级" :describe="info.expLevel"></list-item>
			<list-item title="当前杯数" :describe="info.trophies"></list-item>
			<list-item title="最高杯数" :describe="info.bestTrophies"></list-item>
			<list-item title="总对战次数" :describe="info.battleCount"></list-item>
			<list-item title="胜利次数" :describe="info.wins"></list-item>
			<list-item title="失败次数" :describe="info.losses"></list-item>
			<list-item title="三皇冠次数" :describe="info.threeCrownWins"></list-item>
			<list-item title="总捐献卡牌" :describe="info.totalDonations" :showLine="false"></list-item>
		</block>
	</view>
</template>

<script>
import listItem from "../../components/card/list-item.vue";

export default {
	components: {
		listItem
	},
	props: {
		info: Object
	}
};
</script>

<style>
</style>
