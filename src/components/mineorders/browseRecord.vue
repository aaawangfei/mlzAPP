<template>
  <div class='calendar-box ' style="background: #F2F2F2;">
    <div>


      <van-nav-bar title="浏览记录" class="vanNavBars" left-arrow @click-left="onClickLeft" @click-right="onClickRight"
        style="background: #FFFFFF; z-index: 2025;" />
      <!-- <van-button type="primary" @click="showPopup">
      ddd
    </van-button> -->

      <div style="background: #F2F2F2;">
        <weekSlider ref="mychild" style="width: 100%; height: 25%; display: inherit;position: relative;margin-top: 1px;background: #FFFFFF;"
          @dateClick="dateClickhandler" todayTxtColor='#ff0000' :showYear="false" :defaultDate.sync="default_date"
          @changeMonth="change_Month">

        </weekSlider>
        <div id="week" style="position: absolute;left: 90%;top:109px;background: #FFFFFF; border-radius: 50px;overflow: hidden;width: 15px;height:15px;z-index:1"
          @click="showPopup">
          <van-icon name="arrow-down" />
        </div>
      </div>
      <van-popup v-model="show" position="top" @close="overclose" @opened="open">
        <Calendar @choseDay='clickDay'></Calendar>
      </van-popup>
    </div>
    <div style="height: 10px;"></div>

    <van-list v-model="loading" :finished="finished" @load="onLoad">
      <van-cell v-for="item in goods" :key="item.id" :name="item.id">
        <div style="">

          <div style="display: flex; border-radius: 5px; margin-top: 5px;">

            <div style="margin-top: 10px;">
              <van-image width="100" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />
            </div>


            <div style="display: flex; justify-content: space-around;flex-direction: column;margin: 0px 8px;width: 100%;">
              <p>齿轨轮轴 CONCON0328-040328-04 0A78</p>


              <div style="display: flex; justify-content:space-between;">

                  <span>￥3400</span>
                  <div>
                     <van-icon name="shopping-cart-o" />
                  </div>




              </div>

            </div>
          </div>

        </div>

      </van-cell>

    </van-list>


  </div>

</template>

<script>
  import weekSlider from '../mineorders/weekSlider';
  import Calendar from 'vue-calendar-component';
  import dayjs from 'dayjs'



  export default {
    data() {
      return {
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


        default_date: "",

        show: false,



      }
    },
    components: {
      Calendar,
      weekSlider
    },

    created() {


      this.default_date = dayjs(new Date()).format("YYYY-MM-DD").toString();



    },
    methods: {

      addclass(i) {
        console.log("dsfhd" + i);

      },

      //TOOD 获取车辆库列表

      timestampToTime(timestamp) {
        var date = new Date(timestamp * 1000); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
        // Y = date.getFullYear() + '-';
        // M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
        // D = this.change(date.getDate()) + ' ';
        this.h = this.change(date.getHours()) + ':';
        this.m = this.change(date.getMinutes());
        // s = this.change(date.getSeconds());
        return this.h + this.m;
      },
      change(t) {
        if (t < 10) {
          return "0" + t;
        } else {
          return t;
        }
      },

      dateClickhandler(date) {
        this.default_date = dayjs(date).format("YYYY-MM-DD").toString();




        console.log(this.default_date + "jj");
      },

      onRefresh() {
        this.page.pageNumber = 0;
        this.getList();
      },


      onClickLeft() {
        this.$router.go(-1);
      },
      onClickRight() {
        this.$router.go(-1);
      },
      onLoad() {
        this.loading = false;
      },

      showPopup() {
        this.show = true;
      },

      overclose() {

      },
      open() {

      },
      showPopup() {
        this.show = true;
      },


      //左右切换月份
      change_Month(data) {
        this.$message.info('您选中的月份是' + data.slice(5, 6));
      },
      //选中的是今天
      clickToday(data) {
        this.$message.info('今天是' + data);
      },
      clickDay(data) {

        this.default_date = dayjs(data).format("YYYY-MM-DD").toString();
        this.$refs.mychild.dayClickHandle(this.default_date);
        console.log(data); //选中某天
        this.show = false;
      },
      changeDate(data) {
        console.log(data); //左右点击切换月份
      },




      //选中的是今天

    },
  }
