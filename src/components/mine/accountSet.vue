<template>
  <div style="background: #f2f2f2;height:100%;
        position:fixed; width: 100%;">


    <div>
      <van-nav-bar title="账户设置" left-arrow @click-left="onClickLeft" />
    </div>

    <div style="background: white; border-bottom-right-radius: 5px; border-bottom-left-radius:5px;overflow: hidden;">
      <div style="overflow: hidden;">
        <div class="imgleft">
          <van-image round width="5rem" height="5rem" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        </div>
        <div class="iwordright" @click="personinfo">
          <p style="float: left;color: #333333;">王花花</p>
          <p style="color: #333333;">15630037989</p>
        </div>
      </div>



      <div style="background: #f2f2f2; height: 1px;">


      </div>
      <div style="line-height: 50px;">
        <van-coupon-cell title="收货地址" value="" />



      </div>

    </div>
    <div style="height: 10px;">
    </div>
    <div style="background: white; border-radius:5px; overflow: hidden; ">
      <div style="overflow: hidden; line-height: 50px;" @click="accountSecurity">
        <van-coupon-cell title="账户安全" value="" />

       
      </div>
      <div style="background: #f2f2f2; height: 1px;" />
      <div style="overflow: hidden;line-height: 50px;" @click="feedback">
        <van-coupon-cell title="意见反馈" value="" />

        
      </div>
      <div style="background: #f2f2f2; height: 1px;" />
      <div style="overflow: hidden;line-height: 50px;">

<van-coupon-cell title="关于我们" value="" />
       
      </div>




    </div>
    <div style="margin-top:50px;background: red; line-height: 50px; text-align: center;">
      <span style="color: #F2F2F2;">退出登录</span>
    </div>



  </div>
</template>

<script>
  export default {
    methods: {
      onClickLeft() {
        this.$router.go(-1);
      },
      personinfo() {
        this.$router.push({
          path: "/personaInformation"
        })
      },
      accountSecurity() {
        this.$router.push({
          path: "/accountSecurity"
        })
      },
      feedback() {
        this.$router.push({
          path: "/feedBack"
        })
      }

    }
  }
</script>

<style scoped>
  .imgleft {
    float: left;
    padding: 10px;
  }

  .iwordright {
    float: left;


  }

  .ellipse {}
</style>
