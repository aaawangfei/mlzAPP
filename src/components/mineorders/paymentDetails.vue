<template>
  <div style="background: #f2f2f2; display: flex;flex-direction:column">
    <div class="lay">
      <van-icon style="margin-top: 20px; margin-left: 20px;" name="arrow-left" color="white" @click="onClickLeft" />
      <div class="text">
        等待付款
      </div>
      <div class="text1">
        剩余23小时30分钟
      </div>

    </div>

    <div style="background: white;border-radius:5px;height: 100px; ">
      <div style="display: flex;justify-content:flex-start;padding-top: 20px;">
        <van-icon style="margin-left: 10px;" name="location-o" />
        <span style="margin-left: 10px;color: #333333; font-size: 15px;">
          王华丽
        </span>
        <span style="margin-left: 10px;color: #333333; font-size: 15px;">
          15037485857
        </span>
      </div>

      <p style="margin-left: 10px; color: #666666; font-size: 13px;">
        陕西省西安市雁塔区墨渊小区123号
      </p>
    </div>



    <div style="height: 10px;"></div>
    <div style=" background: white; border-radius:5px;">

      <div style=" padding: 10px;">
        <div style="display: flex;justify-content:space-between">
          <span> 煤亮子商城</span>

        </div>
        <div style="display: flex; border-radius: 5px; margin-top: 10px;">

          <div style="margin-top: 10px;">
            <van-image width="100" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />
          </div>


          <div style="display: flex; justify-content: space-around;flex-direction: column;margin: 0px 8px;">
            <p style="font-size: 16px;
    color: #333333;">齿轨轮轴 CONCON0328-040328-04 0A78</p>

            <div style="display: flex;justify-content: space-between;">
              <span style="font-size: 13px;
    color: #333333;">￥3400</span>
              <span style="font-size: 13px;
    color: #333333;">1</span>
            </div>

          </div>
        </div>

      </div>
    </div>

    <div style="height: 10px;"></div>
    <div style="background: white;border-radius:5px; padding:10px;display: flex;flex-direction:column">
      <div style="display: flex; justify-content:flex-start;">
        <span class="textspan">订单编号：367859024257</span>
        <span class="textspan">复制</span>
      </div>
      <span class="textspan">下单时间：2019-09-12 12:1</span>
      <span class="textspan">支付方式：在线支付</span>
      <span class="textspan">配送方式：普通配送 预计6天后送达</span>
      <span class="textspan">发票类型：电子普通发票</span>
      <span class="textspan">发票抬头：个人</span>
      <span class="textspan">发票内容：商品明细</span>
      <div style="display: flex; justify-content:space-between;">
        <span class="textspan">产品金额</span>
        <span class="textspan">￥3476</span>
      </div>
      <div style="display: flex; justify-content:space-between;">
        <span class="textspan">运费</span>
        <span class="textspan">3</span>
      </div>
      <div style=" background: #F2F2F2; height: 1px;"></div>
      <div style="display: flex; justify-content:flex-end;line-height: 40px;">

        <span style="font-size: 13px;
    color: #666666;
    padding-top: 7px;">需付款 :</span>
        <span style="font-size: 13px;
    color: #E33B3E;
    padding-top: 7px;">￥3476</span>
      </div>
      <div style=" background: #F2F2F2; height: 1px;"></div>
      <div style="display: flex; justify-content:flex-end;padding-top: 10px;">
        <van-button class="Attribute" round hairline type="info" color="#666666" plain size="mini">取消订单</van-button>
        <van-button class="Attribute" round hairline type="info" color="#E33B3E" plain size="mini">去支付</van-button>



      </div>
    </div>








  </div>

</template>

<script>
  export default {
    methods:{
      onClickLeft() {
        console.log(this.active);
        this.$router.go(-1);
      },
    }
  }




</script>

<style scoped>
  .text {
    text-align: center;
    color: white;

  }

  .text1 {
    text-align: center;
    color: white;
    margin-top: 30px;
  }
  .textspan{
    font-size: 13px;
    color: #666666;
    padding-top: 7px;
  }



  .lay {

    width: 100%;
    background: #E33B3E;
    padding-bottom: 50px;
    /* 标准的语法 */

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
  }

  .ellipse {
    width: 100%;
    height: 90px;
    border-radius: 100%;

  }

  .Attribute {
    padding-right: 10px;
    padding-left: 10px;


  }
</style>
