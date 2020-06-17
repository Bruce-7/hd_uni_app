import './utils/mtj-wx-sdk'; // 第一行导入百度小程序统计
import Vue from 'vue'
import App from './App'
import http from './utils/http.js'
import urlConfig from './common/url-config.js'
import toast from './wxcomponents/vant/dist/toast/toast';
import storage from './common/storage.js'


Vue.config.productionTip = false
Vue.prototype.$http = http
Vue.prototype.$urlConfig = urlConfig
Vue.prototype.$toast = toast
Vue.prototype.$storage = storage


if (uni.getSystemInfoSync().platform !== 'devtools') {
	console.log = () => {}
}

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
