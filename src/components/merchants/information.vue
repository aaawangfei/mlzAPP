<template>
	<div>
  <van-nav-bar title="消息(3)" left-text="" right-text="" left-arrow @click-left="onClickLeft" @click-right="onClickRight"/>
		<van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
  <van-cell v-for="item in list" :key="item" :title="item"/>
	<div class="leftimg">
		<img class="img" src="../../assets/Home/今日进程.png" alt="">
	</div>
	<div class="rightwords">
		<p class="right">
			<span class="tit">待办任务</span>
			<span class="time">2019/04/12</span>
			</p>
		<p class="Introduction">您有一份合同需要审核…</p>
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
		border-bottom: 1px solid #F2F2F2;
		padding-bottom: 20px;
	}
	.right{
		overflow: hidden;
		margin-top: 21px;
	}
	.tit{
		float: left;
		margin-left: 10px;
		color: #333333;
		font-size: 14px;
	}
	.time{
		float: right;
		margin-right: 18px;
    color: #666666;
		font-size: 10px;
	}
	.Introduction{
		float: left;
		margin-left: 10px;
		margin-right: 18px;
		margin-top: -8px;
		color: #666666;
		font-size: 13px;
		text-align: justify;
	}
	.van-nav-bar .van-icon{
		color: #2c3e50;
	}
</style>
