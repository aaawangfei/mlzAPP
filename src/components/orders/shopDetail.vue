<template>
  <div>
    <van-nav-bar
      title="求租详情"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="shop-detail-container">
      <div class="swipe-container">
      <van-swipe @change="onChange" :height="200">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image" style="width:100%;height:100%;"/>
        </van-swipe-item>

        <div class="custom-indicator" slot="indicator">
          {{ current + 1 }}/4
        </div>
      </van-swipe>
    </div>
    <div style="margin-top: 10px ;">
      <p>双滚筒电牵采煤机一台</p>
      <p>2019-02-12</p>
    </div>
    <van-divider style="padding: 0px 8px ;"/>
    <div class="userinfo-container">
      <div style="width: 60% ;">
        <div class="userinfo-text-container">
          <img src="" alt="" style="">
          <p>王先生</p>
        </div>
        <div class="userinfo-text-container">
          <img src="" alt="" style="">
          <p>19999999999</p>
        </div>
        <div class="userinfo-text-container">
          <img src="" alt="" style="">
          <p>神南产业</p>
        </div>
      </div>
      <div class="userinfo-img-container" style="width: 40% ;">
        <img src="" alt="">
      </div>
    </div>
    <!-- 分割线 -->
    <van-divider style="padding: 0px 8px ;"/>
    <!-- 求租要求 -->
      <div class="rend-container">
        <p>求租要求</p>
        <p>数量: 1台</p>
        <p>分类: 1台</p>
        <p>设备需求地: 1台</p>
        <p>技术要求: 1台</p>
        <p>详细要求: 1台</p>
      </div>
    </div>

    <div class="bottom-container">
      <!-- <van-divider style="margin: 0px 0px ;width: 100%;" /> -->
      <van-button icon="https://img.yzcdn.cn/vant/logo.png" type="danger" style="width:80%;height:36px ;" round>危险按钮</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      images: [
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571393569803&di=8482499a515503233abbd7ee84b10535&imgtype=0&src=http%3A%2F%2Fwww.cncrk.com%2Fup%2F1710%2F201710261056467276.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571393569801&di=eab77406a3618bdb75806ed0afb9bc1b&imgtype=0&src=http%3A%2F%2Fp0.ifengimg.com%2Fpmop%2F2017%2F0515%2F97CA5BD64580D6C74FD865EE33F689F3E306EECA_size169_w840_h480.jpeg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571393569801&di=f2bcc95fed3030fd3231741043a4be33&imgtype=0&src=http%3A%2F%2Fi2.hdslb.com%2Fbfs%2Farchive%2Faeb21fca53040b70380c669273de003f534e8b74.png'
      ],
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
    padding: 0px 15px ;
  }
  .shop-detail-container {
    margin-bottom: 45px ;
  }
  .userinfo-text-container {
    margin: 0px 0px ;
    display: flex ;
    flex-direction: row;

  }
  /* .userinfo-img-container {

  } */
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
 .bottom-container {
   display: flex;
   background: white;
   flex-direction: row;
   justify-content: center;
   height:45px ;
   position: fixed;
   right:0px ;
   bottom: 0px ;
   left: 0px ;
   width: 100%;
 }
</style>