<template>
  <div >
    <van-nav-bar  title="申请退款" left-arrow @click-left="onClickLeft"  />
    <div class="form-container">
      <div class="line bold-line"></div>
      <van-cell-group>
					<van-cell title="item">
            <template slot="title">
              <p>煤亮子商城</p>
              <div style="display: flex ;">
                <div style="height: 80px ; width: 100px;">
                  <van-image
                    width="75"
                    height="80"
                    src="https://img.yzcdn.cn/vant/cat.jpeg"/>
                </div>
                    <div class="cell-text" style="width:100% - 115px;">
                          <p  style="height: 50px;">双滚筒电牵采煤机型号BYs大家都来看萨达as了点击阿斯利康建档立卡建档立卡撒娇凉快的骄傲来得及埃里克十九大流口水建档立卡</p>
                          <div style="display: inline;">
                            <p class="cell-p" style="float:left ;">￥3400</p>
                            <p  style="float: right ;">3天前</p>
                          </div>
                        </div>
                </div>
            </template>
            </van-cell>
				</van-cell-group>
      <div class="line bold-line"></div>
				<van-cell-group>
          <!-- placeholder="请选择出发时间" -->
					<van-field v-model="refundType" label="退款类型" readonly  input-align="right" size="large" right-icon="arrow" type="text" @click-right-icon="slectRefundType" />
					<van-field v-model="refundReason" label="退款原因" readonly  input-align="right" size="large" right-icon="arrow" type="text" @click-right-icon="slectRefundReason" />
					<van-field v-model="refundMoney" label="退款金额" readonly  input-align="left" size="large" type="text" />
					<van-field v-model="fefundDesc"  label="退款描述" placeholder="请输入退款描述" input-align="right" size="large" type="text" />
				</van-cell-group>
				<div class="line bold-line"></div>
				
				<div class="upload-container">
					<p style="margin: 10px 16px;">上传凭证（选填）</p>
          <van-uploader
							v-model="fileList"
							multiple
							:max-count="4"
							style="padding: 0px 16px ;"
						/>
            <p style="margin: 10px 16px;">最多4张,支持png、jpg格式</p>
				</div>
			</div>

      <van-popup class="pop-container"  position="bottom" v-model="show">
        <van-sticky>
           <p style="margin: 15px 0px ;text-align: center ;">{{ title }}</p>
        </van-sticky>
       
      <div style="margin-bottom: 50px;">
        
            <van-cell
              v-for="item in list"
              :key="item"
              :title="item"
            />
      </div>
      <div class="bottom-container">
      
      <van-button  type="danger" style="width:80%;height:36px ;" round>确定</van-button>
      </div>
    </van-popup>
		
    <div class="bottom-container">
      <!-- <van-divider style="margin: 0px 0px ;width: 100%;" /> -->
      <van-button  type="danger" style="width:80%;height:36px ;" round>提交申请</van-button>
    </div>
		
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "退款类型",
      show:false ,
      fileList: [],
      list:['原因','原因','原因','原因','原因','原因','原因','原因','原因','原因','原因','原因'],
      refundType:"",
      refundReason:"",
      refundMoney:"",
      fefundDesc:""

    }
  },
  methods: {
    slectRefundType() {
      this.show = true ;
      console.log("--------->");
    },
    slectRefundReason() {
      this.show = true ;
    }
  }
}
</script>

<style scoped>
.pop-container {
  border-radius: 5px 5px 0px 0px ;
  max-height: 60%;
}
.line {
		background: #f2f2f2;
		margin: 0px;
		padding: 0px;
		height: 1px;
    
	}
	
	.bold-line {
		height: 10px;
	}
  .form-container {
    margin: 0px 0px 60px 0px ;
    height: 100%;
    
  }
  p {
  margin: 0px 0px ;
  overflow:hidden;text-overflow:ellipsis;
}
	.cell-text {
    margin: 0px 0px 0px 0px;
    text-align:left ;
    /* width:100% ; */
    padding-left: 8px ;
    display: flex ;
    justify-content: space-between ;
    flex-direction: column;
    
  }
  .bottom-container {
   display: flex;
   background: white;
   justify-content: center;
   height:45px ;
   position: fixed;
   right:0px ;
   bottom: 0px ;
   left: 0px ;
   width: 100%;
 }
</style>>

