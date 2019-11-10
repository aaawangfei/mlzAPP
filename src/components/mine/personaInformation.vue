<template>
  <div style="background: #F2F2F2;height:100%;
        position:fixed;width: 100%;">
    <div>
      <van-nav-bar title="个人中心" left-arrow @click-left="onClickLeft" />
    </div>
    <div style="background: white; border-bottom-right-radius: 5px; border-bottom-left-radius:5px;overflow: hidden;">
      <div style="overflow: hidden;">
        <div class="iwordleft">
          <p style="color: #333333; vertical-align: middle; margin-left: 10px;">王花花</p>
        </div>
        <div class="imgright">
              <div class="tablebox">
                  <div id="imgbox">

                      <van-image round width="5rem" height="5rem" src="https://img.yzcdn.cn/vant/cat.jpeg" />

                  </div>
              </div>
              <div style="float: right;">
              <van-icon style="line-height: 112px;" name="arrow" />
              </div>
          </div>
      </div>
      <div style="background: #f2f2f2; height: 1px;"/>
      <div style="background: white; border-radius:5px; overflow: hidden;">
        <div style="overflow: hidden; line-height: 50px;">
          <span style="float: left;color: #333333;vertical-align: middle; margin-left: 10px;">用户名</span>
          <span style="float: right; color: #333333;line-height: 50px;">
            王海蛤 <van-icon style="line-height: 42px;"name="arrow" />
          </span>
        </div>
        <div style="background: #f2f2f2; height: 1px;" />
        <div style="overflow: hidden;line-height: 50px;">
          <div style="float: left;color: #333333;vertical-align: middle; margin-left: 10px;">性别</div>
          <div style="float: right; color: #333333;line-height: 50px;text-align:-moz-center;">
            女<van-icon style="margin-top: 2px;" name="arrow" />
          </div>
        </div>
        <div style="background: #f2f2f2; height: 1px;" />
        <div style="overflow: hidden;line-height: 50px;">
          <span style="float: left;color: #333333;vertical-align: middle; margin-left: 10px;">出生日期</span>
          <span style="float: right; color: #333333;line-height: 50px;">
            <van-icon name="arrow" />
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
.tablebox{
  margin-top: 15px;
  background: #fff;
  display: table;
  float: left;
  }
#imgbox{
  display: table-cell;
  vertical-align: middle;
  }
#imgbox img{
  width: 80px;
  margin-right: 10px;
  }

</style>
