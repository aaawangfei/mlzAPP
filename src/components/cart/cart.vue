<template>
  <div style="background: #F2F2F2;margin-bottom: 120px;">
      <van-nav-bar title="购物车" right-text="编辑" @click-right="onClickRight" />
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <van-cell v-for="item in goods" :key="item.id" :name="item.id">
          <div style="float: left;width: 44%;">
            <van-checkbox name="item" v-model="item.checked"> 
                <img width="100" src="../../assets/Home/cglz.png" />
            </van-checkbox>
          </div>
          <div style="float: right;width: 56%;margin-top: 11px;">
            <span style="width: 100%;display: block;word-wrap: break-word;word-break: break-all;overflow: hidden;">齿轨轮轴 CONCON0328-040328-04 0A78</span>
            <div style="overflow: hidden;">
              <span style="float: left;color: #E33B3E;line-height: 28px;">￥3400</span>
              <van-stepper style="float: right;" v-model="item.num" />
            </div>
          </div>
        </van-cell>
      </van-list>
          <div class="submi-bar__bar">
            <div v-if="show" class="van-submit-bar">
              <van-checkbox style="text-align:left; width:30%;" v-model="checked">全选</van-checkbox>
              <span style="text-align:right; width:40%;"> 合计:￥7386</span>
              <span style="text-align:right; width:40%;margin-right: 35px;">
				  <van-button round color="#E33B3E">去结算(3)</van-button>
			  </span>
            </div>
            <div v-else class="van-submit-bar">
          
              <van-checkbox style="text-align:left; width:30%;" v-model="checked">全选</van-checkbox>
          
              <span style="text-align:right; width:40%;"></span>
              <span style="text-align:right; width:40%;margin-right: 35px;">
				  <van-button style="padding: 0 24px;" round color="#E33B3E" plain>删除</van-button>
			  </span>
            </div>
          </div>
     <van-tabbar active-color="#E33B3E" inactive-color="#000" v-model="active">
       <van-tabbar-item replace to="/" icon="home-o">首页</van-tabbar-item>
       <van-tabbar-item replace to="/apps" icon="apps-o">分类</van-tabbar-item>
       <van-tabbar-item replace to="/orders" icon="orders-o">求购</van-tabbar-item>
       <van-tabbar-item icon="cart-o">购物车</van-tabbar-item>
     	<van-tabbar-item replace to="/mineIndex" icon="contact">我的</van-tabbar-item>
     	<router-view />
     </van-tabbar>
  </div>
