<template>
  <div style="background: #f2f2f2;">

    <div>
      <van-nav-bar title="账户设置" left-arrow @click-left="onClickLeft" />
    </div>

    <div style="background: white; border-bottom-right-radius: 5px; border-bottom-left-radius:5px;overflow: hidden; overflow: hidden;">
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
      <div >

 <span style="float: left;color: #333333;padding: 10px;">王花花</span>
         <span style="float: right; color: #333333; margin：0 auto">
           <img style="margin：0 auto">d</img>
         </span>
      </div>

    </div>
    <div style="height: 10px;">
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
</style>
