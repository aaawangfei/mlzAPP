<template>
  <div style="padding-bottom: 10px;text-align: center;">
    <div>
      <van-nav-bar title="企业认证" left-arrow @click-left="onClickLeft" />
    </div>
    <div style="background: white; border-bottom-right-radius: 5px; border-bottom-left-radius:5px;overflow: hidden;">

      <div style="background: #f2f2f2; height: 1px;" />
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
          <span style="float: left;color: #333333;vertical-align: middle; margin-left: 10px;">账户全称</span>
          <span style="float: right; color: #333333;vertical-align: middle; margin-right: 10px;">
            12345safd
          </span>
        </div>
        <div style="background: #f2f2f2; height: 1px;" />
        <div style="overflow: hidden;line-height: 50px;">
          <span style="float: left;color: #333333;vertical-align: middle; margin-left: 10px;">开户行</span>
          <span style="float: right; color: #333333;vertical-align: middle; margin-right: 10px;">
            中国邮政
          </span>
        </div>
        <div style="background: #f2f2f2; height: 1px;" />
      </div>
      <div style="background: white; border-radius:5px; overflow: hidden; padding-left: 6px;padding-right: 6px;">
        <div style="overflow: hidden; line-height: 50px;">
          <span style="float: left;color: #333333;vertical-align: middle; margin-left: 10px;">账号</span>
          <span style="float: right; color: #333333;vertical-align: middle; margin-right: 10px;">
            1231
          </span>
        </div>
        <div style="background: #f2f2f2; height: 1px;" />
        <div style="overflow: hidden;line-height: 50px;">
          <span style="float: left;color: #333333;vertical-align: middle; margin-left: 10px;">联行号</span>
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
        <div style="background: #f2f2f2; height: 1px;" />
      </div>
      <div style="background: white; border-radius:5px; overflow: hidden; padding-left: 6px;padding-right: 6px;">
        <div style="overflow: hidden; line-height: 50px;">
          <span style="float: left;color: #333333;vertical-align: middle; margin-left: 10px;">公司所在地址</span>
          <span style="float: right; color: #333333;vertical-align: middle; margin-right: 10px;">
            陕西省育龄是
            <van-icon style="line-height: 42px;" name="arrow" />
          </span>
        </div>
        <div style="background: #f2f2f2; height: 1px;" />
        <div style="overflow: hidden;line-height: 50px;">
          <span style="float: left;color: #333333;vertical-align: middle; margin-left: 10px;">公司详细地址</span>
          <span style="float: right; color: #333333;vertical-align: middle; margin-right: 10px;">
            冰河新区
          </span>
        </div>
        <div style="background: #f2f2f2; height: 1px;" />
        <div style="overflow: hidden;line-height: 50px;">
          <span style="float: left;color: #333333;vertical-align: middle; margin-left: 10px;">其他描述</span>
          <span style="float: right; color: #333333;vertical-align: middle; margin-right: 10px;">
            无
          </span>
        </div>
        <div style="background: #f2f2f2; height: 1px;" />
        <div style="line-height: 50px;text-align: left;margin-left: 10px;">上传营业执照

        </div>
        <div style="line-height: 50px;color: #333333;text-align: left;margin-left: 10px;">
         <van-uploader :after-read="afterRead" v-model="fileList" multiple />
        </div>
        <div style="line-height: 50px;color: #E33B3E;text-align: left;margin-left: 10px;font-size: 11px;">
          提示：请上传加盖公章的扫描件或复印件，须
        </div>
 <div style=" background: #E33B3E; line-height: 50px;color:white ;border-radius: 30px;margin: 0 10px;">提交申请
        </div>
      </div>
    </div>
  </div>
</template>
<script scoped>
  export default {
    data(){
      return {
            fileList: [
              { url: 'https://img.yzcdn.cn/vant/leaf.jpg' },
              // Uploader 根据文件后缀来判断是否为图片文件
              // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
              { url: 'https://cloud-image', isImage: true }
            ]
          }
    },
    methods: {
      onClickLeft() {
        this.$router.go(-1);
      },
      afterRead(file) {
            // 此时可以自行将文件上传至服务器
            console.log(file);
          }
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
