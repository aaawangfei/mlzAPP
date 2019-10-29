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
	},
  {
    path: '/personaInformation',
    name: 'personaInformation',
    component: () => import('@/components/mine/personaInformation')
  },
  {
    path: '/accountSecurity',
    name: 'accountSecurity',
    component: () => import('@/components/mine/accountSecurity')
  },
  {
    path: '/feedBack',
    name: 'feedBack',
    component: () => import('@/components/mine/feedBack')
  },
  {
    path: '/enterpriseInformation',
    name: 'enterpriseInformation',
    component: () => import('@/components/mine/enterpriseInformation')
  },
  {
    path: '/enterpriseCertification',
    name: 'enterpriseCertification',
    component: () => import('@/components/mine/enterpriseCertification')
  }
  
]
