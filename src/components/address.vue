<template>
	<div>
		<van-nav-bar title="添加收货地址" left-text="" right-text="删除" left-arrow @click-left="onClickLeft" @click-right="onClickRight"/>
		<van-address-edit :area-list="areaList" show-set-default show-search-result :search-result="searchResult" @save="onSave" @change-detail="onChangeDetail"/>
</div>
</template>
<script>
import areaList from '../router/area.js';
import Vue from 'vue';
import Vant from 'vant';
import 'vant/lib/index.css';
import { AddressEdit } from 'vant';
import { Area } from 'vant';
Vue.use(Area);
Vue.use(AddressEdit);
Vue.use(Vant);
export default {
  data() {
    return {
			areaList,
      searchResult: [],
    }
  },
  methods: {
    onSave() {
      Toast('save');
    },
    onDelete() {
      Toast('delete');
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [{
          name: '黄龙万科中心',
          address: '杭州市西湖区'
        }];
      } else {
        this.searchResult = [];
      }
    },
		onClickLeft() {
      Toast('返回');
    },
	onClickRight() {
	  this.$dialog.alert({
         title: "确定要删除么", //加上标题
         message: "", //改变弹出框的内容
         showCancelButton: true //展示取水按钮
    })
    .then(() => { //点击确认按钮后的调用
         console.log("点击了确认按钮噢")
    })
    .catch(() => { //点击取消按钮后的调用
         console.log("点击了取消按钮噢")
    })
  }
 }
}
</script>
<style scoped>
	.van-nav-bar .van-icon,.van-nav-bar__text{
		color: #2c3e50;
	}
</style>
