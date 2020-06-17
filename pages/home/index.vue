<template>
	<view class="container">
		<van-search :value="searchValue" maxlength="20" placeholder="请输入玩家标签#XXXXXX" @search="onSearch"></van-search>
		<block v-if="hasSearchResult">
			<van-cell-group title="玩家基本信息">
				<van-cell custom-class="cell" title-class="cell-title" value-class="cell-value" size="large" title="名字" :value="players.name" />
				<van-cell size="large" title="国王塔等级" :value="players.expLevel" />
				<van-cell size="large" title="当前杯数" :value="players.trophies" />
				<van-cell size="large" title="最高杯数" :value="players.bestTrophies" />
				<van-cell size="large" title="总对战次数" :value="players.battleCount" />
				<van-cell size="large" title="胜利次数" :value="players.wins" />
				<van-cell size="large" title="失败次数" :value="players.losses" />
				<van-cell size="large" title="三皇冠次数" :value="players.threeCrownWins" />
				<van-cell size="large" title="总捐献卡牌" :value="players.totalDonations" />
			</van-cell-group>
			<van-cell-group title="宝箱顺序"><chest :chests="upcomingchests" /></van-cell-group>
		</block>
		<block v-else><view class="tip">暂无数据， 请输入玩家标签#XXXXXX尝试</view></block>
		<!--这种特殊占位符是必须有的！-->
		<van-toast id="van-toast" />
	</view>
</template>

<script>
import chest from '../../components/chest/chest.vue';

export default {
	components: {
		chest
	},

	data() {
		return {
			upcomingchests: [], // 宝箱顺序列表
			players: {}, // 玩家信息
			battlelog: [], // 最近战斗列表
			hasSearchResult: false,
			searchValue: null
		};
	},

	methods: {
		onSearch(e) {
			console.log(e);
			if (!e.detail || e.detail.indexOf('#') == -1) {
				this.$toast('玩家标签格式不对');
				return;
			}

			this.$toast.loading({
				duration: 0,
				mask: true,
				message: '搜索中...'
			});

			const url = this.$urlConfig.host_url + this.$urlConfig.players_all_path;
			const data = {
				tag: e.detail
			};

			this.$http
				.getRequest(url, data)
				.then(response => {
					this.hasSearchResult = true;
					this.players = response.players;
					this.upcomingchests = response.upcomingchests.items;
					// this.battlelog = response.battlelog

					uni.setStorage({
						key: this.$storage.k_players,
						data: response.players
					});

					uni.setStorage({
						key: this.$storage.k_upcomingchests,
						data: response.upcomingchests.items
					});

					this.$toast.success('成功');
				})
				.catch(error => {
					this.hasSearchResult = false;
					this.$toast(error.errMsg);
				})
				.finally(() => {});
		}
	},

	onLoad() {
		uni.getStorage({
			key: this.$storage.k_players,
			success: res => {
				this.players = res.data;
				if (!this.hasSearchResult && res.data) {
					this.hasSearchResult = true;
				}
			}
		});

		uni.getStorage({
			key: this.$storage.k_upcomingchests,
			success: res => {
				this.upcomingchests = res.data;
				if (!this.hasSearchResult && res.data) {
					this.hasSearchResult = true;
				}
			}
		});
	}
};
</script>

<style lang="scss">
.container {
	padding-bottom: 32rpx;

	.cell {
		// background-color: red;
		// display: flex;
		// justify-content: space-between;
		// align-items: center;

		.cell-title {
			flex: 1;
		}
		.cell-value {
			flex: none;
		}
	}

	.tip {
		display: flex;
		justify-content: center;
		margin-top: 300rpx;
		padding-left: 32rpx;
		padding-right: 32rpx;
		font-size: 28rpx;
	}
}
</style>
