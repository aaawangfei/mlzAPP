<template>
  <div style="background: #f2f2f2;">
    

    <div>
      <van-nav-bar title="账户设置" left-arrow @click-left="onClickLeft" />
    </div>

    <div style="background: white; border-bottom-right-radius: 5px; border-bottom-left-radius:5px;overflow: hidden;">
      <div style="overflow: hidden;">
        <div class="imgleft">
          <van-image round width="5rem" height="5rem" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        </div>
        <div class="iwordright">
          <p style="float: left;color: #333333;">王花花</p>
          <p style="color: #333333;">15630037989</p>
        </div>
      </div>



      <div style="background: #f2f2f2; height: 1px;">


      </div>
      <div style="line-height: 50px;">


        <span style="float: left;color: #333333;vertical-align: middle; margin-left: 10px;">收货地址</span>
        <span style="float: right; color: #333333;line-height: 50px;">

          <van-icon name="arrow" />
        </span>
      </div>

    </div>
    <div style="height: 10px;">
    </div>
    <div style="background: white; border-radius:5px; overflow: hidden;">
      <div style="overflow: hidden; line-height: 50px;">


        <span style="float: left;color: #333333;vertical-align: middle; margin-left: 10px;">账户安全</span>
        <span style="float: right; color: #333333;line-height: 50px;">

          <van-icon name="arrow" />
        </span>
      </div>
      <div style="background: #f2f2f2; height: 1px;" />
      <div style="overflow: hidden;line-height: 50px;">


        <span style="float: left;color: #333333;vertical-align: middle; margin-left: 10px;">意见反馈</span>
        <span style="float: right; color: #333333;line-height: 50px;">

          <van-icon name="arrow" />
        </span>
      </div>
      <div style="background: #f2f2f2; height: 1px;" />
      <div style="overflow: hidden;line-height: 50px;">


        <span style="float: left;color: #333333;vertical-align: middle; margin-left: 10px;">关于我们</span>
        <span style="float: right; color: #333333;line-height: 50px;">

          <van-icon name="arrow" />
        </span>
      </div>




    </div>
    <div style="margin-top:50px;background: red; line-height: 50px;">
      <span style="color: #F2F2F2;">退出登录</span>
    </div>



</div>
</template>

<script scoped>
  export default {
    methods: {
      onClickLeft() {
        this.$router.go(-1);
      },

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
