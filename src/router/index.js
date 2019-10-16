import Vue from 'vue'
import Router from 'vue-router'
import myRouter from './modules/my'
import loginRouter from './modules/login'
Vue.use(Router)
export const homeRouter=[
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
  ];
let routes = new Set([...homeRouter,...myRouter,...loginRouter]);
export default new Router({
  routes: routes
})
