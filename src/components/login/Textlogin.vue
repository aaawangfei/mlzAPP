<template>
	<div>
	<div class="nav">
		<span class="leftnav">
			<van-icon name="cross" /></span>
	</div>
	<p class="dxlogin">短信登录</p>
	<van-cell-group>
  <van-field
    v-model="phone"
		right-icon="arrow-down"
		label="+86"
    placeholder="请输入手机号码"
  />
  <van-field
    v-model="yzm"
    center
    clearable
		style="color: #999999;"
    placeholder="输入验证码"
  >
    <van-button class="time" slot="button" size="mini">20s</van-button>
  </van-field>
	
</van-cell-group>
<van-button class="login" type="danger" size="large">登录</van-button>
<p class="cxget">没收到验证码？等倒计时结束后重新获取</p>
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
      yzm:''
    }
  }
}
</script>


<style scoped>
	.leftnav{
		float: left;
		margin-left: 10px;
		margin-top: 10px;
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
	.dxlogin{
		text-align: left;
		margin-left: 15px;
	}
	.time{
		color: #999999;
		border-radius: 20px;
	}
	.login{
		width: 90%;
		border-radius: 30px;
		border: 0;
		margin-top: 40px;
		color: #FFFFFF;
		background-color:#E33B3E;
	}
	.cxget{
		text-align: left;
		margin-left: 5%;
		color: #888888;
	}
</style>
