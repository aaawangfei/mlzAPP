<template>
	<div style="background: #F2F2F2;">
		<van-nav-bar title="确认订单" left-text="" right-text="" left-arrow @click-left="onClickLeft" @click-right="onClickRight"/>
		<div class="hot-rent-item">
				 <div class="nav" @click="addresslist">
					 <div class="leftnav" style="margin-left: 13px;">
		         <span class="name">王华丽</span>
				 <span class="telphone">13034756384</span>
				 <span class="address">陕西省西安市雁塔区墨渊小区123号</span>
				 </div>
				 <span class="rightnav" style="margin-right: 13px;">
				 	<van-icon color="#969799" class="bartop" name="arrow" />
				 	</span>
					
				 </div>
		     </div>
			 <div class="hot-rent-item">
			 <div class="nav">
				 <span class="logtit">煤亮子商城</span>
					<div class="leftimg">
						<img class="img" src="../assets/Home/dxb.png" alt="">
					</div>
					<div class="rightwords">
						<p class="right">
							<span class="tit titlist">采煤机配件导向靶CON02</span>
							</p>
						<p>
									<span class="time timelist">￥3473</span>
							<van-stepper class="Introduction icontop" v-model="value" min="1" max="8" />
							</p>
					</div>
					</div>
					</div>
			 <div class="hot-rent-item" style="padding:12px 0 20px 0;">
				<div class="qrdd">
				 <van-cell value="在线支付" is-link :border="false" @click="showPopup">
                    <template slot="title">
                       <span class="custom-title">支付方式</span>
                    </template>
                 </van-cell>
				 <van-popup round v-model="show" position="bottom" :style="{ height: 'auto' }">
				 			<p class="Prodpara">支付方式</p>
							<div v-model="radio">
							<p class="Metment">
							<span name="1" class="times payment">在线支付</span>
							<span>支持微信、支付宝、银联方式</span>
							</p>
							<p class="Metment" style="margin-top: 30px;">
							<span name="2" class="times payment">合同支付</span>
							<span>可通过线下合同签订</span>
							</p>
							</div>
				 <van-button class="login" type="danger" size="large">确定</van-button>
				 </van-popup>
				 <van-cell value="电子发票" is-link :border="false" @click="showPopupp">
				    <template slot="title">
				       <span class="custom-title">发票</span>
				    </template>
				 </van-cell>
				 <van-popup round v-model="showw" position="bottom" :style="{ height: 'auto' }">
				      <p class="Prodpara">发票选择</p>
					  <p class="Invoicetype">发票类型</p>
					  <van-tabs :active="active" :border="false" color="#FFFFFF">
					    <van-tab>
					       <div slot="title" class="times">电子普通发票</div>
					    </van-tab>
					    <van-tab>
					       <div slot="title" class="times">增值税专用发票</div>
					    </van-tab>
					  </van-tabs>
					  <p class="Invoicetype">发票抬头</p>
					  <van-tabs :active="active1" :border="false" color="#FFFFFF">
                        <van-tab>
                           <div slot="title" class="times">个人</div>
                           <div style="margin-left: 13px;">
							   <van-cell-group :border="false">
								   <van-field value="王华丽" label="收票姓名" disabled :border="false" />
                               </van-cell-group>
							   <van-cell-group>
								   <van-field v-model="mail" label="邮件箱" placeholder="可发送邮箱" error :border="false" />
						       </van-cell-group>
						   </div>
                        </van-tab>
                        <van-tab>
                           <div slot="title" class="times">单位</div>
                           <div style="margin-left: 13px;">
                           	   <van-cell-group :border="false">
                           		   <van-field value="神南产业" label="单位名称" disabled :border="false" />
                               </van-cell-group>
                           	   <van-cell-group>
                           		   <van-field v-model="identification" label="纳税人识别码" placeholder="请再此填写纳税人识别号" error :border="false" />
                               </van-cell-group>
                           </div>
                        </van-tab>
                      </van-tabs>
					  <p class="Invoicetype">发票内容</p>
					  <van-tabs :active="active2" :border="false" color="#FFFFFF">
					    <van-tab>
					       <div slot="title" class="times">商品明细</div>
					    </van-tab>
					    <van-tab>
					       <div slot="title" class="times">商品类别</div>
					    </van-tab>
					  </van-tabs>
					  <van-button class="login" type="danger" size="large">确定</van-button>
				 </van-popup>
				 <div class="nav" style="margin-top: -6px;">
				 	<div class="leftnav">
				 <span class="custom-title">配送方式</span>
				 </div>
				 <span class="rightnav">
				 	<span class="van-cell__value">现在下单约6天后送达</span>
					<span class="van-cell__value">普通配送</span>
				 	</span>				
				 </div>
				 <div class="nav" style="margin-top: 6px;">
				 	<div class="leftnav">
				 <span class="custom-title">产品金额</span>
				 </div>
				 <span class="rightnav">
				 	<span class="van-cell__value">￥3476</span>
				 	</span>				
				 </div>
				 <div class="nav" style="margin-top: 6px;">
				 	<div class="leftnav">
				 <span class="custom-title">运费</span>
				 </div>
				 <span class="rightnav">
				 	<span class="van-cell__value">0</span>
				 	</span>				
				 </div>
				</div>
				<p class="total">小计:<span class="totalnum">￥3476</span></p>
				</div>
				<van-goods-action>
  <span class="totalbottom">总计:<span class="totalbottomnum">￥3476</span></span>
  <van-goods-action-button type="danger" size="mini" text="提交订单" />
