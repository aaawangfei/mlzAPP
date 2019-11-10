<template>
  <div>
    <div>
      <van-nav-bar title="我的订单" left-arrow @click-left="onClickLeft" :border="false" />
    </div>

    <van-tabs v-model="active" :swipe-threshold="5" :border="false">
      <van-tab title="全部">
        <van-list v-model="loading" :finished="finished" @load="onLoad">
          <van-cell v-for="item in goods" :key="item.id" :name="item.id">
            <div style=" padding: 10px;">
              <!-- <div style="display: flex;justify-content:space-between">
                <span> 煤亮子商城</span>
                <span style="color: #E33B3E;"> 等待付款</span>
              </div> -->
              <div style="display: flex; border-radius: 5px; margin-top: 10px;">

                <div style="margin-top: 10px;">
                  <van-image width="100" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />
                </div>


                <div style="display: flex; justify-content: space-around;flex-direction: column;margin: 0px 8px;">
                  <p>齿轨轮轴 CONCON0328-040328-04 0A78</p>

                  <div style="display: flex;justify-content: space-between;">
                    <span>￥3400</span>
                    <span>X1</span>

                  </div>




                </div>
              </div>
              <div style="display: flex;justify-content:flex-end">
                <van-button class="Attribute" round hairline type="info" color="#666666" plain size="mini">申请退款</van-button>

                <van-button class="Attribute" round hairline type="info" color="#E33B3E" plain size="mini">提醒发货</van-button>





              </div>
            </div>

          </van-cell>

        </van-list>
      </van-tab>
      <van-tab title="待付款">
        <van-list v-model="loading" :finished="finished" @load="onLoad">
          <van-cell v-for="item in goods" :key="item.id" :name="item.id" @click="checkpayment()">
            <div style=" padding: 10px;">
              <div style="display: flex;justify-content:space-between">
                <span> 煤亮子商城</span>
                <span style="color: #E33B3E;"> 等待付款</span>
              </div>
              <div style="display: flex; border-radius: 5px; margin-top: 10px;">

                <div style="margin-top: 10px;">
                  <van-image width="100" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />
                </div>


                <div style="display: flex; justify-content: space-around;flex-direction: column;margin: 0px 8px;">
                  <p>齿轨轮轴 CONCON0328-040328-04 0A78</p>

                  <p>￥3400</p>


                </div>
              </div>
              <div style="display: flex;justify-content:flex-end">

                <van-button class="Attribute" round hairline type="info" color="#E33B3E" plain size="mini">去支付</van-button>


              </div>
            </div>

          </van-cell>

        </van-list>


      </van-tab>

      <van-tab title="待发货">
        <van-list v-model="loading" :finished="finished" @load="onLoad">
          <van-cell v-for="item in goods" :key="item.id" :name="item.id" @click="shippingDetails()">
            <div style=" padding: 10px;">
              <div style="display: flex;justify-content:space-between">
                <span> 煤亮子商城</span>
                <span style="color: #E33B3E;"> 等待付款</span>
              </div>
              <div style="display: flex; border-radius: 5px; margin-top: 10px;">

                <div style="margin-top: 10px;">
                  <van-image width="100" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />
                </div>


                <div style="display: flex; justify-content: space-around;flex-direction: column;margin: 0px 8px;">
                  <p>齿轨轮轴 CONCON0328-040328-04 0A78</p>

                  <div style="display: flex;justify-content: space-between;">
                    <span>￥3400</span>
                    <span>X1</span>

                  </div>




                </div>
              </div>
              <div style="display: flex;justify-content:flex-end">
                <van-button class="Attribute" round hairline type="info" color="#666666" plain size="mini">申请退款</van-button>

                <van-button class="Attribute" round hairline type="info" color="#E33B3E" plain size="mini">提醒发货</van-button>





              </div>
            </div>

          </van-cell>

        </van-list>
      </van-tab>
      <van-tab title="待收货">
        <van-list v-model="loading" :finished="finished" @load="onLoad">
          <van-cell v-for="item in goods" :key="item.id" :name="item.id">
            <div style=" padding: 10px;">
              <div style="display: flex;justify-content:space-between">
                <span> 煤亮子商城</span>
                <span style="color: #E33B3E;"> 等待收货</span>
              </div>
              <div style="display: flex; border-radius: 5px; margin-top: 10px;">

                <div style="margin-top: 10px;">
                  <van-image width="100" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />
                </div>


                <div style="display: flex; justify-content: space-around;flex-direction: column;margin: 0px 8px;">
                  <p>齿轨轮轴 CONCON0328-040328-04 0A78</p>

                  <div style="display: flex;justify-content: space-between;">
                    <span>￥3400</span>


                  </div>




                </div>
              </div>
              <div style="display: flex;justify-content:flex-end">


                <van-button class="Attribute" round hairline type="info" color="#E33B3E" plain size="mini">查看物流</van-button>





              </div>
            </div>

          </van-cell>

        </van-list>

      </van-tab>
      <van-tab title="已完成">
        <van-list v-model="loading" :finished="finished" @load="onLoad">
          <van-cell v-for="item in goods" :key="item.id" :name="item.id">
            <div style=" padding: 10px;">
              <div style="display: flex;justify-content:space-between">
                <span> 煤亮子商城</span>
                <span style="color: #E33B3E;"> 已完成</span>
              </div>
              <div style="display: flex; border-radius: 5px; margin-top: 10px;">

                <div style="margin-top: 10px;">
                  <van-image width="100" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />
                </div>


                <div style="display: flex; justify-content: space-around;flex-direction: column;margin: 0px 8px;">
                  <p>齿轨轮轴 CONCON0328-040328-04 0A78</p>

                  <div style="display: flex;justify-content: space-between;">
                    <span>￥3400</span>


                  </div>




                </div>
              </div>
              <div style="display: flex;justify-content:flex-end">


                <van-button class="Attribute" round hairline type="info" color="#E33B3E" plain size="mini">再次购买</van-button>





              </div>
            </div>

          </van-cell>

        </van-list>

      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
  import Vue from 'vue';
  import {
    List
  } from 'vant';
  import {
    PullRefresh
  } from 'vant';

  Vue.use(PullRefresh);

  Vue.use(List);
  export default {

    data() {
      return {
        active: this.$route.query.active,
        loading: false,
        finished: true,
        onLoad: false,
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


      };

    },
    methods: {

      onClickLeft() {
        console.log(this.active);
        this.$router.go(-1);
      },
      checkpayment() {
        this.$router.push({

            path: "/paymentDetails",

          }

        );
      },
      shippingDetails(){
        this.$router.push({
        
            path: "/shippingDetails",
        
          }
        
        );
      }


    }
  }
</script>

<style scoped>
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
    border-radius: 5px;
    background-color: #FFFFFF;
  }

  .Attribute {
    padding-right: 10px;
    padding-left: 10px;


  }
</style>
