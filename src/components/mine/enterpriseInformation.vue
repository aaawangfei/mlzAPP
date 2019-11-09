<template>
  <div style="background: #F2F2F2 !important;padding-bottom: 100%;">
    <div>
      <van-nav-bar title="企业信息" left-arrow @click-left="onClickLeft" />
    </div>
    <div style="background: white; border-bottom-right-radius: 5px; border-bottom-left-radius:5px;overflow: hidden;">
      <div style="overflow: hidden;">
        <div class="iwordleft">
          <p style="color: #333333; vertical-align: middle; margin-left: 16px;">王花花</p>
        </div>
        <div class="imgright">
              <div class="tablebox">
                  <div id="imgbox">
                      <van-image round width="5rem" height="5rem" src="https://img.yzcdn.cn/vant/cat.jpeg" />
                  </div>
              </div>
              <div style="float: right;margin-right: 13px;">
              <van-icon style="line-height: 112px;" name="arrow" />
              </div>
          </div>
      </div>
      <div style="background: #f2f2f2; height: 1px;"/>
      <div style="background: white; border-radius:5px; overflow: hidden; padding-left: 6px;padding-right: 6px;">
        <div style="overflow: hidden; line-height: 50px;">
          <span style="float: left;color: #333333;vertical-align: middle; margin-left: 10px;">公司名称</span>
          <span style="float: right; color: #333333;vertical-align: middle; margin-right: 10px;">
            神南产业发展有限公司
          </span>
        </div>
        <div style="background: #f2f2f2; height: 1px;" />
        <div style="overflow: hidden;line-height: 50px;">
          <span style="float: left;color: #333333;vertical-align: middle; margin-left: 10px;">社会代码</span>
          <span style="float: right; color: #333333;vertical-align: middle; margin-right: 10px;">
            12345
          </span>
        </div>
        <div style="background: #f2f2f2; height: 1px;" />
        <div style="overflow: hidden;line-height: 50px;">
          <span style="float: left;color: #333333;vertical-align: middle; margin-left: 10px;">公司电话</span>
          <span style="float: right; color: #333333;vertical-align: middle; margin-right: 10px;">
            12345safd
          </span>
        </div>
        <div style="background: #f2f2f2; height: 1px;" />
        <div style="overflow: hidden;line-height: 50px;">
          <span style="float: left;color: #333333;vertical-align: middle; margin-left: 10px;">联系人</span>
          <span style="float: right; color: #333333;vertical-align: middle; margin-right: 10px;">
            王花花
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
.van-nav-bar .van-icon{
		color: #2c3e50;
	}
</style>
