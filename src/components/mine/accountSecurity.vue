<template>
  <div style="background: #F2F2F2 ;height:100%;
        position:fixed; width: 100%;">
    <div>
      <van-nav-bar title="账户安全" left-arrow @click-left="onClickLeft" />
    </div>
   <div style="background: white; border-bottom-right-radius: 5px; border-bottom-left-radius:5px;overflow: hidden;">

      <div style="background: white; border-radius:5px; overflow: hidden;">

        <div style="background: #f2f2f2; height: 1px;" />
        <div style="overflow: hidden;line-height: 50px;">
           <van-coupon-cell title="修改登录密码" value="" />

        </div>
        <div style="background: #f2f2f2; height: 1px;" />
        <div style="overflow: hidden;line-height: 50px;">
          <van-coupon-cell title="修改手机号码" value="15630667659" />

        </div>
      </div>
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
  .imgright {
    float: right;
    overflow: hidden;
  }

  .iwordleft {
    float: left;
    line-height: 80px;
    overflow: hidden;
  }

  .tablebox {
    margin-top: 15px;
    background: #fff;
    display: table;
    float: left;
  }

  #imgbox {
    display: table-cell;
    vertical-align: middle;
  }

  #imgbox img {
    width: 80px;
    margin-right: 10px;
  }
</style>
