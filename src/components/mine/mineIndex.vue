<template>
  <div style="background: #f2f2f2;">
    <div class="lay">
      <div class="header">
        <p style="overflow: hidden;">
          <span style="float: right;margin: 10px">
            <van-icon size="20px" name="chat" info="99+" />
          </span>
          <span style="float: right;margin: 10px ;">
            <van-icon size="20px" name="setting-o" @click="setting" />
          </span>



        </p>
      </div>
      <div style="overflow: hidden; ">
        <div class="imgleft">
          <van-image round width="5rem" height="5rem" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        </div>
        <div class="iwordright">
          <p style="float: left;color: white;">王花花</p>
          <p style="color: white;">15630037989</p>
        </div>
      </div>
      <div class="footer">
        <van-row class="taxtcolor">
          <van-col span="8" @click="togoodsCollection()">
            <div>
              <p>123</p>
              <p>产品收藏</p>
            </div>
          </van-col>
          <van-col span="8">
            <div>
              <p>4</p>
              <p>关注品牌</p>
            </div>
          </van-col>
          <van-col span="8" @click="tobrowseRecord()">
            <div>
              <p>4</p>
              <p>浏览记录</p>
            </div>
          </van-col>
        </van-row>
      </div>
    </div>
    <div style="height: 10px;"></div>

    <div style="background: white;border-radius:5px; padding-top: 2px;">
      <div style="line-height: 50px;" @click="viewall()">
        <van-coupon-cell title="我的订单" value="查看全部" />

      </div>
      <div style="height: 1px;background: #F2F2F2;"></div>
      <van-grid :column-num="4" :border="false" gutter="3" :square="false">

        <van-grid-item @click="tomineorderpayment" icon="photo-o" text="待付款" />
        <van-grid-item @click="tomineordersendgoods" icon="photo-o" text="待发货" />
        <van-grid-item @click="tomineorderreceivedgoods" icon="photo-o" text="待收货" />
        <van-grid-item @click="tomineorderrefund" icon="photo-o" text="退款/售后" />
      </van-grid>
    </div>
    <div style="height: 10px;"></div>

    <div style="border-radius:5px;height: 100px; padding-top: 2px;padding: 3px;" @click="enterpriseCertification">
      <img class="ellipse" src="https://img.yzcdn.cn/vant/cat.jpeg" />

    </div>
    <div style="height: 10px;"></div>

    <div style="background: white;border-radius:5px; padding-top: 2px;">
      <p style="float: left; height: 10px;padding-left: 20px;">我的应用</p>

      <p style="background: #f2f2f2;width: 100%;height: 1px; float: left; "></p>
      <van-grid :column-num="4" :border="false" gutter="3" :square="false">

        <van-grid-item icon="photo-o" text="合同管理" />
        <van-grid-item icon="photo-o" text="需求发布" />
        <van-grid-item icon="photo-o" text="采购单" />

      </van-grid>
    </div>
    <div style="height: 10px;"></div>
    <div style="height: 10px;"></div>

    <div style="background: white;border-radius:5px; padding-top: 2px; margin-bottom: 50px;">

      <p style="float: left; height: 10px;padding-left: 20px;">服务应用</p>

      <p style="background: #f2f2f2;width: 100%;height: 1px; float: left;"></p>

      <van-grid :column-num="4" :border="false" gutter="3" :square="false">

        <van-grid-item icon="photo-o" text="库存项目" />
        <van-grid-item icon="photo-o" text="代理销售" />
        <van-grid-item icon="photo-o" text="预付款项目" />
        <van-grid-item icon="photo-o" text="提货单查询" />
        <van-grid-item icon="photo-o" text="收款单查询" />
        <van-grid-item icon="photo-o" text="盈利测算" />

      </van-grid>





    </div>
    <div style="height: 10px;"></div>
    <div>
      <van-tabbar active-color="#E33B3E" inactive-color="#000" v-model="active">
        <van-tabbar-item replace to="/" icon="home-o">首页</van-tabbar-item>
        <van-tabbar-item replace to="/apps" icon="apps-o">分类</van-tabbar-item>
        <van-tabbar-item replace to="/orders" icon="orders-o">求购</van-tabbar-item>
        <van-tabbar-item replace to="/cart" icon="cart-o">购物车</van-tabbar-item>
        <van-tabbar-item replace to="/contact" icon="contact">我的</van-tabbar-item>
        <router-view />
      </van-tabbar>
    </div>

  </div>

</template>

<script>
  import Vue from 'vue';
  import {
    Grid,
    GridItem
  } from 'vant';

  Vue.use(Grid).use(GridItem);
  export default {


    data() {
      return {
        active: 4,


      }
    },
    computed: {

    },
    methods: {

      tomineorderpayment() {
        this.$router.push({

            path: "/mineOrder",
            query: {
              active: 1
            }
          }

        );
      },
      viewall(){
this.$router.push({

            path: "/mineOrder",
            query: {
              active: 0
            }
          }

        );
      },
      tobrowseRecord() {
        this.$router.push({

            path: "/browseRecord",
            // query: {
            //   active: 1
            // }
          }

        );
      },
      togoodsCollection() {
        this.$router.push({

            path: "/goodsCollection",
            // query: {
            //   active: 1
            // }
          }

        );
      },

      tomineordersendgoods() {
        this.$router.push({

            path: "/mineOrder",
            query: {
              active: 3
            }
          }

        );
      },
      tomineorderreceivedgoods() {
        this.$router.push({

            path: "/mineOrder",
            query: {
              active: 2
            }
          }

        );
      },
      tomineorderrefund() {
        this.$router.push({

            path: "/mineOrder",
            query: {
              active: 4
            }
          }

        );
      },

      setting() {
        console.log("dsalfkjd");


        this.$router.push({
          path: "/accountSet"
        })


      },
      enterpriseCertification() {
        this.$router.push({
          path: "/enterpriseCertification"
        })
      }




    }
  }
</script>

<style scoped>
  .lay {
    margin-top: -17px !important;
    background: red;
    width: 100%;
  }

  .imgleft {
    float: left;

    padding: 10px
  }

  .iwordright {
    float: left;
  }

  .taxtcolor {
    color: white;
    margin-left: 40px;
  }

  .ellipse {
    width: 100%;
    height: 90px;
    border-radius: 100%;

  }
</style>