</van-goods-action>
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
      current: 0,
	  show: false,
	  showw: false,
	  value:'',
	  radio: '1',
	  active: 1,
	  active1: 1,
	  active2: 1,
	  mail:'',
	  identification:''
    }
  },
	methods: {
	showPopup() {
      this.show = true;
    },
	showPopupp() {
	  this.showw = true;
	},
	onClickLeft() {
      
    },
    onClickRight() {
      
    },
	addresslist(){
		this.$router.push({
		    path: '/addresslist'
		})
	}
  }
}
</script>
<style scoped>
	.nav{
		overflow: hidden;
		width: 100%;
		background: #FFFFFF;
	}
	.leftnav{
		margin-top: 14px;
		font-size: 14px;
		float: left;
	}
	.rightnav{
		float: right;
		margin-top: 14px;
		margin-right: 5px;
	}
	.hot-rent-item, .hot-rent-ite{
		margin-bottom: 10px;
		padding-bottom: 1px;
		background: #FFFFFF;
	}
	.tit{
		text-align: left;
		margin-left: 10px;
	}
	.price{
		color: #E33B3E;
		font-size: 12px;
	}
	.titcolor{
		color: #333333;
		font-size: 14px;
		margin-top: -3px;
	}
	.timecolor{
		color: #999999;
		font-size: 10px;
		margin-top: -9px;
	}
	.icontop{
		margin-top: -2px;
		vertical-align:middle;
		margin-right: 5px;
	}
	.timecolor span{
		margin-right: 10px!important;
	}
	.custom-indicator{
		text-align: right;
		margin-right: 10px;
	}
	.van-cell{
		padding: 10px 3px 10px 0!important;
		color: #333333;
	}
	.position{
		margin-top: -3px;
		vertical-align:middle;
	}
	.loccolor{
		color: #666666;
		font-size: 14px;
	}
	.van-cell__title{
		text-align: left;
	}
	.leftimg{
		float: left;
		width: 30%;
	}
	.img{
		width: 80px;
		display: block;
		margin: 6px auto;
		text-align: center;
	}
	.rightwords{
		float: right;
		width: 70%;
	}
	.right{
		margin-top: 18px;
		text-align: left;
		margin-bottom: -16px;
	}
	.titt{
		float: left;
		margin-left: 10px;
		font-size: 14px;
		width: 100%;
	    text-align: left;
		margin-top: 3px;
		color: #333333;
		font-weight: 400;
	}
	.time{
		float: left;
	    margin-left: 10px;
		font-size: 15px;
	    text-align: left;
		margin-top: 10px;
		color: #E33B3E;
	}
	.Introduction{
		float: right;
		margin-right: 13px;
		margin-top: 2px;
	}
	.imgsize{
		width: 40px;
		height: 40px; 
		margin-bottom: 3px;
	}
	.morepad{
		padding: 10px 10px;
		text-align: center;
	}
	.small-size{
		color: #333333;
		font-size: 13px;
	}
	.modelmeter{
		margin-left: 40px;
		color: #333333;
	}
	.custom-title{
	   color:#666666!important;
	}
	.login{
		width: 90%;
		border-radius: 30px;
		border: 0;
		color: #FFFFFF;
		background-color:#E33B3E;
		display: block;
		margin: 0 auto;
	}
	.van-nav-bar__left{
		left: 12px!important;
	}
	.bartop{
		margin-top: 10px;
	}
	.address{
		display: block;
		margin-bottom: 14px;
		color: #666666;
		font-size: 13px;
	}
	.name{
		color: #333333;
		font-size: 14px;
	}
	.telphone{
		color: #333333;
		font-size: 12px;
	}
	.logtit{
		display: block;
		margin: 10px 0 0 13px;
		color: #333333;
		font-size: 14px;
	}
	.qrdd{
		margin: 0 10px 0 13px;
		border-bottom: 1px solid #F2F2F2;
		padding-bottom: 20px;
	}
	.total{
		text-align: right;
		margin-right: 13px;
		color: #333333;
		font-size: 14px;
	}
	.totalnum{
		color: #E33B3E;
		font-size: 12px;
	}
	.van-goods-action-button--last{
		margin-right: 13px;
	}
	.totalbottom{
		margin-left: 13px;
		text-align: left;
		margin-right: 100px;
		color: #333333;
		font-size: 15px;
	}
	.totalbottomnum{
		color: #E33B3E;
		font-size: 17px;
		font-weight: bold;
	}
	.Prodpara{
		text-align: center;
		color: #333333;
		font-weight: bold;
	}
	.times{
		border-radius: 20px;
		border: 1px solid #F2F2F2;
		background-color:#FFFFFF;
		cursor:pointer;
		margin-left: 8px;
		font-size: 13px;
		color: #666666;
		height: 39px;
		line-height: 39px;
		margin: 0 13px;
	}
	.Metment{
		font-size: 13px;
		color: #666666;
		margin-bottom: 30px;
	}
	.times:hover{
        color: #E33B3E;
		border: 1px solid #E33B3E;
    }
	.Invoicetype{
		margin-left: 16px;
		color: #333333;
		font-size:13px ;
		font-weight:bold;
	}
	.van-nav-bar .van-icon{
		color: #2c3e50;
	}
	.payment{
		padding: 10px 30px;
		margin-right: 5px;
	}
</style>
