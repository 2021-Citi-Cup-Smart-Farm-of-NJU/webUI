<template>
  <div class="main">
    <Header></Header>
    <div class="el-carousel">
      <el-carousel :interval="4000" type="card" height="400px">
        <el-carousel-item v-for="item in imagebox" :key="item.id">
          <img :src="item.idView" class="image">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="alert">
      <el-alert title="年底诈骗分子猖獗，请广大村民提高警惕！" type="warning" show-icon center>
      </el-alert>
    </div>
    <div class="cards">
      <el-tabs type="border-card">
        <el-tab-pane label="积分农庄">
        <el-row gutter="100" type="flex" class="row-bg" justify="center">
          <el-col :span="8" v-for="item in imagebox2" :key="item.id" :offset="index > 0 ? 2 : 0">
            <el-card :body-style="{ padding: '0px' }">
              <img :src="item.idView" class="image">
              <div style="padding: 14px;">
                <span>小额贷款</span>
                <div class="bottom clearfix">
                  <el-button type="text" class="button">操作按钮</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>

        <el-row gutter="100" type="flex" class="row-bg" justify="center">
          <el-col :span="8" v-for="item in imagebox3" :key="item.id" :offset="index > 0 ? 2 : 0">
            <el-card :body-style="{ padding: '0px' }">
              <img :src="item.idView" class="image">
              <div style="padding: 14px;">
                <span>小额贷款</span>
                <div class="bottom clearfix">
                  <el-button type="text" class="button">操作按钮</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
        </el-tab-pane>
        <el-tab-pane label="xxxx">积分农庄</el-tab-pane>
        <el-tab-pane label="xxxx">积分农庄</el-tab-pane>
        <el-tab-pane label="xxxx">积分农庄</el-tab-pane>
      </el-tabs>

    </div>
  </div>
</template>

<script>
  import Header from '@/components/header'
  export default {
    name: 'Home',
    components: {
      Header
    },
    data() {
      return {
        imagebox: [{
            id: 0,
            idView: require('../assets/carousel/carousel1.jpeg')
          },
          {
            id: 1,
            idView: require('../assets/carousel/carousel2.jpeg')
          },
          {
            id: 2,
            idView: require('../assets/carousel/carousel3.jpeg')
          }
        ],
        imagebox2: [{
            id: 0,
            idView: require('../assets/cards/card1.png')
          },
          {
            id: 1,
            idView: require('../assets/cards/card2.png')
          }
        ],
        imagebox3: [{
            id: 0,
            idView: require('../assets/cards/card3.png')
          },
          {
            id: 1,
            idView: require('../assets/cards/card4.png')
          }
        ],

        screenWidth: 0,
        activeName: 'second'
      }
    },
    methods: {
      setSize: function() {
        // 通过浏览器宽度(图片宽度)计算高度
        this.bannerHeight = 400 / 1920 * this.screenWidth;
      },
      handleClick(tab, event) {
        console.log(tab, event);
      }
    },
    mounted() {
      // 首次加载时,需要调用一次
      this.screenWidth = window.innerWidth;
      this.setSize();
      // 窗口大小发生改变时,调用一次
      window.onresize = () => {
        this.screenWidth = window.innerWidth;
        this.setSize();
      }
    }
  }
</script>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;

  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .el-row
   {
    margin-bottom: 20px;

  }
  .el-row:last-child {
     margin-bottom: 0;
   }

  img {
    /*设置图片宽度和浏览器宽度一致*/
    width: 100%;
    height: inherit;
  }
</style>
