<template>
	<div style="background: #F2F2F2;">
  <van-nav-bar title="消息(3)" left-text="" right-text="" left-arrow @click-left="onClickLeft" @click-right="onClickRight"/>
		<van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
  <van-cell v-for="item in list" :key="item" :title="item"/>
  <div class="item-list">
	<div class="leftimg">
		<img class="img" src="../../assets/Home/examine.png" alt="">
		<img class="three" src="../../assets/Home/three.png" alt="">
	</div>
	<div class="rightwords">
		<p class="right">
			<span class="tit">待办任务</span>
			<span class="time">2019/04/12</span>
			</p>
		<p class="Introduction">您有一份合同需要审核,请立即查看处理…</p>
	</div>
	</div>
	<div class="item-list">
		<div class="leftimg">
			<img class="img" src="../../assets/Home/logistics.png" alt="">
		</div>
		<div class="rightwords">
			<p class="right">
				<span class="tit">交易物流</span>
				<span class="time">2019/04/12</span>
				</p>
			<p class="Introduction">您有一份合同需要审核,请立即查看处理…</p>
		</div>
		</div>
		<div class="item-list">
			<div class="leftimg">
				<img class="img" src="../../assets/Home/notice.png" alt="">
			</div>
			<div class="rightwords">
				<p class="right">
					<span class="tit">服务通知</span>
					<span class="time">2019/04/12</span>
					</p>
				<p class="Introduction">您有一份合同需要审核,请立即查看处理…</p>
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
	.leftimg{
		float: left;
		width: 30%;
		text-align: center;
	}
	.img{
		width: 80px;
		display: inline-block;
		position: relative;
		margin: 10px auto;
	}
	.rightwords{
		float: right;
		width: 68%;
		border-bottom: 1px solid #F2F2F2;
		padding-bottom: 5px;
	}
	.right{
		overflow: hidden;
		margin-top: 26px;
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
		margin-top: -8px;
		color: #666666;
		font-size: 13px;
		text-align: justify;
		width:90%;
        word-break:keep-all;
        white-space:nowrap;
        overflow:hidden;
        text-overflow:ellipsis; 
	}
	.van-nav-bar .van-icon{
		color: #2c3e50;
	}
	.three{
		position: absolute;
		width: 35px;
        height: 35px;
		z-index: 11;
		margin-left: -10px;
		display: inline-block;
	}
	.van-nav-bar{
		margin-bottom: 10px;
	}
	.item-list{
		overflow: hidden;
		background: #FFFFFF;
	}
</style>
