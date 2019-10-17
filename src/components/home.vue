<template>
	<div style="background-color: #F2F2F2;">
		<van-image class="loimg" width="100%" src="https://img.yzcdn.cn/vant/cat.jpeg"/>
		<div class="nav">
			<span class="leftnav">煤亮子商城</span><span class="rightnav">图标</span>
		</div>
	<van-search @click="search" shape="round" placeholder="采煤机配件降价" v-model="value" />
	<van-image width="90%" src="https://img.yzcdn.cn/vant/cat.jpeg"/>
	<van-grid :column-num="4" :border="false">
				<van-grid-item to="/windCar">
					<img class="imgsize" src="../assets/Home/申请搭车.png">
					<div class="small-size">配件区</div>
				</van-grid-item>
				<van-grid-item to="/tadayprogress">
					<img class="imgsize" src="../assets/Home/今日进程.png">
					<div class="small-size">耗材区</div>
				</van-grid-item>
				<van-grid-item to="/garageindex">
					<img class="imgsize" src="../assets/Home/car_home.png">
					<div class="small-size">设备区</div>
				</van-grid-item>
				<van-grid-item to="/myTravil">
					<img class="imgsize" src="../assets/Home/我的行程.png">
					<div class="small-size">二手区</div>
				</van-grid-item>

			</van-grid>
			<div class="hzsj">
			<van-cell :border="false" title="合作商家" is-link value="查看更多" />
			<van-grid :column-num="4" :border="false">
						<van-grid-item to="/windCar">
							<img class="imgsize" src="../assets/Home/申请搭车.png">
							<div class="small-size">天地煤机</div>
						</van-grid-item>
						<van-grid-item to="/tadayprogress">
							<img class="imgsize" src="../assets/Home/今日进程.png">
							<div class="small-size">耗材区</div>
						</van-grid-item>
						<van-grid-item to="/garageindex">
							<img class="imgsize" src="../assets/Home/car_home.png">
							<div class="small-size">设备区</div>
						</van-grid-item>
						<van-grid-item to="/myTravil">
							<img class="imgsize" src="../assets/Home/我的行程.png">
							<div class="small-size">二手区</div>
						</van-grid-item>
			      <van-grid-item to="/windCar">
			      	<img class="imgsize" src="../assets/Home/申请搭车.png">
			      	<div class="small-size">配件区</div>
			      </van-grid-item>
			      <van-grid-item to="/tadayprogress">
			      	<img class="imgsize" src="../assets/Home/今日进程.png">
			      	<div class="small-size">耗材区</div>
			      </van-grid-item>
			      <van-grid-item to="/garageindex">
			      	<img class="imgsize" src="../assets/Home/car_home.png">
			      	<div class="small-size">设备区</div>
			      </van-grid-item>
			      <van-grid-item to="/myTravil">
			      	<img class="imgsize" src="../assets/Home/我的行程.png">
			      	<div class="small-size">二手区</div>
			      </van-grid-item>
					</van-grid>
					</div>
					<div class="hzsj">
					<van-cell :border="false" title="热销二手" is-link value="查看更多" />
					<van-grid :column-num="4" :border="false">
								<van-grid-item to="/windCar">
									<img class="imgsize" src="../assets/Home/申请搭车.png">
									<div class="small-size">配件区</div>
								</van-grid-item>
								<van-grid-item to="/tadayprogress">
									<img class="imgsize" src="../assets/Home/今日进程.png">
									<div class="small-size">耗材区</div>
								</van-grid-item>
								<van-grid-item to="/garageindex">
									<img class="imgsize" src="../assets/Home/car_home.png">
									<div class="small-size">设备区</div>
								</van-grid-item>
								<van-grid-item to="/myTravil">
									<img class="imgsize" src="../assets/Home/我的行程.png">
									<div class="small-size">二手区</div>
								</van-grid-item>
							</van-grid>
							</div>
							<van-tabs @click="onClick" background="#F2F2F2" color="#E33B3E" title-inactive-color="#333333" title-active-color="#E33B3E" line-width="55px">
	<div class="hzsj">
  <van-tab title="推荐产品">
		<van-grid :gutter="10" :column-num="2" :border="false">
					<van-grid-item to="/windCar">
						<div class="hot-rent-item">
                   <img src="../assets/Home/今日进程.png" alt="">
                   <span class="price">导向靶 CN73495</span>
									 <p class="price bor">打3折</p>
                   <van-row gutter="60">
                      <van-col class="cored" span="12">￥3455</van-col>
                      <van-col span="12">图标</van-col>
                     
                   </van-row>
               </div>
					</van-grid-item>
					<van-grid-item to="/windCar" style="padding-right: 0px;">
						<div class="hot-rent-item">
						         <img src="../assets/Home/今日进程.png" alt="">
						         <span class="price">导向靶 CN73495</span>
										 <p class="price bor">打3折</p>
						         <van-row gutter="60">
						            <van-col class="cored" span="12">￥3455</van-col>
						            <van-col span="12">图标</van-col>
						           
						         </van-row>
						     </div>
						</van-grid-item>
					<van-grid-item to="/windCar" style="padding-bottom: 50px;">
						<div class="hot-rent-item">
						         <img src="../assets/Home/今日进程.png" alt="">
						         <span class="price">导向靶 CN73495</span>
										 <p class="price bor">打3折</p>
						         <van-row gutter="60">
						            <van-col class="cored" span="12">￥3455</van-col>
						            <van-col span="12">图标</van-col>
						           
						         </van-row>
						     </div>
						</van-grid-item>
					<van-grid-item to="/windCar" style="padding-bottom: 50px;padding-right: 0px;">
						<div class="hot-rent-item">
						         <img src="../assets/Home/今日进程.png" alt="">
						         <span class="price">导向靶 CN73495</span>
										 <p class="price bor">打3折</p>
						         <van-row gutter="60">
						            <van-col class="cored" span="12">￥3455</van-col>
						            <van-col span="12">图标</van-col>
						           
						         </van-row>
						     </div>
						</van-grid-item>
				</van-grid>
	</van-tab>
	</div>
	<div class="hzsj">
  <van-tab title="上新产品">
		<van-grid :gutter="10" :column-num="2" :border="false">
					<van-grid-item to="/windCar">
						<div class="hot-rent-item">
						         <img src="../assets/Home/今日进程.png" alt="">
						         <span class="price">导向靶 CN73495</span>
										 <p class="price bor">打3折</p>
						         <van-row gutter="60">
						            <van-col class="cored" span="12">￥3455</van-col>
						            <van-col span="12">图标</van-col>
						           
						         </van-row>
						     </div>
					</van-grid-item>
					<van-grid-item to="/windCar" style="padding-right: 0px;">
						<div class="hot-rent-item">
						         <img src="../assets/Home/今日进程.png" alt="">
						         <span class="price">导向靶 CN73495</span>
										 <p class="price bor">打3折</p>
						         <van-row gutter="60">
                        <van-col class="cored" span="12">￥3455</van-col>
                        <van-col span="12">图标</van-col>
  
                     </van-row>
						     </div>
					</van-grid-item>
					<van-grid-item to="/windCar" style="padding-bottom: 60px;">
						<div class="hot-rent-item">
						         <img src="../assets/Home/今日进程.png" alt="">
						         <span class="price">导向靶 CN73495</span>
										 <p class="price bor">打3折</p>
						         <van-row gutter="60">
						            <van-col class="cored" span="12">￥3455</van-col>
						            <van-col span="12">图标</van-col>
						           
						         </van-row>
						     </div>
					</van-grid-item>
					<van-grid-item to="/windCar" style="padding-bottom: 60px;padding-right: 0px;">
						<div class="hot-rent-item">
						         <img src="../assets/Home/今日进程.png" alt="">
						         <span class="price">导向靶 CN73495</span>
										 <p class="price bor">打3折</p>
						         <van-row gutter="60">
						            <van-col class="cored" span="12">￥3455</van-col>
						            <van-col span="12">图标</van-col>
						           
						         </van-row>
						     </div>
					</van-grid-item>
				</van-grid>
	</van-tab>
	</div>
