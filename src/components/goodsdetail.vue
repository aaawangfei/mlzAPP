<template>
	<div class="bag">
		<div class="nav">
			<span class="leftnav" style="margin-top: 16px;">
				<van-icon name="arrow-left" />
			</span>
			<span class="rightnav iconrela" style="margin-top: 16px;">
				<van-icon name="share" />
				<van-icon @click="showcont" class="hreclock" name="ellipsis" />
				</span>
			<div v-if="showicon">
				<div class="wrapper">
			       <div class="triangle">
			          <div></div>
			       </div>
			       <van-cell title="消息" icon="chat-o" :border="false" to="/information"></van-cell>
			       <van-divider />
			       <van-cell title="首页" icon="home-o" :border="false" to="/"></van-cell>
			       <van-divider />
			       <van-cell title="搜索" icon="search" :border="false" to="/search"></van-cell>
			       <van-divider />
			       <van-cell title="浏览记录" icon="shop-o" :border="false" to="/"></van-cell>
			       </div>
			    </div>	
		</div>
		<div class="hot-rent-item">
		        <van-swipe @change="onChange">
                   <van-swipe-item>
	                  <img src="../assets/Home/cl.png" alt="">
                   </van-swipe-item>
                 <van-swipe-item>
	                  <img src="../assets/Home/我的行程.png" alt="">
                 </van-swipe-item>
                 <van-swipe-item>
	                  <img src="../assets/Home/申请搭车.png" alt="">
                 </van-swipe-item>
                 <van-swipe-item>
	                  <img src="../assets/Home/申请用车.png" alt="">
                 </van-swipe-item>
                    <div class="custom-indicator" slot="indicator">
                       {{ current + 1 }}/4
                    </div>
                </van-swipe>
				 <div class="nav">
		         <span class="leftnav price">￥3045</span>
				 <span class="rightnav">
				 	<van-icon name="award-o" />
				 	</span>
				 </div>
		         <p class="tit titcolor">
					 齿轮10 CNN01281-12678A
				 </p>
				 <p class="tit timecolor">
				 	 <van-icon class="icontop" name="certificate" /><span>交货期6天</span>
					 <van-icon class="icontop" name="certificate" /><span>新货</span>
					 <van-icon class="icontop" name="certificate" /><span>盖茨生产</span>
				 </p>
		     </div>
			 <div class="hot-rent-item">
				 <div class="nav">
				 	<span class="leftnav">
				 		数量
				 	</span>
				 	<span class="rightnav">
				 		<van-stepper v-model="value" min="1" max="8" />
				 		</span>
				 </div>
				 <van-cell title="库存" value="999" />
				 <van-cell value="" is-link to="address">
                    <template slot="title">
                     <span class="custom-title">配送</span>
                     <van-icon class="position" name="location-o" />
	                 <span class="loccolor">陕西省宝鸡市…</span>
                    </template>
                 </van-cell>
				 <van-cell value="" is-link @click="showPopup">
				    <template slot="title">
				     <span class="custom-title">参数</span>
				     <span class="loccolor">产品相关参数明细</span>
				    </template>
				 </van-cell>
				 <van-popup round v-model="show" position="bottom" :style="{ height: 'auto' }">
					 <p class="Prodpara">产品参数</p>
					<van-cell>
					   <template slot="title">
					    <span class="custom-title">名称</span>
					    <span class="loccolor modelmeter">齿轮10</span>
					   </template>
					</van-cell>
					<van-cell>
					   <template slot="title">
					    <span class="custom-title">型号</span>
					    <span class="loccolor modelmeter">CNN01281-12678A</span>
					   </template>
					</van-cell>
                    <van-cell>
                       <template slot="title">
                        <span class="custom-title">齿轮数</span>
                        <span class="loccolor modelmeter">10</span>
                       </template>
                    </van-cell>
					<van-cell>
					   <template slot="title">
					    <span class="custom-title">耐磨度</span>
					    <span class="loccolor modelmeter">超强</span>
					   </template>
					</van-cell>
					<van-cell>
					   <template slot="title">
					    <span class="custom-title">材质</span>
					    <span class="loccolor modelmeter">Cr42o34</span>
					   </template>
					</van-cell>
					<van-button class="login" type="danger" size="large">完成</van-button>
				 </van-popup>
