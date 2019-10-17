import Vue from 'vue'
import Vant from 'vant'
import 'vant/lib/index.css';
import Router from 'vue-router'
Vue.use(Vant);
Vue.use(Router)
export default [
	 {
	   path: '/forpassword',
	   name: 'forpassword',
	   component: () => import('@/components/login/forpassword'),
	 },
	 {
	   path: '/register',
	   name: 'register',
	   component: () => import('@/components/login/register'),
	 },
	 {
	   path: '/Textlogin',
	   name: 'Textlogin',
	   component: () => import('@/components/login/Textlogin'),
	 },
	 {
	   path: '/login',
	   name: 'login',
	   component: () => import('@/components/login/login'),
	 }
]