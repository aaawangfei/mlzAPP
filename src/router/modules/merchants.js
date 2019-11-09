import Vue from 'vue'
import Vant from 'vant'
import 'vant/lib/index.css';
import Router from 'vue-router'
Vue.use(Vant);
Vue.use(Router)
export default [
	 {
	  path: '/Aboutus',
	  name: 'Aboutus',
	  component: () => import('@/components/merchants/Aboutus')
	},
	{
	  path: '/goods',
	  name: 'goods',
	  component: () => import('@/components/merchants/goods')
	},
	{
	  path: '/goodsclass',
	  name: 'goodsclass',
	  component: () => import('@/components/merchants/goodsclass')
	},
	{
	  path: '/information',
	  name: 'information',
	  component: () => import('@/components/merchants/information')
	},
	{
	  path: '/Logiction',
	  name: 'Logiction',
	  component: () => import('@/components/merchants/Logiction')
	},
	{
	  path: '/merchants',
	  name: 'merchants',
	  component: () => import('@/components/merchants/merchants')
	},
	{
	  path: '/notifications',
	  name: 'notifications',
	  component: () => import('@/components/merchants/notifications')
	},
	{
	  path: '/search',
	  name: 'search',
	  component: () => import('@/components/merchants/search')
	}
]