</div>
<div class="hot-rent-ite">
<div class="nav">
		<div class="leftimg">
			<img class="img" src="../assets/Home/artisan.png" alt="">
		</div>
		<div class="rightwords">
			<p class="right">
				<span class="titt">思匠德</span>
				<span class="time">123人关注</span>
				</p>
			<p class="Introduction">
				<van-icon color="#969799" name="arrow" />
				</p>
		</div>
		</div>
		<van-grid style="margin-top: -15px;" :column-num="4" :border="false">
					<van-grid-item to="/windCar">
						<img class="imgsize" src="../assets/Home/dxb.png">
						<div class="small-size">导向靶</div>
					</van-grid-item>
					<van-grid-item to="/tadayprogress">
						<img class="imgsize" src="../assets/Home/dxb.png">
						<div class="small-size">导向靶</div>
					</van-grid-item>
					<van-grid-item to="/garageindex">
						<img class="imgsize" src="../assets/Home/dxb.png">
						<div class="small-size">导向靶</div>
					</van-grid-item>
					<van-grid-item to="/myTravil">
						<img class="imgsize" src="../assets/Home/dxb.png">
						<div class="small-size">导向靶</div>
					</van-grid-item>
		
				</van-grid>
				</div>
				 <div @click="showPopupp" class="hot-rent-item morepad">
					   <van-icon color="#969799" name="arrow-down" />
				    <span class="loccolor">上拉查看图文详情</span>
				</div>
				<van-popup round v-model="showw" position="bottom" :style="{ height: 'auto' }">
                    <van-nav-bar title="商品详情" left-text="" right-text="" left-arrow @click-left="onClickLeft" @click-right="onClickRight"/>
                    <img style="width: 100%;" src="../assets/Detailsure.png" alt="">
				    <van-goods-action>
				      <van-goods-action-icon icon="service-o" text="客服" />
				      <van-goods-action-icon icon="star-o" text="收藏" info="12" />
				      <van-goods-action-icon icon="cart-o" text="购物车" info="5" />
				      <van-goods-action-button type="danger" text="加入购物车" />
				      <van-goods-action-button to="/sureorder" type="warning" text="立即购买" />
				    </van-goods-action>
				</van-popup>
<van-goods-action>
  <van-goods-action-icon icon="service-o" text="客服" />
  <van-goods-action-icon icon="star-o" text="收藏" info="12" />
  <van-goods-action-icon icon="cart-o" text="购物车" info="5" />
  <van-goods-action-button type="danger" text="加入购物车" />
  <van-goods-action-button to="/sureorder" type="warning" text="立即购买" />
</van-goods-action>
		</div>
