// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index.js'


Vue.config.productionTip = false


import '../lib/mui/css/mui.min.css'
// 导入扩展图标样式
import '../lib/mui/css/icons-extra.css'
import moment from 'moment'
// 定义全局的过滤器
Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
  return moment(dataStr).format(pattern)
})

import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'

import '../lib/mui/js/mui.js'



import axios from 'axios'
import {Swipe, SwipeItem} from 'mint-ui'
  Vue.component(Swipe.name,Swipe)
  Vue.component(SwipeItem.name,Swipe)
Vue.prototype.$ajax = axios
axios.defaults.baseURL = '/api'


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
