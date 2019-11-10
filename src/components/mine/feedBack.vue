<template>
  <div style="background: #F2F2F2;text-align: center;">
    <div>
      <van-nav-bar title="意见反馈" left-arrow @click-left="onClickLeft" />
    </div>
    <div style="padding: 20px;">
			<van-cell-group>
  <van-field
    v-model="message"
    rows="10"
    autosize
    type="textarea"
    placeholder="请输入您的意见或建议，我们将尽力完善，为您提供更好的服务."
    show-word-limit
  />
</van-cell-group>
     <div style="margin-top:50px;background: red; line-height: 50px;border-radius: 30px;">
       <span style="color: #F2F2F2;">提交</span>
     </div>
    </div>


  </div>

</template>

<script>
</script>

<style>
</style>
