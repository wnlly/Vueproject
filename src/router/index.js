import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/home/index.vue'
import gouwuche from '../components/home/gouwuche.vue'
import search from '../components/home/search.vue'
import member from '../components/home/member.vue'
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
    }
  ]
})
