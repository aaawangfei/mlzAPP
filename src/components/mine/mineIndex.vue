<template>
  <div style="background: #f2f2f2;text-align: center;margin-bottom: 50px;">
    <div class="lay">
      <div class="header">
		  <span style="float: right;margin:15px 10px 10px 2px;">
		    <van-icon color="white" name="chat-o" info="2" />
		  </span>
          <span style="float: right;margin: 15px 10px 10px 6px;">
            <van-icon color="white" name="setting-o" />
          </span>
      </div>
      <div style="overflow: hidden; ">
        <div class="imgleft">
          <img round width="80px" height="80px" src="../../assets/Home/Avatar.png" />
        </div>
        <div class="iwordright">
          <p style="float: left;color: white;">王花花</p>
          <p style="color: white;">15630037989</p>
        </div>
      </div>
      <div class="footer">
        <van-row class="taxtcolor">
          <van-col span="8">
            <div>
              <p>4</p>
              <p>产品收藏</p>
            </div>
          </van-col>
          <van-col span="8">
            <div>
              <p>12</p>
              <p>关注品牌</p>
            </div>
          </van-col>
          <van-col span="8">
            <div>
              <p>8</p>
              <p>浏览记录</p>
            </div>
          </van-col>
        </van-row>
      </div>
    </div>
    <div style="background: white;border-radius:5px;padding-top: 2px;margin-top: 10px;">
			<van-cell style="border-radius: 10px 10px 0 0;" :border="false" title="我的订单" is-link value="查看更多" />
			<span style="background: #f2f2f2;width: 100%;height: 1px; display: block; "></span>
			<van-grid :border="false" :column-num="4" :square="false">
  <van-grid-item>
    <img class="imgsize" src="../../assets/Home/Accessories.png" />
		<span>代付款</span>
  </van-grid-item>
  <van-grid-item>
    <img class="imgsize" src="../../assets/Home/Accessories.png" />
		<span>待发货</span>
  </van-grid-item>
  <van-grid-item>
    <img class="imgsize" src="../../assets/Home/Accessories.png" />
		<span>待收货</span>
  </van-grid-item>
	<van-grid-item>
	  <img class="imgsize" src="../../assets/Home/Accessories.png" />
		<span>退款/售后</span>
	</van-grid-item>
</van-grid>
    </div>
    <div style="border-radius:5px; padding-top: 2px;padding: 10px 0;">
      <img class="ellipse" src="../../assets/Home/banner.png" />
    </div>
    <div style="background: white;border-radius:5px; padding-top: 2px;margin-bottom: 10px;">
      <p style="text-align: left; height: 20px;padding-left: 16px;line-height: 20px;font-weight: 500;color: #333333;font-size: 16px;">我的应用</p>
      <span style="background: #f2f2f2;width: 100%;height: 1px; display: block; "></span>
			<van-grid :border="false" :column-num="4" :square="false">
			  <van-grid-item>
			    <img class="imgsize" src="../../assets/Home/Accessories.png" />
					<span class="wordcolor">合同管理</span>
			  </van-grid-item>
			  <van-grid-item>
			    <img class="imgsize" src="../../assets/Home/Accessories.png" />
					<span class="wordcolor">需求发布</span>
			  </van-grid-item>
			  <van-grid-item>
			    <img class="imgsize" src="../../assets/Home/Accessories.png" />
					<span class="wordcolor">采购单</span>
			  </van-grid-item>
			</van-grid>
    </div>
    <div style="background: white;border-radius:5px; padding-top: 2px;">
      <p style="text-align: left; height: 20px;padding-left: 16px;line-height: 20px;font-weight: 500;color: #333333;font-size: 16px;">服务应用</p>
      <span style="background: #f2f2f2;width: 100%;height: 1px; display: block; "></span>
			<van-grid :border="false" :column-num="4" :square="false">
			  <van-grid-item>
			    <img class="imgsize" src="../../assets/Home/Accessories.png" />
					<span class="wordcolor">库存项目</span>
			  </van-grid-item>
			  <van-grid-item>
			    <img class="imgsize" src="../../assets/Home/Accessories.png" />
					<span class="wordcolor">代理销售</span>
			  </van-grid-item>
			  <van-grid-item>
			    <img class="imgsize" src="../../assets/Home/Accessories.png" />
					<span class="wordcolor">预付款项目</span>
			  </van-grid-item>
				<van-grid-item>
				  <img class="imgsize" src="../../assets/Home/Accessories.png" />
					<span class="wordcolor">提货单查询</span>
				</van-grid-item>
			<van-grid-item>
				  <img class="imgsize" src="../../assets/Home/Accessories.png" />
					<span class="wordcolor">收款单查询</span>
				</van-grid-item>
			<van-grid-item>
				  <img class="imgsize" src="../../assets/Home/Accessories.png" />
					<span class="wordcolor">盈利测算</span>
				</van-grid-item>
			</van-grid>
    </div>
	<van-tabbar active-color="#E33B3E" inactive-color="#000" v-model="active">
	  <van-tabbar-item replace to="/" icon="home-o">首页</van-tabbar-item>
	  <van-tabbar-item replace to="/apps" icon="apps-o">分类</van-tabbar-item>
	  <van-tabbar-item replace to="/orders" icon="orders-o">求购</van-tabbar-item>
	  <van-tabbar-item replace to="/cart" icon="cart-o">购物车</van-tabbar-item>
		<van-tabbar-item icon="contact">我的</van-tabbar-item>
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
	      active: 4,
	    }
	  },
		methods: {
	   
	   }
	 }
</script>
<style scoped>
  .lay {
    background: #E33B3E;
    width: 100%;
  }
  .imgleft {
    float: left;
    padding: 10px
  }
  .iwordright {
    float: left;
  }
  .taxtcolor {
    color: white;
  }
  .ellipse {
    width: 100%;
    height: 90px;
    border-radius: 200px;
	vertical-align: middle;
  }
  .van-info {
    background-color: #FFFFFF;
    color: #E33B3E;
    min-width: 12px;
    width: 12px;
    height: 12px;
    padding: 0px;
    line-height: 10px;
    font-size: 8px;
    top: 2px;
}
.imgsize{
	width: 40px;
	margin-bottom: 6px;
}
.van-grid-item span{
	font-size: 10px;
	color: #333333;
}
.wordcolor{
	font-size: 10px;
	color: #656565!important;
}
.van-cell__title span{
	font-size: 16px;
	font-weight: 500;
	color: #333333;
}
.van-cell__title{
	text-align: left;
}
.van-cell{
	padding: 12px 13px 12px 16px;
}
.van-cell__value span{
	font-size: 10px;
	color: #333333;
}
.van-icon{
	color: #333333;
}
</style>
