<template>
	<div>
	<div class="nav">
		<span class="leftnav">
			<van-icon name="cross" /></span>
	</div>
	<p class="czpassword">重置密码</p>
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
	  right-icon="eye-o"
	/>
</van-cell-group>
<van-button class="submit" type="grey" size="large">提交</van-button>
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
		margin-left: 10px;
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
	.czpassword{
		text-align: left;
		margin-left: 15px;
	}
	.submit{
		width: 90%;
		border-radius: 30px;
		border: 0;
		color: #999999;
		background-color:#EBEBEB;
		display: block;
		margin: 0 auto;
	}
	.getyzm{
		color: #E33B3E;
		border: 0;
	}
	.van-cell-group{
		margin-bottom: 40px;
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
