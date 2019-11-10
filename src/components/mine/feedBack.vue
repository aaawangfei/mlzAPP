<template>
  <div style="background: #F2F2F2;height:100%;
        position:fixed;">
    <div>
      <van-nav-bar title="意见反馈" left-arrow @click-left="onClickLeft" />
    </div>
    <div style="padding: 20px;">
      <div style="background: white; border-radius:5px; overflow: hidden;height: 200px; padding: 10px;">
        请输入您的意见或建议，我们将尽力完善，为
      </div>
      <div style="margin-top:50px;background: red; line-height: 50px; text-align: center;">
        <span style="color: #F2F2F2;">提交</span>
      </div>
    </div>


  </div>

</template>

<script>
export default {
    methods: {
      onClickLeft() {
        this.$router.go(-1);
      },
      

    }
  }
</script>

<style>
</style>
