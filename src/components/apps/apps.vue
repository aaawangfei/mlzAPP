<template>
	<div>
	<div class="nav">
		<span class="leftnav">
			<van-search @click="search" shape="round" placeholder="采煤机配件降价" v-model="value" />
		</span>
		<span class="rightnav">
			<van-icon @click="information" name="chat-o" info="2" />
			</span>
	</div>
	<van-tree-select height="auto" :items="items" :main-active-index.sync="activeIndex">
  <template slot="content">
		<div v-if="activeIndex === 0">
			<p class="appstit">采掘设备配件</p>
			<van-grid :column-num="3" :border="false">
						<van-grid-item to="/windCar">
							<img class="imgsize" src="../../assets/Home/njz.png">
							<div class="small-size">采煤机配件</div>
						</van-grid-item>
						<van-grid-item to="/tadayprogress">
							<img class="imgsize" src="../../assets/Home/cglz.png">
							<div class="small-size">掘进机配件</div>
						</van-grid-item>
						<van-grid-item to="/garageindex">
							<img class="imgsize" src="../../assets/Home/cl.png">
							<div class="small-size">连载机配件</div>
						</van-grid-item>
						<van-grid-item to="/myTravil">
							<img class="imgsize" src="../../assets/Home/njz.png">
							<div class="small-size">采煤机配件</div>
						</van-grid-item>
			      <van-grid-item to="/garageindex">
			      	<img class="imgsize" src="../../assets/Home/cglz.png">
			      	<div class="small-size">掘瞄机配件</div>
			      </van-grid-item>
			      <van-grid-item to="/myTravil">
			      	<img class="imgsize" src="../../assets/Home/cl.png">
			      	<div class="small-size">二手区</div>
			      </van-grid-item>
					</van-grid>
						<p class="appstit">运输设备配件</p>
					<van-grid :column-num="3" :border="false">
								<van-grid-item to="/windCar">
									<img class="imgsize" src="../../assets/Home/njz.png">
									<div class="small-size">采煤机配件</div>
								</van-grid-item>
								<van-grid-item to="/tadayprogress">
									<img class="imgsize" src="../../assets/Home/cglz.png">
									<div class="small-size">掘进机配件</div>
								</van-grid-item>
								<van-grid-item to="/garageindex">
									<img class="imgsize" src="../../assets/Home/cl.png">
									<div class="small-size">连载机配件</div>
								</van-grid-item>
							</van-grid>
		</div>
      
		<div v-if="activeIndex === 1">
			   
		</div>
		<div v-if="activeIndex === 2">
			 
		</div>
		<div v-if="activeIndex === 3">
			
		</div>	  
		<div v-if="activeIndex === 4">
		
		</div>
		<div v-if="activeIndex === 5">
			
		</div>
		<div v-if="activeIndex === 6">
			
		</div>
  </template>
</van-tree-select>
  <van-tabbar active-color="#E33B3E" inactive-color="#000" v-model="active">
  <van-tabbar-item replace to="/" icon="home-o">首页</van-tabbar-item>
  <van-tabbar-item icon="apps-o">分类</van-tabbar-item>
  <van-tabbar-item replace to="/orders" icon="orders-o">求购</van-tabbar-item>
  <van-tabbar-item replace to="/cart" icon="cart-o">购物车</van-tabbar-item>
	<van-tabbar-item replace to="/mineIndex" icon="contact">我的</van-tabbar-item>
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
      active: 1,
			value:'',
			activeIndex: 0,
      items: [
			  { text: '推荐分类' },
			  { text: '合作商家' },
			  { text: '矿用配件' },
			  { text: '大型部件' },
			  { text: '矿用设备' },
			  { text: '矿用材料' },
			  { text: '工业品MRO' },
			 ]
    }
  },
  methods: {
  	search() {
  	  this.$router.push({
  		    path: '/search'
  	 })
  	},
	information() {
	  this.$router.push({
		    path: '/information'
	 })
	}
  }
}
</script>
<style scoped>
	.nav{
		overflow: hidden;
		z-index: 1;
		position: relative;
	}
	.leftnav,.rightnav{
		margin-top: 10px;
	}
	.leftnav{
		float: left;
		margin-left: 10px;
		margin-top: 0px;
		width: 80%;
	}
	.rightnav{
		float: right;
		margin-right: 10px;
		margin-top: 25px;
		width: 10%;
	}
	.imgsize{
		width: 60px;
		height: 60px; 
		margin-bottom: 6px;
	}
	.appstit{
		text-align: left;
		margin-top: 11px;
		margin-left: 10px;
		color: #333333;
		font-weight: 450;
		margin-bottom: 0px;
	}
	.van-search{
		padding: 15px 6px;
	}
	.small-size{
		color: #666666;
	}
</style>
