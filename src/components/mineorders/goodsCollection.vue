<template>

  <div >

    <div>
      <van-nav-bar title="商品收藏" :right-text="titile" @click-right="onClickRight" :border="false" left-arrow @click-left="onClickLeft"/>
    </div>

    <div class="allfix">
      <div>
        <van-list v-model="loading" :finished="finished" @load="onLoad">
          <van-cell v-if="show" v-for="item in goods" :key="item.id" :name="item.id">
            <div style=" padding: 10px;">
              <div style="display: flex; border-radius: 5px;">
                <div>

                    <div>
                      <van-image width="100" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />
                    </div>
                  </van-checkbox>
                </div>
                <div style="display: flex; justify-content: space-between;flex-direction: column;margin: 0px 8px;">
                  <p>齿轨轮轴 CONCON0328-040328-04 0A78</p>
                  <div style="display: flex;justify-content: space-between;">
                    <p>￥3400</p>
                    <p>

                      <van-icon name="shopping-cart-o" />
                    </p>

                  </div>
                </div>
              </div>
            </div>

          </van-cell>
          <van-cell v-else v-for="item in goods" :key="item.id" :name="item.id">
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
                  <div style="display: flex;justify-content: space-between;">
                    <p>￥3400</p>
                    <p>

                      <van-icon name="shopping-cart-o" />
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </van-cell>

        </van-list>
      </div>



        <div v-if="!show" class="van-submit-bar">

          <van-checkbox v-model="checked">全选</van-checkbox>

          <span style="text-align: -moz-center; width: 40%;"></span>
          <span style="text-align: -moz-center;width: 40%"> 删除</span>
        </div>




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
        titile: "编辑",
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
          this.titile="完成";
          this.show = false;
        } else {
          this.titile="编辑";
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

  .allfix {

    display: flex;

    justify-content: space-between;


  }

  div {
    text-align: center
  }

  .van-submit-bar {
    padding-left: 20px;



    line-height: 50px;
    display: flex;

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
    border-radius: 5px;
    background-color: #FFFFFF;
  }
</style>
