<template>
  <div class="app-container" >
    <div class="app-container" style="margin-bottom: 60px ;">
      <!-- class="vanNavBars" -->
			<van-nav-bar  title="发布求租" left-arrow @click-left="onClickLeft" @click-right="onClickRight" />
			<!-- <scrollview> -->
			<div class="carContent">
				<van-cell-group>
					<van-field v-model="applyName"   label="设备名称" placeholder="请输入设备名称" input-align="left" size="large" type="text" />
					<van-field v-model="applyTel"  label="型号" placeholder="请输入型号" input-align="left" size="large" type="tel"  />
					<van-field v-model="applyNumber" label="数量" placeholder="请输入数量" input-align="left" size="large" type="text" />
					<van-field v-model="start"  label="分类"  placeholder="请输入分类" input-align="left" size="large" type="text" maxlength="20" />
					<van-field v-model="end"  label="设备需求地" placeholder="请输入需求地" input-align="left" size="large" type="text" maxlength="20" />
					<van-field v-model="startTime"  label="联系人" readonly placeholder="请输入联系人" input-align="left" size="large" type="text"  />
					<van-field v-model="backTime" label="电话号码" readonly placeholder="请输入电话号码" input-align="left" maxlength="11" size="large" type="tel"/>
					<van-field v-model="distance"  label="公司名称" placeholder="请输入公司名称" input-align="left" size="large" type="text" />
				</van-cell-group>
				<div class="line bold-line"></div>
				
				<div class="upload-container">
					<p>照片信息</p>
					<div class="upload-border">
						<van-field
							style="padding: 10px 8px ;"
							v-model="message"
							rows="1"
							
							:show-word-limit="true"
							size="large"
							type="textarea"
							placeholder="请描述详细的信息，控制在200字以内"
						/>
						<van-uploader
							v-model="fileList"
							multiple
							:max-count="9"
							style="padding: 0px 10px ;"
						/>
					</div>
				</div>
				
			</div>
		
		</div>
		<div class="bottom-btn-container">
<van-row gutter="32" style="width: 100%;">
  <van-col span="12">
	  <van-button style="background: #E33B3E;color: #FFFFFF;" round>保存草稿</van-button>
  </van-col>
  <van-col span="12">
	  <van-button style="background: #F2B741;color: #FFFFFF;" round>提交</van-button>
  </van-col>
</van-row>
		</div>

  </div>
</template>

<script>
export default {
  data() {
    return {
        labelW: "150" ,
				applyName: "",
				applyTel: "",
				applyNumber: "",
				listpeople: [],
				start: "",
				end: "",
				startTime: "",
				backTime: "",
				distance: "",
				info: "",
				reviewer: "",
				reviewerItem: {},
				content: "",
				processID: '',
				show: false,
				currentDate: new Date(),
				isStartTime: true,
				showReviewer: false,
				fileList:[],
				message: ""

    }
  }
}
</script>

<style scoped>
p {
	margin: 0px ;
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
  .upload-container {
		padding: 10px 16px 0px ;
		background: white;
	}
	.upload-border {
		border:1px solid #E4E4E4;
		border-radius:4px;
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
	/* .carContent {
		position: fixed;
		height: calc(100% - 92px);
		top: 46px;
		width: 100%;
		overflow: auto;
	} */
	.van-col{
		text-align: center;
	}
	.van-button{
		width: 100%;
	}
</style>