</script>
<style scoped>
  /* .van-cell {
    background: #f2f2f;
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    box-sizing: border-box;
    width: 100%;

    overflow: hidden;
    color: #323233;
    font-size: 14px;
    line-height: 24px;
    background-color: #F2F2F2;
  }

  .van-cell__value--alone {
    color: #323233;
    text-align: left;
    border-radius: 5px;
    background-color: #FFFFFF;
  } */
  .carContent {
    position: fixed;
    height: calc(100% - 92px);
    top: 92px;
    width: 100%;
    overflow: auto;
  }

  .calendar-box .wh_content_all {
    background: #FFFFFF;
    background-color: #FFFFFF !important;
    color: #666;
  }

  .calendar-box .wh_top_changge li {
    font-size: 14px;
    color: #666 !important;
  }

  .calendar-box .wh_jiantou1 {
    width: 9px;
    height: 9px;
    border-top: 2px solid #666 !important;
    border-left: 2px solid #666 !important;
  }

  .calendar-box .wh_jiantou2 {
    width: 9px;
    height: 9px;
    border-top: 2px solid #666 !important;
    border-right: 2px solid #666 !important;
  }

  .calendar-box .wh_content_all {
    background: #FFFFFF;
    background-color: #FFFFFF !important;
    color: #666;
  }

  .calendar-box .wh_content_item .wh_isToday {
    background: #f2f2f2;
  }

  .calendar-box.wh_content_item {
    color: #666666;
    font-size: 12px;
  }

  .calendar-box .wh_content_item .wh_chose_day {
    background: #e60012;
    color: #fff;
  }

  .wh_top_tag {
    color: #666666;
  }

  .wh_item_date {
    color: #666666;
  }

  .graage-numcar {
    float: left;
    color: #444;
    font-size: 13px;
    margin: 10px;
  }
</style>
<style scoped>
  .van-popup--top {
    padding-top: 45px;
  }

  .van-popup.van-popup--top {
    z-index: 2021 !important;
  }

  .van-nav-bar {
    z-index: 2030 !important;
  }

  .van-col {
    margin-top: 16px;
  }

  .graage-status1 {
    float: right;
    margin: 10px;
    color: #FFFF;
    font-size: 12px;
    padding-left: 10px;
    padding-right: 10px;
    background: #999;
    -webkit-border-radius: 100px / 50px;
    -moz-border-radius: 100px / 50px;
    border-radius: 128px / 111px;
  }

  .graage-status2 {
    float: right;
    margin: 10px;
    color: #FFFF;
    font-size: 12px;
    padding-left: 10px;
    padding-right: 10px;
    background: #95D334;
    -webkit-border-radius: 100px / 50px;
    -moz-border-radius: 100px / 50px;
    border-radius: 128px / 111px;
  }

  .graage-status3 {
    float: right;
    margin: 10px;
    color: #FFFF;
    font-size: 12px;
    padding-left: 10px;
    padding-right: 10px;
    background: #4444;
    -webkit-border-radius: 100px / 50px;
    -moz-border-radius: 100px / 50px;
    border-radius: 128px / 111px;
  }

  .graage-status4 {
    float: right;
    margin: 10px;
    color: #FFFF;
    font-size: 12px;
    padding-left: 10px;
    padding-right: 10px;
    background: #E60012;
    -webkit-border-radius: 100px / 50px;
    -moz-border-radius: 100px / 50px;
    border-radius: 128px / 111px;
  }

  .details-left {
    float: left;
    color: #222222;
    margin: 10px;
    line-height: 20px;
    font-size: 13px;
  }

  .garage-top {
    overflow: hidden;
  }

  .van-col--8 {
    text-align: center;
  }

  .grage-time {
    color: #333333;
    font-size: 18px;
    text-align: center;
  }

  .van-overlay {
    z-index: 2020 !important;
  }

  .grage-address {
    color: #333333;
    font-size: 12px;
    text-align: center;
  }
</style>
