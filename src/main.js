import Vue from 'vue'
import App from './App.vue'
import router from './routers/router'
import store from './stores/store'

import iView from 'iview'; // 导入组件库
import 'iview/dist/styles/iview.css'; // 导入样式

import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import axios from 'axios'
import echarts from 'echarts'
import http from './utils/http.js'

Vue.config.productionTip = false
Vue.prototype.axios = axios;
Vue.prototype.$elementMessage = function (msg, t) {
  this.$message({
    message: msg,
    type: t
  })
}

Vue.use(elementUI)
Vue.use(iView)
Vue.use(echarts)

new Vue({
  router,
  store,
  echarts,
  http,
  render: h => h(App)
}).$mount('#app')