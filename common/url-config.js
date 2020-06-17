// 开发环境
// const host_url = 'http://127.0.0.1:8000'
const host_url = 'https://api-development.xxx.com' // 替换自己的域名
// 生产环境
// const host_url = 'https://api.xxx.com' // 替换自己的域名

// user相关接口
const user_login_path = '/user/login/'
const user_path = '/user/'

// 获取皇室战争玩家信息接口
const players_all_path = '/players/all/' // 获取所有玩家信息
const players_path = '/players/' // 获取玩家信息
const players_upcomingchests_path = '/players/upcomingchests/' // 获取有关玩家即将到来的宝箱的信息 
const players_battlelog_path = '/players/battlelog/' // 获取玩家最近的战斗列表

export default {
	host_url, // 主机域名 
	user_login_path, // 用户登录
	user_path, // 对用户的查和改
	players_all_path, // 获取所有玩家信息
	players_path, // 获取玩家信息
	players_upcomingchests_path, // 获取玩家即将到来的宝箱的信息
	players_battlelog_path // 获取玩家最近的战斗列表
}
