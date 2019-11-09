<template>
	<div>
		<van-nav-bar title="收货地址" left-text="" right-text="" left-arrow @click-left="onClickLeft" @click-right="onClickRight"/>
		<van-address-list v-model="chosenAddressId" :list="list" add-button-text="＋创建新地址" @add="onAdd" @edit="onEdit"/>
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
      chosenAddressId: '1',
      list: [
        {
          id: '1',
          name: '张三',
          tel: '13000000000',
          address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
        },
        {
          id: '2',
          name: '李四',
          tel: '1310000000',
          address: '浙江省杭州市拱墅区莫干山路 50 号'
        }
      ]
    }
  },
  methods: {
    onAdd() {
      this.$router.push({
        path: '/address'
      })
    },
    onEdit(item, index) {
     this.$router.push({
       path: '/editaddress'
     })
    },
	onClickLeft() {
	  Toast('返回');
	},
	onClickRight() {
	  Toast('按钮');
	}
  }
}
</script>
<style scoped>
	.van-nav-bar .van-icon{
		color: #2c3e50;
	}
</style>
