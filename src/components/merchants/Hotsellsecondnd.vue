<template>
	<div style="background-color: #F2F2F2;">
		<div class="topback">
		<div class="nav">
			<span class="leftnav">
				<van-icon name="arrow-left" />
			</span>
			<span class="rightnav">
				<van-search shape="round" placeholder="采煤机配件降价" v-model="value" />
			</span>
		</div>
		<div class="row" style="overflow: hidden;">
		<van-col span="8">
		  <van-dropdown-menu>
			 <van-dropdown-item v-model="value1" :options="option1" />
		  </van-dropdown-menu>
		</van-col>
        <van-col span="8">
          <van-dropdown-menu>
             <van-dropdown-item v-model="value2" :options="option2" />
          </van-dropdown-menu>
        </van-col>
        <van-col span="8" @click="toggle">
			<div v-if="show">
				<van-dropdown-menu>
				   <van-icon class="iconr" name="apps-o" />
				</van-dropdown-menu>
			</div>
          <div v-else>
			  <van-dropdown-menu>
			     <img style="width: 14px;height: 14px;margin: 18px auto;" class="iconr" src="../../assets/Home/pailie.png" alt="">
			  </van-dropdown-menu>
		  </div>
        </van-col>
     </div>
	 <div class="hzsj" v-if="show">
	 <ul class="square-inner">
	   <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
	     <van-cell v-for="item in list" :key="item" :title="item"/>
	   <li class="hot-rent-item" @click="goodsdetail">
	   	         <img src="../../assets/Home/dxb.png" alt="">
	   	         <span class="priceleft">导向靶 CN73495</span>
	   					 
	   			 <div class="navv">
	   			 	<span class="leftnavv cored">价格面议</span>
	   			 </div>
	   	
	   </li>
	   </van-list>
	   <li class="hot-rent-item" @click="goodsdetail">
	   	         <img src="../../assets/Home/cl.png" alt="">
	   	         <span class="priceleft">齿轮10CN01281-12678</span>
	   					 
	   			 <div class="navv">
	   			 	<span class="leftnavv cored">价格面议</span>
	   			 </div>
	   	
	   </li>
	   <li class="hot-rent-item" @click="goodsdetail">
	   	         <img src="../../assets/Home/njz.png" alt="">
	   	         <span class="priceleft">扭距轴CN6327856</span>
	   					 
	   			 <div class="navv">
	   			 	<span class="leftnavv cored">价格面议</span>
	   			 </div>
	   	
	   </li>
	   <li class="hot-rent-item" @click="goodsdetail">
	   	         <img src="../../assets/Home/cglz.png" alt="">
	   	         <span class="priceleft">齿轨轮轴GA87923</span>
	   					 
	   			 <div class="navv">
	   			 	<span class="leftnavv cored">价格面议</span>
	   			 </div>
	   </li>
	 </ul>
	 	</div>
		<div v-else>
			<van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
			  <van-cell v-for="item in list" :key="item" :title="item"/>
				      <div class="nav bor-bottom" @click="goodsdetail">
				      <div class="leftimg">
				      	<img class="img" src="../../assets/Home/dxb.png" alt="">
				      </div>
				      <div class="rightwords">
				      	<p class="right">
				      		<span class="tit titlist">采煤机配件导向靶CON02</span>
				      		</p>
				      	<p>
				      				<span class="time timelist">价格面议</span>
				      		</p>
				      </div>
				      </div>
			</van-list>
			</div>
		</div>
</div>
</template>

<script>
import Vue from 'vue';
import Vant from 'vant';
import 'vant/lib/icon/local.css';
import { Tabbar, TabbarItem } from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
Vue.use(Tabbar).use(TabbarItem);
export default {
  data() {
    return {
        active: 0,
		show: true,
		value1: 0,
        value2: 'a',
	    value3: 'a',
		value4: 'a',
		value:'',
		list: [],
        loading: false,
        finished: false,
        option1: [
        { text: '方式', value: 0 },
        { text: '全部', value: 1 },
        { text: '出售', value: 2 },
		{ text: '出租', value: 3 }
        ],
        option2: [
        { text: '分类', value: 'a' },
        { text: '1月', value: 'b' },
        { text: '2月', value: 'c' },
        ]
    }
  },
	methods: {
    onLoad() {
        this.loading = false; 
    },
	goodsdetail() {
	  this.$router.push({
		    path: '/goodsdetail'
	})
	},
	toggle() {
	  if (this.show) {
	    this.show = false;
	  } else {
	    this.show = true;
	  }
	}
  }
}
</script>
<style scoped>
	.nav{
		overflow: hidden;
		width: 100%;
		background: white;
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
		width: 100%;
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
	.hzsj{
    width: 90%;
    height: auto;
    margin: 0 auto;
    margin-top: 2%;
}
.square-inner {
    width: 100%;
    overflow: hidden;
}
.square-inner li:nth-child(2n-1) {
    margin-right: 1%;
    float: left;
}
.square-inner li {
    width: 49%;
    height: auto;
    margin-bottom: 2%;
    overflow: hidden;
    background: #FFFFFF;
    border-radius: 10px;
    padding-bottom: 10px;
}
.hot-rent-item img{
    width: 150px;
    height: auto;
    display: block;
    margin: 0px auto;
    margin-bottom: 15px;
}
.priceleft{
    margin: 0px 10px 5px 10px;
    font-size: 13px;
    color: #333333;
    display: block;
    text-align: justify;
	word-wrap: break-word;
    word-break: break-all;
    overflow: hidden;
}
.navv{
    overflow: hidden;
}
.cored{
    color: #E33B3E;
    font-size: 13px;
}
.leftnavv {
    float: left;
    margin-left: 10px;
}
.leftimg{
    float: left;
    width: 30%;
}
</style>