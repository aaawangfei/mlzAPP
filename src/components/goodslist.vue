<template>
	<div>
		<div class="topback">
		<div class="nav">
			<span class="leftnav">
				<van-icon name="arrow-left" />
			</span>
			<span class="rightnav">
				<van-search shape="round" placeholder="采煤机配件降价" v-model="value" />
				</span>
		</div>
		<div class="row">
        <div class="col-xs-5ths">
          <van-dropdown-menu>
             <van-dropdown-item v-model="value1" :options="option1" />
          </van-dropdown-menu>
        </div>
        <div class="col-xs-5ths">
          <van-dropdown-menu>
             <van-dropdown-item color="#FFFFFF" v-model="value2" :options="option2" />
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
	      	<img class="img" src="../assets/Home/今日进程.png" alt="">
	      </div>
	      <div class="rightwords">
	      	<p class="right">
	      		<span class="tit titlist">采煤机配件导向靶CON02</span>
	      		<span class="time timelist">￥3473</span>
	      		</p>
	      	<p class="Introduction icontop">
	      		<van-icon name="award-o" />
	      		</p>
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
      active: 1,
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
		margin-top: 14px;
	  width: 10%;
	}
	.rightnav{
		float: right;
		margin-top: -4px;
		width: 90%;
	}
	.topback{
		width: 100%;
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
		margin-top: 3px;
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
		margin-right: 18px;
		font-size: 13px;
		margin-top: 32px;
	}
	.gz{
		color: #E33B3E;
		border-radius: 20px;
	}
	.col-xs-5ths{ 
		width:20%; 
		float:left;
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
	.icontop{
		margin-top: 53px;
	}
	.bor-bottom{
		border-bottom: 1px solid #F2F2F2;
	}
</style>
