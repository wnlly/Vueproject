import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/home/index.vue'
import gouwuche from '../components/home/gouwuche.vue'
import search from '../components/home/search.vue'
import member from '../components/home/member.vue'

import newsList from '../components/news/newsList.vue'
import newsListDetail from '../components/news/newsListInfor.vue'
Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/home' },
    {
      path: '/home',

      component: index
    }, {
      path: '/gouwche',

      component: gouwuche
    },
    {
      path: '/member',

      component: member
    }, {
      path: '/search',

      component: search
    },
    {
      path: '/news',

      component: newsList
    },
    {
      path:"/newsListdetail/:id",
      component:newsListDetail
    }
  ]
})
