<template>
  <div style="background: #F2F2F2;
        width: 100%; margin-bottom: 20px;">
    <div>
      <van-nav-bar title="企业认证" left-arrow @click-left="onClickLeft" />
    </div>
    <div style="background: white; border-bottom-right-radius: 5px; border-bottom-left-radius:5px;overflow: hidden;">

      <div style="background: #f2f2f2; height: 1px;" />
      <div style="background: white; border-radius:5px; overflow: hidden; padding-left: 10px;padding-right: 10px;">
        <div style="overflow: hidden; line-height: 50px;">
          <van-cell-group>
            <van-field v-model="username"  clearable label="用户名" placeholder="神南产业发展有限公司" input-align="right" />


          </van-cell-group>

        </div>

        <div style="overflow: hidden;line-height: 50px;">
          <van-cell-group>
            <van-field v-model="socialcode"  clearable label="社会代码" placeholder="123456" input-align="right" />


          </van-cell-group>

        </div>

        <div style="overflow: hidden;line-height: 50px;">
          <van-cell-group>
            <van-field v-model="accountname"  clearable label="账户全称" placeholder="123456" input-align="right" />


          </van-cell-group>

        </div>

        <div style="overflow: hidden;line-height: 50px;">
          <van-cell-group>
            <van-field v-model="openingbank"  clearable label="开户行" placeholder="中国邮政" input-align="right" />


          </van-cell-group>

        </div>

      </div>
      <div style="background: white; border-radius:5px; overflow: hidden; padding-left: 10px;padding-right: 10px;">
        <div style="overflow: hidden; line-height: 50px;">
          <van-cell-group>
            <van-field v-model="account"  clearable label="账号" placeholder="123" input-align="right" />


          </van-cell-group>

        </div>

        <div style="overflow: hidden;line-height: 50px;">
          <van-cell-group>
            <van-field v-model="jointnumber"  clearable label="联行号" placeholder="123" input-align="right" />


          </van-cell-group>

        </div>

        <div style="overflow: hidden;line-height: 50px;">
          <van-cell-group>
            <van-field v-model="companytelephone"  clearable label="公司电话" placeholder="123" input-align="right" />


          </van-cell-group>

        </div>

        <div style="overflow: hidden;line-height: 50px;">
          <van-cell-group>
            <van-field v-model="contacts"  clearable label="联系人" placeholder="wanghua" input-align="right" />


          </van-cell-group>

        </div>

      </div>
      <div style="background: white; border-radius:5px; overflow: hidden; padding-left: 10px;padding-right: 10px;">
        <div style="overflow: hidden; line-height: 50px;">
          <van-coupon-cell

            title="公司所在地址"
            :value="companyaddress"
          />
         
        </div>

        <div style="overflow: hidden;line-height: 50px;">
          <van-cell-group>
            <van-field v-model="address"  clearable label="公司详细地址" placeholder="冰河新区" input-align="right" />


          </van-cell-group>

        </div>

        <div style="overflow: hidden;line-height: 50px;">
          <van-cell-group>
            <van-field v-model="describe"  clearable label="其他描述" placeholder="无" input-align="right" />


          </van-cell-group>

        </div>

        <div style="line-height: 50px;text-align: left;">
          <van-cell-group>
            <van-field v-model="account"  clearable label="上传营业执照"  />


          </van-cell-group>


        </div>

        <div style="line-height: 50px;color: #333333;text-align: left;margin-left: 10px;">
          <van-uploader :after-read="afterRead" v-model="fileList" multiple />
        </div>
        <div style="line-height: 50px;color: #E33B3E;text-align: left;margin-left: 10px;font-size: 11px;">
          提示：请上传加盖公章的扫描件或复印件，须
        </div>
        <div style=" background: #E33B3E; line-height: 50px;color:white ;text-align: center;">提交申请


        </div>

      </div>

    </div>
  </div>
</template>
<script scoped>
  export default {
    data() {
      return {
        username:"",
        socialcode:"",
        accountname:"",
        openingbank:"",
        account:"",
        jointnumber:"",
        companytelephone:"",
        contacts:"",
        address:"",
        describe:"",
        companyaddress:"陕西省榆林市神木市",
        fileList: [{
            url: 'https://img.yzcdn.cn/vant/leaf.jpg'
          },
          // Uploader 根据文件后缀来判断是否为图片文件
          // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
          {
            url: 'https://cloud-image',
            isImage: true
          }
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

  .van-field__control {

      text-align: right !important;

  }
</style>
