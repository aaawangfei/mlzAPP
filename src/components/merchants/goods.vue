<template>
	<div>
		<div class="topback">
		<div class="nav">
			<span class="leftnav">
				<van-icon color="#FFFFFF" name="arrow-left" />
			</span>
			<span class="rightnav">
				<van-search shape="round" background="#E33B3E" placeholder="采煤机配件降价" v-model="value" />
				</span>
		</div>
		<div class="nav">
		<div class="leftimg">
			<img class="img" src="../../assets/Home/artisanborrad.png" alt="">
		</div>
		<div class="rightwords">
			<p class="right">
				<span class="tit">思匠德</span>
				<span class="time">123人关注</span>
				</p>
			<p class="Introduction">
				<van-button class="gz" slot="button" size="mini">关注</van-button>
				</p>
		</div>
		</div>
		<div class="row">
        <div class="col-xs-5ths">
          <van-dropdown-menu>
             <van-dropdown-item v-model="value1" :options="option1" />
          </van-dropdown-menu>
        </div>
        <div class="col-xs-5ths">
          <van-dropdown-menu>
             <van-dropdown-item v-model="value2" :options="option2" />
          </van-dropdown-menu>
        </div>
        <div class="col-xs-5ths">
          <van-dropdown-menu>
             <van-dropdown-item v-model="value3" :options="option3" />
          </van-dropdown-menu>
        </div>
        <div class="col-xs-5ths">
          <van-dropdown-menu>
             <van-dropdown-item v-model="value4" :options="option4" />
          </van-dropdown-menu>
        </div>
        <div class="col-xs-5ths">
          <van-dropdown-menu>
             <van-icon class="iconr" name="apps-o" />
          </van-dropdown-menu>
        </div>
</div>
		</div>
		<van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
  <van-cell v-for="item in list" :key="item" :title="item"/>
	      <div class="nav bor-bottom">
	      <div class="leftimg">
	      	<img class="img" src="../../assets/Home/dxb.png" alt="">
	      </div>
	      <div class="rightwords">
	      	<p class="right">
	      		<span class="tit titlist">采煤机配件导向靶CON02</span>
	      		</p>
	      	<p>
				<span class="time timelist">￥3473</span>
	      		<van-icon class="Introduction icontop" color="#E33B3E" name="shopping-cart-o" />
	      		</p>
	      </div>
	      </div>
</van-list>
  <van-tabbar active-color="#E33B3E" inactive-color="#000" v-model="active">
  <van-tabbar-item icon="shop-o">商品</van-tabbar-item>
  <van-tabbar-item replace to="/goodsclass" icon="qr">分类</van-tabbar-item>
  <van-tabbar-item replace to="/Aboutus" icon="contact">关于我们</van-tabbar-item>
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
        active: 0,
		value1: 0,
        value2: 'a',
	    value3: 'a',
		value4: 'a',
		value:'',
		list: [],
        loading: false,
        finished: false,
        option1: [
        { text: '价格', value: 0 },
        { text: '价格1', value: 1 },
        { text: '价格2', value: 2 },
		{ text: '价格3', value: 3 }
        ],
        option2: [
        { text: '交货期', value: 'a' },
        { text: '1月', value: 'b' },
        { text: '2月', value: 'c' },
        ],
		option3: [
		{ text: '仓库', value: 'a' },
		{ text: '斯柯达', value: 'b' },
		{ text: '耐克', value: 'c' },
		],
		option4: [
		{ text: '类型', value: 'a' },
		{ text: '塑料', value: 'b' },
		{ text: '钢铁', value: 'c' },
		]
    }
  },
	methods: {
    onLoad() {
        this.loading = false; 
    }
  }
}
</script>
<style scoped>
	.nav{
		overflow: hidden;
		width: 100%;
	}
	.leftnav{
		float: left;
		margin-top: 19px;
	    width: 10%;
		margin-left: 16px;
	}
	.rightnav{
		float: right;
		margin-top: -4px;
		width: 85%;
	}
	.topback{
		background-color: #E33B3E;
		width: 100%;
	}
	.van-search__content{
		background-color: #FFFFFF;
	}
	.leftimg{
		float: left;
		width: 30%;
	}
	.img{
		width: 80px;
		display: block;
		margin: 10px auto;
		text-align: center;
	}
	.rightwords{
		float: right;
		width: 70%;
		padding-bottom: 20px;
	}
	.right{
		margin-top: 18px;
		text-align: left;
		margin-right: 16px;
	}
	.tit{
		float: left;
		margin-left: 10px;
		color: #FFFFFF;
		font-size: 14px;
		width: 100%;
        text-align: left;
		margin-top: 6px;
		white-space: nowrap;  
		text-overflow:ellipsis; 
		overflow:hidden;
	}
	.time{
		float: left;
	    margin-left: 10px;
	    color: #FFFFFF;
		font-size: 10px;
        text-align: left;
		margin-top: 10px;
	}
	.Introduction{
		float: right;
		margin-right: 16px;
		font-size: 13px;
		margin-top: -9px;
	}
	.gz{
		color: #E33B3E;
		border-radius: 20px;
	}
	.col-xs-5ths{ 
		width:20%; 
		float:left;
	}
	.van-dropdown-menu{
		background-color: #E33B3E;
	}
	.iconr{
		margin: 16px auto;
	}
	.titlist{
		color: #333333;
	}
	.timelist{
		color: #E33B3E;
	}
	.bor-bottom{
		border-bottom: 1px solid #F2F2F2;
	}
	.van-search{
		padding: 10px 16px;
		margin-top: 5px;
	}
	.icontop{
		margin-top: 10px;
	}
</style>
