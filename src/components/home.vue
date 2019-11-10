<template>
	<div style="background-color: #F2F2F2;text-align: center;">
		<van-image class="loimg" width="100%" src="https://img.yzcdn.cn/vant/cat.jpeg"/>
		<div class="nav">
			<span class="leftna">煤亮子商城</span><span class="rightnav">图标</span>
		</div>
	<van-search @click="search" shape="round" placeholder="采煤机配件降价" v-model="value" />
	<van-image width="90%" src="https://img.yzcdn.cn/vant/cat.jpeg"/>
	<van-row style="width: 96%;margin: 0 auto;">
				<van-col span="6">
					<img class="imgsizee" src="../assets/Home/申请搭车.png">
					<div class="small-sizee">配件区</div>
				</van-col>
				<van-col span="6">
					<img class="imgsizee" src="../assets/Home/申请搭车.png">
					<div class="small-sizee">耗材区</div>
				</van-col>
				<van-col span="6">
					<img class="imgsizee" src="../assets/Home/申请搭车.png">
					<div class="small-sizee">设备区</div>
				</van-col>
				<van-col span="6">
					<img class="imgsizee" src="../assets/Home/申请搭车.png">
					<div class="small-sizee">二手区</div>
				</van-col>

			</van-row>
			<div class="hzsj">
			<van-cell style="border-radius: 10px 10px 0 0;" :border="false" title="合作商家" is-link value="查看更多" />
			<van-row class="hzsjrow">
						<van-col span="6">
							<img class="imgsize" src="../assets/Home/申请搭车.png">
							<div class="small-size">天地煤机</div>
						</van-col>
						<van-col span="6">
							<img class="imgsize" src="../assets/Home/申请搭车.png">
							<div class="small-size">威盛特</div>
						</van-col>
						<van-col span="6">
							<img class="imgsize" src="../assets/Home/申请搭车.png">
							<div class="small-size">维诺斯</div>
						</van-col>
						<van-col span="6">
							<img class="imgsize" src="../assets/Home/申请搭车.png">
							<div class="small-size">云城机械</div>
						</van-col>
			            <van-col span="6">
			            	<img class="imgsize" src="../assets/Home/申请搭车.png">
			            	<div class="small-size">思匠德</div>
			            </van-col>
			            <van-col span="6">
			            	<img class="imgsize" src="../assets/Home/申请搭车.png">
			            	<div class="small-size">艾蒙斯特朗</div>
			            </van-col>
			            <van-col span="6">
			            	<img class="imgsize" src="../assets/Home/申请搭车.png">
			            	<div class="small-size">航天重工</div>
			            </van-col>
			            <van-col span="6">
			            	<img class="imgsize" src="../assets/Home/申请搭车.png">
			            	<div class="small-size">西安重装</div>
			            </van-col>
					</van-row>
					</div>
					<div class="hzsj">
					<van-cell style="border-radius: 10px 10px 0 0;" :border="false" title="热销二手" is-link value="查看更多" />
					<van-row class="hzsjrow">
								<van-col span="6">
									<img class="imgsize" src="../assets/Home/申请搭车.png">
									<div class="small-size">采煤机</div>
								</van-col>
								<van-col span="6">
									<img class="imgsize" src="../assets/Home/申请搭车.png">
									<div class="small-size">齿轮</div>
								</van-col>
								<van-col span="6">
									<img class="imgsize" src="../assets/Home/申请搭车.png">
									<div class="small-size">煤机配件</div>
								</van-col>
								<van-col span="6">
									<img class="imgsize" src="../assets/Home/申请搭车.png">
									<div class="small-size">电磁转换器</div>
								</van-col>
							</van-row>
							</div>
							<van-tabs @click="onClick" background="#F2F2F2" color="#E33B3E" title-inactive-color="#333333" title-active-color="#E33B3E" line-width="55px">
	<div class="hzsj">
  <van-tab title="推荐产品">
  <ul class="square-inner" style="padding-bottom: 38px;">
    <li class="hot-rent-item" @click="goodsdetail">
		         <img src="../assets/Home/今日进程.png" alt="">
		         <span class="price priceleft">导向靶 CN73495</span>
						 <p class="price bor">打3折</p>
				 <div class="navv navtop">
				 	<span class="leftnav cored">￥3455</span><span class="rightnav iconcolo">图标</span>
				 </div>

	</li>
    <li class="hot-rent-item" @click="goodsdetail">
    	         <img src="../assets/Home/今日进程.png" alt="">
    	         <span class="price priceleft">导向靶 CN73495</span>
    					 <p class="price bor">打3折</p>
    			 <div class="navv navtop">
    			 	<span class="leftnav cored">￥3455</span><span class="rightnav iconcolo">图标</span>
    			 </div>

    </li>
    <li class="hot-rent-item" @click="goodsdetail">
    	         <img src="../assets/Home/今日进程.png" alt="">
    	         <span class="price priceleft">导向靶 CN73495</span>
    					 <p class="price bor">打3折</p>
    			 <div class="navv navtop">
    			 	<span class="leftnav cored">￥3455</span><span class="rightnav iconcolo">图标</span>
    			 </div>

    </li>
    <li class="hot-rent-item" @click="goodsdetail">
    	         <img src="../assets/Home/今日进程.png" alt="">
    	         <span class="price priceleft">导向靶 CN73495</span>
    					 <p class="price bor">打3折</p>
    			 <div class="navv navtop">
    			 	<span class="leftnav cored">￥3455</span><span class="rightnav iconcolo">图标</span>
    			 </div>

    </li>
  </ul>
	</van-tab>
	</div>
	<div class="hzsj">
  <van-tab title="上新产品" style="font-size: 16px;">
		<ul class="square-inner" style="padding-bottom: 48px;">
		  <li class="hot-rent-item" @click="goodsdetail">
		  	         <img src="../assets/Home/今日进程.png" alt="">
		  	         <span class="price priceleft">导向靶 CN73495</span>
		  					 <p class="price bor">打3折</p>
		  			 <div class="navv navtop">
		  			 	<span class="leftnav cored">￥3455</span><span class="rightnav iconcolo">图标</span>
		  			 </div>

		  </li>
		  <li class="hot-rent-item" @click="goodsdetail">
		  	         <img src="../assets/Home/今日进程.png" alt="">
		  	         <span class="price priceleft">导向靶 CN73495</span>
		  					 <p class="price bor">打3折</p>
		  			 <div class="navv navtop">
		  			 	<span class="leftnav cored">￥3455</span><span class="rightnav iconcolo">图标</span>
		  			 </div>

		  </li>
		  <li class="hot-rent-item" @click="goodsdetail">
		  	         <img src="../assets/Home/今日进程.png" alt="">
		  	         <span class="price priceleft">导向靶 CN73495</span>
		  					 <p class="price bor">打3折</p>
		  			 <div class="navv navtop">
		  			 	<span class="leftnav cored">￥3455</span><span class="rightnav iconcolo">图标</span>
		  			 </div>

		  </li>
		  <li class="hot-rent-item" @click="goodsdetail">
		  	         <img src="../assets/Home/今日进程.png" alt="">
		  	         <span class="price priceleft">导向靶 CN73495</span>
		  					 <p class="price bor">打3折</p>
		  			 <div class="navv navtop">
		  			 	<span class="leftnav cored">￥3455</span><span class="rightnav iconcolo">图标</span>
		  			 </div>

		  </li>
		</ul>
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
	goodsdetail() {
	  this.$router.push({
		    path: '/goodsdetail'
	})
   }
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
	.leftnav,.rightnav,.leftna{
		margin-top: 10px;
		color: white;
	}
	.leftnav{
		float: left;
		margin-left: 7px;
	}
	.leftna{
		float: left;
		margin-left:10px;
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
		margin-top: 10px;
	}
	.van-grid{
		padding-left: 0px!important;
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
		font-size: 13px;
    }
	.bor{
		color: #F5A623!important;
		border: 1px solid #F5A623;
		margin-left: -98px;
        display: block;
        margin-top: 25px;
		border-radius: 3px;
		padding: 0 5px;
		font-size: 10px!important;
	}
	.van-row{
		margin-top: 18px!important;
        margin-bottom: 18px!important;
	}
	.nav{
		overflow: hidden;
		z-index: 1;
		position: relative;
	}
	.navv{
		overflow: hidden;
	}
	.imgsize{
		width: 40px;
		height: 40px;
		margin-bottom: 3px;
	}
	.vantop{
		margin-top: 30px;
		margin-bottom: -20px;
	}
	.van-col{
		margin: 10px 0;
	}
    .square-inner{
        width: 100%;
        overflow: hidden;
    }
    .square-inner li{
        width: 49%;
        height:auto;
        margin-bottom: 2%;
        overflow: hidden;
        background: #FFFFFF;
		border-radius: 10px;
		padding-bottom: 10px;
        padding-top: 15px;
    }
   .square-inner li:nth-child(2n){
	    margin-left: 1%;
	    float: right;
    }
    .square-inner li:nth-child(2n-1){
	    margin-right: 1%;
	    float: left;
    }
	.navtop{
		margin-top: 54px;
	}
	.iconcolo{
		color: #333333;
		font-size: 13px;
	}
	.priceleft{
		margin-left: 10px;
	}
	.hzsjrow{
		background: #FFFFFF!important;
		border-radius: 0px 0px 10px 10px!important;
		margin-top: 0px!important;
	}
	.van-tabs{
		margin-top: -6px;
	}
	.small-size{
		color: #666666;
		font-size: 13px;
	}
	.small-sizee{
		color: #333333;
		font-size: 13px;
	}
	.imgsizee{
		width: 60px;
		height: 60px;
		margin-bottom: 3px;
	}
	.van-cell__value span{
		color: #666666;
		font-size: 13px;
	}
	.van-icon{
		color: #666666;
	}
	.van-cell__title span{
		color: #333333;
		font-weight: bold;
		font-size: 15px;
	}
</style>
