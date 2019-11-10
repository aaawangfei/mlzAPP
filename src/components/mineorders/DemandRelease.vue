<template>
  <div style="background: #F2F2F2; display: flex;flex-direction:column">
    <div>
      <van-nav-bar left-arrow @click-left="onClickLeft" title="需求发布" :right-text="titile" @click-right="onClickRight"
        :border="false" />
    </div>
    <div>
      <van-tabs v-model="active" line-width="50px" :border="false">
        <van-tab title="求租">
          <van-list v-model="loading" :finished="finished" @load="onLoad">
            <van-cell v-for="item in goods" :key="item.id" :name="item.id">
              <div style=" padding: 10px;">

                <div style="display: flex; border-radius: 5px; ">

                  <div style="margin-top: 10px;">
                    <van-image width="100" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />
                  </div>


                  <div style="display: flex; justify-content: space-around;flex-direction: column;margin: 0px 8px;">
                    <div >齿轨轮轴 CONCON0328-040328-04 0A78</div>
                    <div>神南产业发展公司</div>
                    <div style="display: flex;justify-content:space-between">
                      <span> 王先生</span>
                      <span> 4天前</span>
                    </div>



                  </div>
                </div>
                <div style="display: flex;justify-content:space-between;line-height: 30px;text-align: center;">
                  <span > 草稿</span>
                  <div style="display: flex;justify-content:space-between;line-height: 30px;;">
                    <van-button round hairline type="primary" color="#E33B3E" plain size="small" style="padding-left: 20px;padding-right: 20px;">发布</van-button>
                    <van-button round hairline type="primary" color="#DAD7D7" plain size="small">取消推广</van-button>


                    <van-button round hairline type="primary" color="#DAD7D7" plain size="small">删除信息</van-button>
                  </div>
                </div>

              </div>

            </van-cell>

          </van-list>


        </van-tab>


        <van-tab title="求购">

        </van-tab>
      </van-tabs>
    </div>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        active: 1,
        loading: false,
        finished: false,
        goods: [{
            id: '1',
            title: '进口香蕉',
            desc: '约250g，2根',
            price: 200,
            num: 1,
            checked: true,
            thumb: 'https://img.yzcdn.cn/public_files/2017/10/24/2f9a36046449dafb8608e99990b3c205.jpeg'
          },
          {
            id: '1',
            title: '进口香蕉',
            desc: '约250g，2根',
            price: 200,
            num: 1,
            checked: true,
            thumb: 'https://img.yzcdn.cn/public_files/2017/10/24/2f9a36046449dafb8608e99990b3c205.jpeg'
          },
          {

            id: '2',
            title: '陕西蜜梨',
            desc: '约600g',
            price: 690,
            num: 1,
            checked: true,
            thumb: 'https://img.yzcdn.cn/public_files/2017/10/24/f6aabd6ac5521195e01e8e89ee9fc63f.jpeg'
          }, {
            id: '3',
            title: '美国伽力果',
            desc: '约680g/3个',
            price: 2680,
            num: 1,
            checked: true,
            thumb: 'https://img.yzcdn.cn/public_files/2017/10/24/320454216bbe9e25c7651e1fa51b31fd.jpeg'
          }
        ],

      }
    }


  }
</script>

<style scoped>
  .van-cell {

    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    box-sizing: border-box;
    width: 100%;
    padding: 10px 16px;
    overflow: hidden;
    color: #323233;
    font-size: 14px;
    line-height: 24px;
    background-color: #F2F2F2;
  }

  .van-cell__value {
    position: relative;
    overflow: hidden;
    color: #969799;
    text-align: left;
    vertical-align: middle;
    background: #FFFFFF;
    border-radius: 5px;
  }

.van-button--small {
  margin-right: 10px;
    min-width: 0px;
    height: 30px;
    padding: 0 8px;
    font-size: 12px;
    line-height: 28px;
    color: #666666 !important;
}
</style>
