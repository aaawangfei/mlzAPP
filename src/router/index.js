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
  ]
})
