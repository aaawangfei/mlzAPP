<template>
  <div>
    <div>
      <van-nav-bar left-arrow @click-left="onClickLeft" title="采购单" right-text="编辑" @click-right="onClickRight" :border="false" />
    </div>
    <div style="display: flex;justify-content: space-between;padding: 20px;">
      <div @click="allhave">
        全部(20)
      </div>
      <div @click="minehave">
        自有(20)
      </div>
      <div @click="classify">
        分类
      </div>
    </div>
    <div v-if="allhaveshow">
      <van-list v-model="loading" :finished="finished" @load="onLoad">
        <van-cell v-for="item in goods" :key="item.id" :name="item.id">
          <div style=" padding: 10px;">
            <div style="display: flex; border-radius: 5px;">
              <div>
                <van-checkbox name="item" v-model="item.checked">
                  <div>
                    <van-image width="100" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />
                  </div>
                </van-checkbox>
              </div>
              <div style="display: flex; justify-content: space-between;flex-direction: column;margin: 0px 8px;">
                <p>齿轨轮轴 CONCON0328-040328-04 0A78</p>
                <div style="display: flex;justify-content: flex-star;">
                  <p>￥3400</p>
                  <van-stepper style="margin-left: 20%;" v-model="item.num" />
                </div>
              </div>
            </div>
          </div>

        </van-cell>

      </van-list>
    </div>
    <div v-if="minehaveshow">
      minehaveshow
      <van-list v-model="loading" :finished="finished" @load="onLoad">
        <van-cell v-for="item in goods" :key="item.id" :name="item.id">
          <div style=" padding: 10px;">
            <div style="display: flex; border-radius: 5px;">
              <div>
                <van-checkbox name="item" v-model="item.checked">
                  <div>
                    <van-image width="100" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />
                  </div>
                </van-checkbox>
              </div>
              <div style="display: flex; justify-content: space-between;flex-direction: column;margin: 0px 8px;">
                <p>齿轨轮轴 CONCON0328-040328-04 0A78</p>
                <div style="display: flex;justify-content: flex-star;">
                  <p>￥3400</p>
                  <van-stepper style="margin-left: 20%;" v-model="item.num" />
                </div>
              </div>
            </div>
          </div>

        </van-cell>

      </van-list>
    </div>
    <div v-if="classifyshow">
      <van-popup v-model="show" :overlay="false" close-icon-position="top-left" position="top" :get-container="getContainer"
        style="margin-top: 86px;background: #F2F2F2;">
        <van-grid :column-num="3" :border="false" :square="false" style="line-height: 6px !important;background: #F2F2F2 !important;">
          <van-grid-item v-for="value in 9" :key="value" text="文字"/>
        </van-grid>
      </van-popup>
      <van-overlay :show="show" @click="show = false" style="margin-top: 100px;" />

    </div>




  </div>

</template>

<script>
  export default {
    data() {
      return {
        active: 2,
        loading: false,
        finished: false,
        isLoading: false,
        onLoad:false,
        checkedGoods: ['1', '2', '3'],
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

        show: false,
        showoverlay: true,
        classifyshow: false,
        allhaveshow: false,
        minehaveshow: false


      };
    },
    methods: {
      minehave() {
        this.minehaveshow = true;
        this.allhaveshow = false;
      },
      allhave() {
        this.allhaveshow = true;
        this.minehaveshow = false;
      },
      classify() {
        this.show = true;
        this.classifyshow = true;
      },
      onClickRight() {



      },
      onClickLeft() {



      },



      showPopup() {
        this.show = true;
      },
      getContainer() {
        return document.querySelector('sowContainer');
      }
    }

  }
</script>

<style scoped>
  Attribute {
    line-height: 6px !important;
    width: 30%;
    text-align: center;
}
  .van-grid-item__content--center {
      -webkit-box-align: center;
      -webkit-align-items: center;
      align-items: center;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      background-color: #F2F2F2 !important;
  }
  .van-grid-item__content {
      margin-top: 20px;
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -webkit-flex-direction: column;
      flex-direction: column;
      box-sizing: border-box;
      height: 100%;
      padding: 16px 8px;
      background-color: #F2F2F2 !important;
  }


</style>