</template>
<script>
import Vue from 'vue';
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
export default {
  data() {
    return {
      current: 0,
	  show: false,
	  showicon:false,
	  showw: false,
	  value:''
    }
  },
	methods: {
    onChange(index) {
      this.current = index;
    },
	showPopup() {
      this.show = true;
    },
	showPopupp() {
	  this.showw = true;
	},
	onClickLeft() {
      
    },
    onClickRight() {
      
    },
	showcont:function(){
		this.showicon=!this.showicon;
	}
  }
}
</script>
<style scoped>
	.nav{
		overflow: hidden;
		width: 100%;
		background: #FFFFFF;
	}
	.leftnav{
		float: left;
		margin-top: 14px;
		margin-left: 13px;
		font-size: 14px;
	}
	.rightnav{
		float: right;
		margin-top: 14px;
		margin-right: 13px;
	}
	.hot-rent-item, .hot-rent-ite{
		margin-bottom: 10px;
		padding-bottom: 1px;
		background: #FFFFFF;
	}
	.hot-rent-item img{
        width: 200px;
        height: auto;
        display: block;
        margin: 15px auto;
        margin-bottom: 15px;
    }
	.tit{
		text-align: left;
		margin-left: 13px;
	}
	.price{
		color: #E33B3E;
		font-size: 12px;
	}
	.titcolor{
		color: #333333;
		font-size: 14px;
		margin-top: -3px;
	}
	.timecolor{
		color: #999999;
		font-size: 10px;
		margin-top: -9px;
	}
	.icontop{
		margin-top: -2px;
		vertical-align:middle;
		margin-right: 5px;
	}
	.timecolor span{
		margin-right: 10px!important;
	}
	.custom-indicator{
		text-align: right;
		margin-right: 13px;
	}
	.van-cell{
		padding: 10px 13px!important;
		color: #333333;
	}
	.position{
		margin-top: -3px;
		vertical-align:middle;
		color:#E33B3E;
	}
	.loccolor{
		color: #666666;
		font-size: 14px;
	}
	.van-cell__title{
		text-align: left;
	}
	.leftimg{
		float: left;
		width: 20%;
	}
	.img{
		width: 60px;
		display: block;
		margin: 16px auto;
		text-align: center;
	}
	.rightwords{
		float: right;
		width: 80%;
	}
	.right{
		margin-top: 18px;
		float: left;
	}
	.titt{
		float: left;
		margin-left: 10px;
		font-size: 14px;
		width: 100%;
	    text-align: left;
		margin-top: 3px;
		color: #222222;
		font-weight: 450;
	}
	.time{
		float: left;
	    margin-left: 10px;
		font-size: 10px;
		width: 100%;
	    text-align: left;
		margin-top: 10px;
	}
	.Introduction{
		float: right;
		margin-right: 11px;
		margin-top: 32px;
	}
	.imgsize{
		width: 60px;
		margin-bottom: 6px;
	}
	.morepad{
		padding: 10px 10px;
		text-align: center;
	}
	.small-size{
		color: #333333;
		font-size: 13px;
	}
	.modelmeter{
		margin-left: 40px;
		color: #333333;
	}
	.custom-title{
	   color:#666666!important;
	}
	.login{
		width: 90%;
		border-radius: 30px;
		border: 0;
		color: #FFFFFF;
		background-color:#E33B3E;
		display: block;
		margin: 0 auto;
	}
	.van-cell__right-icon{
		margin-right: -3px;
	}
	.Prodpara{
		text-align: center;
		color: #333333;
		margin-bottom: 0px;
		font-weight: bold;
	}
	.bag{
		background: #F2F2F2;
		padding-bottom: 42px;
	}
	.wrapper {
			display: inline-block;
			-webkit-border-radius: 5px;
			-moz-border-radius: 5px;
			border-radius: 5px;
			font-size: 10px;
			position: absolute;
			color: #333333;
			border: 2px solid #F2F2F2;
			box-shadow: 0px 2px 15px 0px #F2F2F2;
			z-index: 12;
			right: 10px;
			top:35px;
			background: #FFFFFF;
		}
		.triangle {
			position: absolute;
			top: -18px;
			left: 75%;
			width: 0;
			height: 0;
			border-width: 8px;
			border-style: solid;
			border-color: transparent transparent #F2F2F2 transparent;
		}
		.triangle div {
			position: absolute;
			top: -12px;
			left: -15px;
			width: 0;
			height: 0;
			border-width: 15px;
			border-style: solid;
			border-color: transparent transparent #fff transparent;
		}
		.van-divider{
			margin: 0;
		}
		.hreclock{
			margin-left: 10px;
			z-index: 1233;
		}
		.van-nav-bar .van-icon{
			color: #2c3e50;
		}
</style>
