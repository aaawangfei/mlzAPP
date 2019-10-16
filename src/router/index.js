import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import cart from '@/components/cart'
import contact from '@/components/contact'
import apps from '@/components/apps'
import orders from '@/components/orders'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
<<<<<<< HEAD
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
=======
      component: () => import('@/components/home'),
    },
		{
		  path: '/cart',
		  name: 'cart',
		  component: () => import('@/components/cart'),
		},
		{
		  path: '/contact',
		  name: 'contact',
		  component: () => import('@/components/contact'),
		},
		{
		  path: '/apps',
		  name: 'apps',
		  component: () => import('@/components/apps'),
		},
		{
		  path: '/orders',
		  name: 'orders',
		  component: () => import('@/components/orders'),
		}
>>>>>>> a22b84ef7c3ca540b18b0565c1fdcb8b9f1460d4
  ]
})
