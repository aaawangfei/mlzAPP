<template>
	<div class="bag">
  <van-nav-bar title="交易物流" left-text="" right-text="" left-arrow @click-left="onClickLeft" @click-right="onClickRight"/>
		<van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
  <van-cell v-for="item in list" :key="item" :title="item"/>
<p>
  <van-button class="submit" size="small" type="grey">今天 10:12</van-button>
</p>
<div class="bk">
<div class="head">
	<span class="status">您的订单已签收</span>
	<span class="time">2019/08/12</span>
</div>
<div class="footer">
	<div class="leftimg">
		<img class="img" src="../../assets/Home/今日进程.png" alt="">
	</div>
	<div class="rightwords">
		<span class="Introduction">您购买的采煤机配件CNF06347858订单已签收！</span>
    </div>
</div>
	</div>
</van-list>
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
      list: [],
      loading: false,
      finished: false
    };
  },
  methods: {
    onClickLeft() {
      Toast('返回');
    },
    onClickRight() {
      Toast('按钮');
    },
		onLoad() {
      this.loading = false;
    }
  }
}
</script>
<style scoped>
	.status{
		float: left;
		width: 36%;
		color: #333333;
		font-size: 14px;
		text-align: center;
	}
	.leftimg{
		float: left;
		width: 36%;
	}
	.img{
		width: 80px;
		display: block;
		margin: 10px auto;
		text-align: center;
	}
	.rightwords{
		float: right;
		width: 64%;
	}
	.time{
		float: right;
		margin-right: 7px;
        color: #666666;
		font-size: 10px;
	}
	.Introduction{
		float: left;
		margin-right: 7px;
		margin-top: 30px;
		color: #666666;
		font-size: 13px;
		text-align: justify;
	}
	.submit{
		border-radius: 20px;
		border: 0;
		color: #999999;
		background-color:#EBEBEB;
		font-size: 13px;
	}
	.bk{
		background: #FFFFFF;
		height: auto;
		display: block;
		margin: 0 16px auto;
		padding: 10px 10px;
		border-radius: 10px;
	}
	.footer,.head{
		overflow: hidden;
	}
	.bag{
		background-color: #F2F2F2;
		padding-bottom: 10px;
		text-align: center;
	}
	.van-nav-bar .van-icon{
		color: #2c3e50;
	}
</style>
