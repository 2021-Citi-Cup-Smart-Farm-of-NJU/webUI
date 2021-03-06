<template>
    <div class="container">
        <div class="title">农业保险</div>
        <div class="swiper">
          <el-carousel :interval="5000" arrow="always" height="300px">
            <el-carousel-item v-for="(item,index) in swipers" :key="index">
              <img src="@/assets/cards/card1.png">
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="content">
            <div class="box">
              <div class="box-title">
                <span>合作单位&nbsp;&nbsp;</span>
                <span class="detail">详情<i class="iconfont icon-xiangqing" style="font-size: 10px"></i></span>

              </div>
              <div class="box-content">
                <div class="box-card enterprise-card"  v-for="(item,index) in enterprises" :key="index">
                      {{item.name}}
                </div>
              </div>
            </div>
          <div class="box">
            <div class="box-title">
              <span>保险宣传&nbsp;&nbsp;</span>
              <span class="detail">详情<i class="iconfont icon-xiangqing" style="font-size: 10px"></i></span>
            </div>
            <div class="box-content">
              <div class="box-card publicity-card"  v-for="(item,index) in enterprises" :key="index">
                {{item.name}}
              </div>
            </div>
          </div>
        </div>
        <tabbar></tabbar>
    </div>
</template>

<script>
  import tabbar from "../../../components/tabbar";
    export default {
        name: "AdminMain",
        components: {
            tabbar
        },
        data () {
            return {
                enterprises:[
                    {
                        index:0,
                        name:'合作保险公司名称',

                        imgUrl:"",

                    },
                    {
                        index:1,
                        name:'合作保险公司名称',
                        imgUrl:"",

                    },
                    {
                        index:2,
                        name:'合作保险公司名称',
                        imgUrl:"",

                    },

                ],
                swipers:[
                    {
                        imgUrl:"@/assets/cards/card1.png"
                    },
                    {
                        imgUrl:"@/assets/cards/card2.png"
                    },
                    {
                        imgUrl:"@/assets/cards/card3.png"
                    },
                    {
                        imgUrl:"@/assets/cards/card4.png"
                    }
                ]
            }
        },
        computed: {

        },
        mounted() {

            // document.querySelector('body').setAttribute('style', 'background-color:#000000;')
            // // document.querySelector('body').setAttribute('style', '')
        },
        watch: {

        },
        methods: {

        }
    }
</script>

<style scoped>
  .container{

    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-bottom: 70px;
  }
  .title{
      height: 30px;
      width: 100%;
      line-height: 30px;
      text-align: center;
    background-color: #d3dce6;
  }
  .content{
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .box{
      width: 90%;
      margin: 20px;
  }
  .box-title{
      height: 30px;
      width: 100%;
  }
  .box-title .detail{
    font-weight: bold;
  }
  .box-content{
      display: flex;
      width: 100%;
    flex-direction: column;
  }
  .box-card{
    margin-top: 18px;
      height: 60px;
      width: 100%;
      text-align: center;
      line-height: 50px;
    color: white;
    background-color: blueviolet;
    border-radius: 5px 5px;
    box-shadow: #bfbfbf 2px 2px 2px 2px;
  }
  img{
      height: 300px;
      width: 100%;
  }
  /*el-carousel-item{*/
  /*  background-color: #2c3e50;*/
  /*}*/
  /*.el-carousel__item{*/

  /*}*/

  /*.el-carousel__item:nth-child(2n) {*/

  /*}*/

  /*.el-carousel__item:nth-child(2n+1) {*/

  /*}*/

</style>
