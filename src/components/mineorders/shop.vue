<template>
  <div class='calendar-box ' style="background: #F2F2F2;">
    <div>


      <van-nav-bar title="店铺" left-arrow @click-left="onClickLeft" style="background: #FFFFFF; z-index: 2025;" />


    </div>
    <div style="height: 10px;"></div>
    <van-list v-model="loading" :finished="finished" @load="onLoad">
      <van-cell v-for="item in goods" :key="item.id" :name="item.id">


        <div style="display: flex;">

          <div style="">
            <van-image width="100" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />
          </div>


          <div style="display: flex; justify-content: space-around;flex-direction: column;">
            <span>思匠德</span>
            <span>思匠德</span>






          </div>

        </div>

      </van-cell>

    </van-list>



  </div>

</template>

<script>
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

    },

    created() {




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
  .van-cell {
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


  }


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
