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

	  path: '/applyRefund',
	  name: 'applyRefund',
	  component: () => import('@/components/mine/refund/applyRefund')
	},
	{
	  path: '/logistics',
	  name: 'logistics',
	  component: () => import('@/components/mine/refund/logistics')
	},
	{

	  path: '/applybuy',
	  name: 'applybuy',
	  component: () => import('@/components/orders/buy')
	}

]