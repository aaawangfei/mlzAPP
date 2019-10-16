import Vue from 'vue'
import Vant from 'vant'
import 'vant/lib/index.css';
import Router from 'vue-router'
Vue.use(Vant);
Vue.use(Router)
export default [
	 {
	  path: '/mineIndex',
	  name: 'mineIndex',
	  component: () => import('@/components/mine/mineIndex')
	},
	{
	  path: '/accountSet',
	  name: 'accountSet',
	  component: () => import('@/components/mine/accountSet') 
	}
]