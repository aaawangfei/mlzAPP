<template>

  <div>
    <img  @click="showSelectPlat" src="https://img.yzcdn.cn/vant/cat.jpeg" style="width: 3rem;height: 3rem;position: fixed;bottom: 4rem;right: 0.5rem;z-index: 9999;" />
    <van-popup round v-model="show" :style="{height: '177px',width: '75%'}">
      <div style="display:flex;flex-wrap: nowrap;justify-content:space-around;align-items:center;height: 100%;">
        <div @click="showRent" style="display:flex;flex-direction:column;">
          <img src="https://img.yzcdn.cn/vant/cat.jpeg" alt="" style="width:72px ;height: 72px ;">
          <p>求租</p>
        </div >
        <div  @click="showShopVC" style="display:flex;flex-direction:column;">
          <img src="https://img.yzcdn.cn/vant/cat.jpeg" alt="" style="width:72px ;height: 72px ;">
          <p>求购</p>
        </div>
      </div>
    </van-popup>
    <van-tabs v-model="segementIndex" animated title-active-color="#ee0a24" :swipeable="true" style="width:100%;">
     

      <van-tab title="求租">
          <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
          >
            <van-cell
              v-for="item in leftList"
              :key="item"
              title="item"
              @click="cellClick(item)">
            <template slot="title">
              <div style="display: flex ;">
                    <van-image
                    width="36%"
                    height="96"
                    src="https://img.yzcdn.cn/vant/cat.jpeg"/>
                    <div class="cell-text" style="width:64%;">
                          <p >双滚筒电牵采煤机型号BYasdasdasdasdasdas</p>
                          <p >7839一台</p>
                          <p >神南产业发展公司</p>
                          <div style="display: inline;">
                            <p class="cell-p" style="float:left ;">王先生</p>
                            <p  style="float: right ;text-align:left;">3天前</p>
                          </div>
                          
                        </div>
                </div>
             
            </template>
            </van-cell>
          </van-list>
      </van-tab>
      <van-tab title="求购">
         <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
          >
            <van-cell
              v-for="item in rightList"
              :key="item"
              title="item"
              @click="cellClick(item)">
            <template slot="title">
              <div style="display: flex ;">
                    <van-image
                    width="36%"
                    height="96"
                    src="https://img.yzcdn.cn/vant/cat.jpeg"/>
                    <div class="cell-text" style="width:64%;">
                          <p >双滚筒电牵采煤机型号BYasdasdasdasdasdas</p>
                          <p >7839一台</p>
                          <p >神南产业发展公司</p>
                          <div style="display: inline;">
                            <p class="cell-p" style="float:left ;">王先生</p>
                            <p  style="float: right ;text-align:left;">3天前</p>
                          </div>
                          
                        </div>
                </div>
             
            </template>
            </van-cell>
          </van-list>
      </van-tab>

   
    </van-tabs>
    <van-tabbar active-color="#E33B3E" inactive-color="#000" v-model="active">
    <van-tabbar-item replace to="/" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item replace to="/apps" icon="apps-o">分类</van-tabbar-item>
    <van-tabbar-item icon="orders-o">求购</van-tabbar-item>
    <van-tabbar-item replace to="/cart" icon="cart-o">购物车</van-tabbar-item>
    <van-tabbar-item replace to="/contact" icon="contact">我的</van-tabbar-item>
	  <router-view />
    </van-tabbar>
  </div>

  
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
      active: 2,
      show:false ,
      segementIndex: 0,
      leftList:["","","","","","","","","","","","","","","","","","","","","","","",""],
      rightList:["","","","","","","","","","","","","","","","","","","","","","","",""]
    }
  },
  methods: {
    showSelectPlat() {
      console.log('------->');
      this.show = true ;
    },
    showShopVC() {

    },
    showRent() {

    },
    cellClick(item) {
      this.$router.push('shopDetail')
    }
  }
}
</script>


<style scoped>
p {
  margin: 0px 0px ;
  white-space:nowrap;overflow:hidden;text-overflow:ellipsis;
}
	.cell-text {
    margin: 0px 0px 0px 0px;
    text-align:left ;
    /* width:100% ; */
    padding-left: 8px ;
    
  }
</style>
