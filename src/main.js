// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index.js'


Vue.config.productionTip = false


import '../lib/mui/css/mui.min.css'
// 导入扩展图标样式
import '../lib/mui/css/icons-extra.css'


import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'

import '../lib/mui/js/mui.js'



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
