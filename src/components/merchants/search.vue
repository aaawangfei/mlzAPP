<template>
	<div style="text-align: center;">
	  <div class="nav">
	    <form action="/">
         <van-search v-model="value" shape="round" placeholder="采煤机配件降价" show-action @search="onSearch" @cancel="onCancel"/>
        </form>
	  </div>
	  <div class="nav">
	  	<span class="leftnav">搜索历史</span><span class="rightnav">图标</span>
	  </div>
	  <van-row>
       <van-col span="6">
	  <van-button class="submit" size="small" type="grey">轴承</van-button>
       </van-col>
       <van-col span="6">
	  <van-button class="submit" size="small" type="grey">思匠德</van-button>   
       </van-col>
       <van-col span="6">
	  <van-button class="submit" size="small" type="grey">采煤机</van-button>    
	   </van-col>
       <van-col span="6">
	  <van-button class="submit" size="small" type="grey">采煤机配件</van-button>
       </van-col>
	   <van-col span="6">
	  <van-button class="submit" size="small" type="grey">轴承</van-button>
	   </van-col>
	   <van-col span="6">
	  <van-button class="submit" size="small" type="grey">思匠德</van-button>
	   </van-col>
	   <van-col span="6">
	  <van-button class="submit" size="small" type="grey">采煤机</van-button>
	   </van-col>
	   <van-col span="6">
	  <van-button class="submit" size="small" type="grey">采煤机配件</van-button>
	   </van-col>
	  </van-row>
	<p class="more">更多搜索历史<van-icon name="arrow-down" /></p>
	<div class="nav">
		<span class="leftnav">搜索发现</span><span class="rightnav">图标</span>
	</div>
	<van-row>
	 <van-col span="6">
	<van-button class="submit" size="small" type="grey">轴承</van-button>
	 </van-col>
	 <van-col span="6">
	<van-button class="submit" size="small" type="grey">思匠德</van-button>   
	 </van-col>
	 <van-col span="6">
	<van-button class="submit" size="small" type="grey">采煤机</van-button>    
	 </van-col>
	 <van-col span="6">
	<van-button class="submit" size="small" type="grey">采煤机配件</van-button>
	 </van-col>
	 <van-col span="6">
	<van-button class="submit" size="small" type="grey">轴承</van-button>
	 </van-col>
	 <van-col span="6">
	<van-button class="submit" size="small" type="grey">思匠德</van-button>
	 </van-col>
	 <van-col span="6">
	<van-button class="submit" size="small" type="grey">采煤机</van-button>
	 </van-col>
	 <van-col span="6">
	<van-button class="submit" size="small" type="grey">采煤机配件</van-button>
	 </van-col>
	</van-row>
</div>
</template>

<script>
import Vue from 'vue';
import Vant from 'vant';
import 'vant/lib/index.css';
export default {
  data() {
    return {
      value:'',
	  onSearch:'',
	  onCancel:''
    }
  }
}
</script>
<style scoped>
	.nav{
		overflow: hidden;
		z-index: 1;
		position: relative;
	}
	.submit{
		width: 90%;
		border-radius: 20px;
		border: 0;
		margin-top: 20px;
		color: #999999;
		background-color:#EBEBEB;
		font-size: 13px;
	}
	.leftnav{
		float: left;
		margin-left: 16px;
		margin-top: 10px;
		font-weight: bold;
	}
	.rightnav{
		float: right;
		margin-right: 16px;
		margin-top: 10px;
	}
	.more{
		font-weight: bold;
		font-size: 10px;
		border-bottom: 1px solid #F2F2F2;
		padding-bottom: 10px;
	}
	.van-search{
		padding: 15px 16px;
	}
	.van-search__action{
		padding: 0;
	}
	.van-row{
		padding: 0 5px;
	}
</style>
