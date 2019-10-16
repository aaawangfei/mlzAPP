<template>
	<div>
	<div class="nav">
		<span class="leftnav">
			<van-icon name="cross" /></span>
			<span class="rightnav">注册</span>
	</div>
	<p class="title">你好，欢迎来到煤亮子商城</p>
	<van-cell-group>
  <van-field
    v-model="phone"
    placeholder="手机号"
  />
  <van-field
    v-model="password"
  	placeholder="密码"
  />
  </van-field>
	<span class="prompt">
		<span class="leftna">短信登录</span>
		<span class="rightna">忘记密码？</span>
		</span>
</van-cell-group>
<van-button class="login" type="danger" size="large">登录</van-button>
</div>
</template>

<script>
import Vue from 'vue';
import Vant from 'vant';
import 'vant/lib/index.css';
export default {
  data() {
    return {
      phone:'',
			password:''
    }
  }
}
</script>


<style scoped>
	.leftna{
		float: left;
		margin-left: 15px;
		margin-top: 10px;
		color: #333333;
		font-weight: bold;
		font-size: 10px;
	}
	.rightna{
		float: right;
		margin-right: 15px;
		margin-top: 10px;
		color: #666666;
		font-size: 10px;
	}
	.leftnav{
		float: left;
		margin-left: 10px;
		margin-top: 10px;
	}
	.rightnav{
		float: right;
		margin-right: 10px;
		margin-top: 10px;
	}
	.van-field__left-icon {
    margin-right: -81px!important;
    margin-left: 34px!important;
  }
	.title{
		text-align: left;
		margin-left: 15px;
		color: #333333;
		font-weight: bold;
	}
	.nav{
		overflow: hidden;
		z-index: 1;
		position: relative;
	}
	.prompt{
		margin-top: -5px;
		display: block;
	}
	.login{
		width: 90%;
		border-radius: 30px;
		border: 0;
		margin-top: 40px;
		color: #FFFFFF;
		background-color:#E33B3E;
	}
</style>