</template>
<script>
  import Vue from 'vue';
  import Vant from 'vant';
  import {
    Tabbar,
    TabbarItem
  } from 'vant';
  import 'vant/lib/index.css';
  import {
    Checkbox,
    CheckboxGroup,
    Card,
    SubmitBar,
    Toast
  } from 'vant';
  Vue.use(Vant);
  Vue.use(Tabbar).use(TabbarItem);
  export default {
    components: {
      [Card.name]: Card,
      [Checkbox.name]: Checkbox,
      [SubmitBar.name]: SubmitBar,
      [CheckboxGroup.name]: CheckboxGroup
    },

    data() {
      return {
        active: 3,
        checkedGoods: ['1', '2', '3'],
        goods: [{
            id: '1',
            title: '进口香蕉',
            desc: '约250g，2根',
            price: 200,
            num: 1,
            checked: true,
            thumb: 'https://img.yzcdn.cn/public_files/2017/10/24/2f9a36046449dafb8608e99990b3c205.jpeg'
          },
          {
            id: '1',
            title: '进口香蕉',
            desc: '约250g，2根',
            price: 200,
            num: 1,
            checked: true,
            thumb: 'https://img.yzcdn.cn/public_files/2017/10/24/2f9a36046449dafb8608e99990b3c205.jpeg'
          },
          {

            id: '2',
            title: '陕西蜜梨',
            desc: '约600g',
            price: 690,
            num: 1,
            checked: true,
            thumb: 'https://img.yzcdn.cn/public_files/2017/10/24/f6aabd6ac5521195e01e8e89ee9fc63f.jpeg'
          }, {
            id: '3',
            title: '美国伽力果',
            desc: '约680g/3个',
            price: 2680,
            num: 1,
            checked: true,
            thumb: 'https://img.yzcdn.cn/public_files/2017/10/24/320454216bbe9e25c7651e1fa51b31fd.jpeg'
          }
        ],

        list: [],
        loading: false,
        finished: false,
        isLoading: false,
        checked: true,
        show: true
      }
    },
    computed: {
      submitBarText() {
        const count = this.checkedGoods.length;
        return '结算' + (count ? `(${count})` : '');
      },
      totalPrice() {
        return this.goods.reduce((total, item) => total + (this.checkedGoods.indexOf(item.id) !== -1 ? item.price : 0),
          0);
      }
    },
    methods: {
      formatPrice(price) {
        return (price / 100).toFixed(2);
      },
      onSubmit() {
        Toast('点击结算');
      },

      onClickRight() {
        if (this.show) {
          this.show = false;
        } else {
          this.show = true;
        }


      },
      checkAll() {
        this.$refs.checkboxGroup.toggleAll(true);
      },
      toggleAll() {
        this.$refs.checkboxGroup.toggleAll();
      },


      onRefresh() {
        setTimeout(() => {
          this.$toast('刷新成功');
          this.isLoading = false;
          this.count++;
        }, 500);
      },
      toggle(index) {
        this.$refs.checkboxes[index].toggle();
      },

      onLoad() {
        // 异步更新数据
        setTimeout(() => {
          for (let i = 0; i < 10; i++) {
            this.list.push(this.list.length + 1);
          }
          // 加载状态结束
          this.loading = false;

          // 数据全部加载完成
          if (this.list.length >= 10) {
            this.finished = true;
          }
        }, 500);
      }
    }
  }
</script>
<style lang="less" scoped>
  p {
    margin: 0px 0px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .cell-text {
    margin: 0px 0px 0px 0px;
    text-align: left;
    /* width:100% ; */
    padding-left: 8px;

  }

  .card-goods {
    padding: 10px 0;
    background-color: #fff;
    &__item {
      position: relative;
      background-color: #fafafa;
      .van-checkbox__label {
        width: 100%;
        height: auto; // temp
        padding: 0 10px 0 15px;
        box-sizing: border-box;
      }
      .van-checkbox__icon {
        top: 50%;
        left: 10px;
        z-index: 1;
        position: absolute;
        margin-top: -10px;
      }
      .van-card__price {
        color: #f44;
      }
    }
  }
  .van-submit-bar {
    bottom: 50px !important;
	padding: 10px 0;
  }
  .van-submit-bar__button{
	  margin-right: 16px;
	  border-radius: 40px;
  }
  .van-cell{
	  background: #F2F2F2;
	  padding: 0 16px 10px 16px;
  }
  .van-cell__value--alone{
	  background: #FFFFFF;
	  padding: 10px 6px 5px 6px;
	  border-radius: 5px;
  }
  .van-nav-bar{
	  background: #F2F2F2;
  }
  .van-button--large{
	  line-height: 50px;
    }
  .submi-bar__bar {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    // position: absolute;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    -webkit-box-pack: end;
    -webkit-justify-content: flex-end;
    justify-content: flex-end;
    // height: 50px;
    // font-size: 14px;
    // left: 0px;
    // right: 0px;
    // bottom: 50px;
  }
  .van-submit-bar {
    padding-left: 20px;



    line-height: 50px;
    display: flex;
    bottom: 50px!important;
  }


  .van-bar {
    padding-left: 20px;



    line-height: 50px;
    display: flex;
    bottom: 55px !important;
  }

  .van-list {
    // margin-bottom: 100px;
  }
  .van-cell {
      background: #f2f2f;
      position: relative;
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      box-sizing: border-box;
      width: 100%;

      overflow: hidden;
      color: #323233;
      font-size: 14px;
      line-height: 24px;
      background-color: #F2F2F2;
  }
  .van-cell__value--alone {
      color: #323233;
      text-align: left;
      border-radius:5px ;
      background-color: #FFFFFF;
  }
  .van-button--normal{
	  padding: 0 16px;
	  font-size: 16px;
  }
</style>
