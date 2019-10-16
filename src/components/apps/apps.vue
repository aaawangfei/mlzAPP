<template>
  <van-tabbar active-color="#07c160" inactive-color="#000" v-model="active" route>
  <van-tabbar-item replace to="/" icon="home-o">首页</van-tabbar-item>
  <van-tabbar-item icon="apps-o">分类</van-tabbar-item>
  <van-tabbar-item replace to="/orders" icon="orders-o">求购</van-tabbar-item>
  <van-tabbar-item replace to="/cart" icon="cart-o">购物车</van-tabbar-item>
	<van-tabbar-item replace to="/contact" icon="contact">我的</van-tabbar-item>
	<router-view />
</van-tabbar>
</template>

<script>
import Vue from 'vue';
import Vant from 'vant';
import { Tabbar, TabbarItem } from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
Vue.use(Tabbar).use(TabbarItem);
export default {
  data() {
    return {
      active: 1
    }
  }
}
</script>


<style scoped>
	
</style>
