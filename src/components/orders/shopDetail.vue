<template>
  <div>
    <van-nav-bar
      title="求租详情"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="shop-detail-container">
      <div class="swipe-container">
      <van-swipe @change="onChange">
        <van-swipe-item>
         <img width="100%" src="../../assets/Home/Bitmap.png" alt="">
        </van-swipe-item>
        <van-swipe-item>
         <img width="100%" src="../../assets/Home/Bitmap.png" alt="">
        </van-swipe-item>
				<van-swipe-item>
				 <img width="100%" src="../../assets/Home/Bitmap.png" alt="">
				</van-swipe-item>
				<van-swipe-item>
				 <img width="100%" src="../../assets/Home/Bitmap.png" alt="">
				</van-swipe-item>
        <div class="custom-indicator" slot="indicator">
          {{ current + 1 }}/4
        </div>
      </van-swipe>
    </div>
    <div style="margin-top: 10px ;">
      <p style="color: #333333;font-weight: 500;font-size: 16px;">双滚筒电牵采煤机一台</p>
      <p style="color: #999999;font-size: 12px;">2019-02-12</p>
    </div>
    <van-divider style="padding: 0px 8px ;"/>
    <div class="userinfo-container">
      <div style="width: 70% ;">
        <div class="userinfo-text-container">
          <img class="img" src="../../assets/Home/people.png" alt="" style="">
          <p>王先生</p>
        </div>
        <div class="userinfo-text-container">
          <img class="img" src="../../assets/Home/iphone.png" alt="" style="">
          <p>19999999999</p>
        </div>
        <div class="userinfo-text-container">
          <img class="img" src="../../assets/Home/address.png" alt="" style="">
          <p>神南产业</p>
        </div>
      </div>
      <div class="userinfo-img-container" style="width: 30% ;">
        <img style="margin: 0 auto;display: block;width: 40px;margin-top: 10px;" src="../../assets/Home/phone.png" alt="">
				<p style="text-align: center;margin-top: 5px;">电话咨询</p>
      </div>
    </div>
    <!-- 分割线 -->
    <van-divider style="padding: 0px 8px ;"/>
    <!-- 求租要求 -->
      <div class="rend-container">
        <p style="color: #333333;font-weight: 500;font-size: 14px;">求租要求</p>
        <p>数量: 1台</p>
        <p>分类: 1台</p>
        <p>设备需求地: 1台</p>
        <p>技术要求: 1台</p>
        <p>详细要求: 1台</p>
      </div>
    </div>
    <div class="bottom-btn-container">
    <van-row gutter="32" style="width: 100%;">
      <van-col span="24">
    	  <van-button style="background: #E33B3E;color: #FFFFFF;" round>
					<img style="margin-top: -4px;" class="img" src="../../assets/Home/advisory.png" alt="">
					<span>电话咨询</span>
					</van-button>
      </van-col>
    </van-row>
    		</div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      current: 0
    }
  },
  methods: {
     onChange(index) {
      this.current = index;
      },
      onClickLeft() {
        this.router.go(-1);
      }
    
  }
}
</script>
<style scoped>
  p{
    margin: 0px 0px ;
    text-align: left ;
    padding: 0px 16px ;
		line-height: 30px;
		font-size: 14px;
		color: #333333;
  }
  .shop-detail-container {
    margin-bottom: 45px ;
  }
  .userinfo-text-container {
    margin: 0px 0px;
    display: flex;
    flex-direction: row;
  }
  .van-divider {
    margin: 10px 0px ;
  }
  .userinfo-container {
    display: flex;

  }
  .rend-container {
    text-align: left;
    margin: 0px 0px 15px 0px ;
  }
 .custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    color: #fff;
    font-size: 12px;
    background: rgba(0, 0, 0, 0.1);
 }
 .bottom-btn-container {
 	  height: 50px ;
 	  display: flex;
    flex-direction: row;
    justify-content: center;
    position: fixed;
    right:0px ;
    bottom: 0px ;
    left: 0px ;
    width: 100%;
    line-height: 50px;
    background: #FFFFFF;
    border-top: 1px solid #ECECEC;
 	  box-shadow: 0px -1px 3px #ECECEC;
 }
 .img{
	  vertical-align: middle;
    width: 20px;
    height: 20px;
    margin-left: 16px;
		margin-top: 2px;
 }
 .van-col{
 	  text-align: center;
 }
 .van-button{
 	  width: 100%;
 }
 .van-nav-bar .van-icon{
 	  color: #2c3e50;
 }
</style>