<template>
	<div style="background-color: #F2F2F2;padding-bottom:3px;">
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
		</div>
		<div class="cardlist">
			西安重工装备制造集团有限公司是陕西煤业化西安重工装备制造集团有限公司是陕西煤业化西安重工装备制造集团有限公司是陕西煤业化西安重工装备制造集团有限公司是陕西煤业化西安重工装备制造集团有限公司是陕西煤业化西安重工装备制造集团有限公司是陕西煤业化西安重工装备制造集团有限公司是陕西煤业化西安重工装备制造集团有限公司是陕西煤业化
		</div>

  <van-tabbar active-color="#E33B3E" inactive-color="#000" v-model="active">
  <van-tabbar-item replace to="/goods" icon="shop-o">商品</van-tabbar-item>
  <van-tabbar-item replace to="/goodsclass" icon="qr">分类</van-tabbar-item>
  <van-tabbar-item icon="contact">关于我们</van-tabbar-item>
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
		value:'',
		activeNames: ['1']
    }
  },
	methods: {
    
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
		position: relative;
		height: 200px;
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
		float: left;
	}
	.tit{
		float: left;
		margin-left: 10px;
		color: #FFFFFF;
		font-size: 14px;
		width: 100%;
        text-align: left;
		margin-top: 6px;
	}
	.time{
		float: left;
	    margin-left: 10px;
	    color: #FFFFFF;
		font-size: 10px;
		width: 100%;
        text-align: left;
		margin-top: 10px;
	}
	.Introduction{
		float: right;
		margin-right: 16px;
		font-size: 13px;
		margin-top: 35px;
	}
	.gz{
		color: #E33B3E;
		border-radius: 20px;
	}
	.cardlist{
        background: #FFFFFF;
        height: auto;
        display: block;
        margin: -45px 16px auto;
        padding: 10px 10px;
        border-radius: 10px;
	    text-align: left;
	    margin-bottom: 10px;
	    position: relative;
	    text-indent: 2em;
		text-align:justify;
	}
	.van-search {
        padding: 10px 16px;
		margin-top: 5px;
    }
</style>
