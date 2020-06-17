<template>
	<view class="container">
		<block v-if="user">
			<view class="mine-info">
				<image class="avatar" :src="user.mini_program_avatar_url" mode=""></image>
				<text class="name">{{ user.name }}</text>
			</view>
			<van-cell-group custom-class="setting"><van-cell icon="setting-o" title="设置" is-link size="large" @click="settingClick" /></van-cell-group>
		</block>
		<block v-else><button class="login" open-type="getUserInfo" @getuserinfo="authGetUserInfo">授权登录</button></block>

		<!-- <button class="test" open-type="getUserInfo" @getuserinfo="getuserinfo" withCredentials="true"></button> -->
		<!--这种特殊占位符是必须有的！-->
		<van-toast id="van-toast" />
	</view>
</template>

<script>
export default {
	data() {
		return {
			user: null
		};
	},

	methods: {
		authGetUserInfo() {
			this.$toast.loading({
				duration: 0,
				mask: true,
				message: '登录中...'
			});

			const that = this;
			uni.getSetting({
				success(res) {
					const userInfo = res.authSetting['scope.userInfo'];
					if (userInfo) {
						that.getUserInfo();
					} else {
						uni.authorize({
							scope: 'scope.userInfo',
							success: res => {},
							fail: () => {
								that.$toast('授权失败，请允许授权获取个人基本信息');
							},
							complete: () => {}
						});
					}
				},
				fail: () => {
					that.$toast('授权失败，请允许授权获取个人基本信息');
				}
			});
		},

		getUserInfo() {
			uni.getUserInfo({
				success: res => {
					console.log(res);
					const userInfo = res.userInfo;
					const nickName = userInfo.nickName;
					const avatarUrl = userInfo.avatarUrl;
					const gender = userInfo.gender; //性别 0：未知、1：男、2：女

					// 发送给服务器用户信息
					// #ifdef  MP-QQ
					const provider = 'qq';
					// #endif

					// #ifdef  MP-WEIXIN
					const provider = 'weixin';
					// #endif

					const data = {
						name: nickName,
						mini_program_avatar_url: avatarUrl,
						gender: gender == 1 ? 'male' : 'female',
						provider: provider
					};

					this.login(data);
				},
				fail: () => {
					this.$toast('授权获取个人基本信息失败');
				},
				complete: () => {}
			});
		},

		login(data) {
			uni.login({
				// #ifdef  MP-QQ
				provider: 'qq',
				// #endif

				// #ifdef  MP-WEIXIN
				provider: 'weixin',
				// #endif

				success: res => {
					console.log('code：' + res.code);
					data['code'] = res.code;
					const url = this.$urlConfig.host_url + this.$urlConfig.user_login_path;

					this.$http
						.postRequest(url, data)
						.then(response => {
							console.log(response.results);
							this.user = response;
							uni.setStorage({
								key: this.$storage.k_user,
								data: response
							});
							this.$toast.success('登录成功');
						})
						.catch(error => {
							this.$toast(error.errMsg);
						})
						.finally(() => {});
				},
				fail: res => {
					this.$toast('登录失败');
				},
				complete: () => {}
			});
		},

		settingClick() {
			uni.navigateTo({
				url: '/pages-mine/setting/index'
			});
		}
	},

	onLoad() {
		uni.getStorage({
			key: this.$storage.k_user,
			success: res => {
				this.user = res.data;
			}
		});
	}
};
</script>

<style lang="scss">
.container {
	padding-bottom: 32rpx;

	.mine-info {
		height: 120rpx;
		background-color: white;
		display: flex;
		align-items: center;

		.avatar {
			margin-left: 32rpx;
			width: 64rpx;
			height: 64rpx;
		}
		.name {
			margin-left: 20rpx;
		}
	}

	.setting {
		margin-top: 20rpx;
	}

	.login {
		margin-top: 32rpx;
		margin-left: 32rpx;
		margin-right: 32rpx;
		height: 88rpx;
		color: white;
		background-color: #007aff;
	}
}
</style>