</van-tabs>
  <van-tabbar active-color="#E33B3E" inactive-color="#000" v-model="active">
  <van-tabbar-item icon="home-o">首页</van-tabbar-item>

  <van-tabbar-item replace to="/apps" icon="apps-o">分类</van-tabbar-item>
  <van-tabbar-item replace to="/orders" icon="orders-o">求购</van-tabbar-item>
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
import { Grid, GridItem } from 'vant';

Vue.use(Grid).use(GridItem);
Vue.use(Vant);
Vue.use(Tabbar).use(TabbarItem);
export default {
  data() {
    return {
      active: 0,
			value:''
    }
  },

	methods: {
    onClick(name, title) {
      
    },
		search() {
		  this.$router.push({
		    path: '/search'
		  })
		},
  }
}
</script>
<style scoped>
	.van-nav-bar__text{
		color: red;
	}
	.van-nav-bar .van-icon{
		color: red;
	}
	.loimg{
		position:absolute;
		z-index: 0; 
		width: 100%;
		left: 0px; 
		top:0px;
	}
  .van-search{
		z-index: 1;
		position: relative;
		background: 0!important;
	}
	.leftnav,.rightnav{
		margin-top: 10px;
		color: white;
	}
	.leftnav{
		float: left;
		margin-left: 10px;
	}
	.rightnav{
		float: right;
		margin-right: 10px;
	}
	.van-grid-item__content{
		background-color: #F2F2F2!important;
		padding: 0 8px!important;
		border-radius: 5px!important;
	}
	.van-cell__title span{
		float: left;
	}
	.hzsj{
		width: 90%;
		height: auto;
		margin: 0 auto;
		border-radius: 5%!important;
		margin-top: 10px;
	}
	.van-grid{
		padding-left: 0px!important;
	}
	.small-siz{
		text-align: left;
		margin-right: 15px;
	}
	.small-siz{
		text-align: right;
	}
	.hot-rent-item img {
        width: 80px;
        height: auto;
		display: block;
		margin: 15px auto;
		margin-bottom: 15px ;
    }
	.hot-rent-item .price {
        font-size: 13px;
        color: #333333;
	    float: left;
    }
    .cored{
	    color: #E33B3E;
    }
	.bor{
		color: #F5A623!important;
		border: 1px solid #F5A623;
		margin-left: -97px;
        display: block;
        margin-top: 23px;
		border-radius: 3px;
		padding: 0 5px;
		font-size: 10px!important;
	}
	.van-row{
		margin-top: 60px!important;
	}
	.nav{
		overflow: hidden;
		z-index: 1;
		position: relative;
	}
	.imgsize{
		width: 40px;
		height: 40px; 
		margin-bottom: 3px;
	}
    .van-grid-item__content--center{
	    background-color: #F2F2F2!important;
    }
</style>

