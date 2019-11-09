import Vue from 'vue'
import Vant from 'vant'
import 'vant/lib/index.css';
import Router from 'vue-router'
Vue.use(Vant);
Vue.use(Router)
export default [
	 {
	  path: '/shopDetail',
	  name: 'shopDetail',
	  component: () => import('@/components/orders/shopDetail')
	},
	{
	  path: '/applyRent',
	  name: 'applyRent',
	  component: () => import('@/components/orders/rent')
	},
	{
	  path: '/applybuy',
	  name: 'applybuy',
	  component: () => import('@/components/orders/buy')
	}
]