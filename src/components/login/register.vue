<template>
	<div>
	<div class="nav">
		<span class="leftnav">
			<van-icon name="cross" /></span>
	</div>
	<p class="title">注册</p>
	<van-cell-group>
  <van-field
    v-model="phone"
	label="+86"
	class="phone"
    placeholder="请输入手机号码"
  />
  <van-icon class="phoneicon" name="arrow-down" />
  <van-field
    v-model="yzm"
    center
    clearable
	style="color: #999999;"
    placeholder="验证码"
  >
    <van-button class="getyzm" slot="button" size="small">获取验证码</van-button>
  </van-field>
	<van-field
	  v-model="password"
	  style="color: #999999;"
	  placeholder="密码"
	  right-icon="closed-eye"
	/>
</van-cell-group>
<van-button class="register" type="grey" size="large">注册</van-button>
<p class="agree">注册即表示同意<span style="color: #E33B3E;">《煤亮子商城》</span>服务条款</p>
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
      password:'',
      yzm:''
    }
  }
}
</script>
<style scoped>
	.leftnav{
		float: left;
		margin-left: 13px;
		margin-top: 15px;
	}
	.van-field__left-icon {
    margin-right: -81px!important;
    margin-left: 34px!important;
  }
	.nav{
		overflow: hidden;
		z-index: 1;
		position: relative;
	}
	.title{
		text-align: left;
		margin-left: 15px;
	}
	.getyzm{
		color: #E33B3E;
		border: 0;
	}
	.register{
		width: 90%;
		border-radius: 30px;
		border: 0;
		color: #999999;
		background-color:#EBEBEB;
		display: block;
		margin: 0 auto;
	}
	.van-cell-group{
		margin-bottom: 40px;
	}
	.agree{
		text-align: left;
		margin-left: 5%;
		color: #888888;
	}
	.phone{
		position: relative;
	}
	.phoneicon{
		position: absolute;
		left: 57px;
		top:12px;
	}
	.van-button--small{
		padding: 0;
	}
</style>
