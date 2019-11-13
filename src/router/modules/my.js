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
  },
  {
    path: '/mineOrder',
    name: 'mineOrder',
    component: () => import('@/components/mineorders/mineOrder')
  },
  {
    path: '/paymentDetails',
    name: 'paymentDetails',
    component: () => import('@/components/mineorders/paymentDetails')
  },
  {
    path: '/shippingDetails',
    name: 'shippingDetails',
    component: () => import('@/components/mineorders/shippingDetails')
  },
  {
    path: '/browseRecord',
    name: 'browseRecord',
    component: () => import('@/components/mineorders/browseRecord')
  },
  {
    path: '/goodsCollection',
    name: 'goodsCollection',
    component: () => import('@/components/mineorders/goodsCollection')
  },
  {
    path: '/DemandRelease',
    name: 'DemandRelease',
    component: () => import('@/components/mineorders/DemandRelease')
  },
  {
    path: '/purchaseOrder',
    name: 'purchaseOrder',
    component: () => import('@/components/mineorders/purchaseOrder')
  },
  {
    path: '/shop',
    name: 'shop',
    component: () => import('@/components/mineorders/shop')
  }


]
