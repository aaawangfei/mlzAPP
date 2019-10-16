import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/mineIndex',
      name: 'mineIndex',

      component: () => import('../components/mine/mineIndex')
    },
    {
      path: '/accountSet',
      name: 'accountSet',

      component: () => import('../components/mine/accountSet')
    }
  ]
})
