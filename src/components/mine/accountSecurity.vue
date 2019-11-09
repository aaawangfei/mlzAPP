<template>
  <div style="background: #F2F2F2 !important;padding-bottom: 100%;">
    <div>
      <van-nav-bar title="账户安全" left-arrow @click-left="onClickLeft" />
    </div>
    <div style="background: white; border-bottom-right-radius: 5px; border-bottom-left-radius:5px;overflow: hidden;">

      <div style="background: white; border-radius:5px; overflow: hidden;">

        <div style="background: #f2f2f2; height: 1px;" />
        <div style="overflow: hidden;line-height: 50px;">
          <span style="float: left;color: #333333;vertical-align: middle; margin-left: 16px;">修改登录密码</span>
          <span style="float: right; color: #333333;line-height: 50px;margin-right: 16px;">
            <van-icon name="arrow" />
          </span>
        </div>
        <div style="background: #f2f2f2; height: 1px;" />
        <div style="overflow: hidden;line-height: 50px;">
          <span style="float: left;color: #333333;vertical-align: middle; margin-left: 16px;">修改手机号码</span>
          <span style="float: right; color: #333333;line-height: 50px;margin-right: 16px;">
            15630667659<van-icon style="vertical-align:middle" name="arrow" />
          </span>
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
	.van-nav-bar .van-icon{
		color: #2c3e50;
	}
</style>
