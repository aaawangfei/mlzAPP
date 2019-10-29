import Vue from 'vue'
import Router from 'vue-router'
import myRouter from './modules/my'
import loginRouter from './modules/login'
import orders from './modules/buying'
import merchantsRouter from './modules/merchants'
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
    	  component: () => import('@/components/cart/cart'),
    	},
    	{
    	  path: '/contact',
    	  name: 'contact',
    	  component: () => import('@/components/contact/contact'),
    	},
    	{
    	  path: '/apps',
    	  name: 'apps',
    	  component: () => import('@/components/apps/apps'),
    	},
    	{
    	  path: '/orders',
    	  name: 'orders',
    	  component: () => import('@/components/orders/orders'),
    	},
			{
			  path: '/goodslist',
			  name: 'goodslist',
			  component: () => import('@/components/goodslist'),
			},
			{
			  path: '/goodsdetail',
			  name: 'goodsdetail',
			  component: () => import('@/components/goodsdetail'),
			},
			{
			  path: '/addresslist',
			  name: 'addresslist',
			  component: () => import('@/components/addresslist'),
			},
			{
			  path: '/editaddress',
			  name: 'editaddress',
			  component: () => import('@/components/editaddress'),
			},
			{
			  path: '/sureorder',
			  name: 'sureorder',
			  component: () => import('@/components/sureorder'),
			},
			{
			  path: '/address',
			  name: 'address',
			  component: () => import('@/components/address'),
			}
  ];
let routes = new Set([...homeRouter,...myRouter,...loginRouter,...orders,...merchantsRouter]);
export default new Router({
  routes: routes
})
