<template>
  <van-tabbar v-model="active">
  <van-tabbar-item icon="home-o">首页</van-tabbar-item>
  <van-tabbar-item icon="apps-o">分类</van-tabbar-item>
  <van-tabbar-item icon="orders-o">求购</van-tabbar-item>
  <van-tabbar-item icon="cart-o">购物车</van-tabbar-item>
	<van-tabbar-item icon="contact" @click="tomine">我的</van-tabbar-item>
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
      active: 0
    }
  },
  methods:{
    tomine(){
      
    }

  }
}
</script>


<style scoped>

</style>
