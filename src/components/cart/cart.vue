<template>

  <div>

      <div >
        <van-nav-bar title="购物车" right-text="编辑" @click-right="onClickRight" :border="false" />
      </div>

      <div style="margin-bottom: 100px;">

        <van-list v-model="loading" :finished="finished" @load="onLoad">
          <van-cell v-for="item in goods" :key="item.id" :name="item.id">
            <div style=" padding: 10px;">
              <div style="display: flex; border-radius: 5px;">
                <div>
                  <van-checkbox name="item" v-model="item.checked">
                    <div>
                      <van-image width="100" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />
                    </div>
                  </van-checkbox>
                </div>
                <div style="display: flex; justify-content: space-between;flex-direction: column;margin: 0px 8px;">
                  <p>齿轨轮轴 CONCON0328-040328-04 0A78</p>
                  <div style="display: flex;justify-content: flex-star;">
                    <span>￥3400</span>
                    <van-stepper style="margin-left: 10%;" v-model="item.num" />
                  </div>
                </div>
              </div>
            </div>

          </van-cell>

        </van-list>


      </div>



      <div>
        <div>
          <div class="submi-bar__bar">
            <div v-if="show" class="van-submit-bar">
              <van-checkbox v-model="checked">全选</van-checkbox>
              <span style="text-align: -moz-center; width: 40%;"> 合计:￥7386</span>
              <span style="text-align: -moz-center; width: 40%;"> 去结算</span>
            </div>
            <div v-else class="van-submit-bar">

              <van-checkbox v-model="checked">全选</van-checkbox>

              <span style="text-align: -moz-center; width: 40%;"></span>
              <span style="text-align: -moz-center;width: 40%"> 删除</span>
            </div>


            <!-- <van-submit-bar :price="totalPrice" :disabled="!checkedGoods.length" :button-text="submitBarText" @submit="onSubmit" /> -->
          </div>


        </div>


      </div>
      <div>
        <van-tabbar active-color="#E33B3E" inactive-color="#000" v-model="active">
          <van-tabbar-item replace to="/" icon="home-o">首页</van-tabbar-item>
          <van-tabbar-item replace to="/apps" icon="apps-o">分类</van-tabbar-item>
          <van-tabbar-item replace to="/orders" icon="orders-o">求购</van-tabbar-item>
          <van-tabbar-item icon="cart-o">购物车</van-tabbar-item>
          <van-tabbar-item replace to="/contact" icon="contact">我的</van-tabbar-item>
          <router-view />
        </van-tabbar>
      </div>

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
     //bottom: 50px;
  }

  div {
    text-align: center
  }

  .van-submit-bar {
    padding-left: 20px;



    line-height: 50px;
    display: flex;
    bottom: 50px !important;
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
</style>
