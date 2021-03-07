<template>
  <div class="container">
    <div class="title">农业保险</div>
    <div class="el-carousel swiper">
      <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="(item,index) in swipers" :key="index">
          <img src="@/assets/cards/card2.png" alt/>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="content">
      <div class="options">
        <div class="option" v-for="(item,index) in options" :key="index" @click="chooseOption(item)">
          <div class="option-icon">
            <i class="iconfont" :class="item.icon"></i>
          </div>
          <span class="option-name">{{item.name}}</span>
        </div>
<!--        <div class="option">-->
<!--          <div class="option-icon">-->
<!--            <i class="iconfont icon-insurance"></i>-->
<!--          </div>-->
<!--          <span class="option-name">保险办理</span>-->
<!--        </div>-->
<!--        <div class="option">-->
<!--          <div class="option-icon">-->
<!--            <i class="iconfont icon-liucheng"></i>-->
<!--          </div>-->
<!--          <span class="option-name">核保流程</span>-->
<!--        </div>-->
<!--        <div class="option">-->
<!--          <div class="option-icon">-->
<!--            <i class="iconfont icon-jieguobaozhang"></i>-->
<!--          </div>-->
<!--          <span class="option-name">承保结果</span>-->
<!--        </div>-->
<!--        <div class="option">-->
<!--          <div class="option-icon">-->
<!--            <i class="iconfont icon-_baoxianlipei"></i>-->
<!--          </div>-->
<!--          <span class="option-name">申请理赔</span>-->
<!--        </div>-->
<!--        <div class="option">-->
<!--          <div class="option-icon">-->
<!--            <i class="iconfont icon-preferences"></i>-->
<!--          </div>-->
<!--          <span class="option-name">理赔流程</span>-->
<!--        </div>-->
      </div>
      <div class="box">
        <div class="box-title">
          <span>合作单位&nbsp;&nbsp;</span>
          <router-link to="/admin/enterprise">
            <span class="detail">详情<i class="iconfont icon-xiangqing" style="font-size: 10px"></i></span>
          </router-link>
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
        name: "VillagersMain",
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
                ],
                options:[
                    {
                        icon:"icon-sousuo1",
                        name:"自助查询",
                        path:"/villagers/query"
                    },
                    {
                        icon:"icon-insurance",
                        name:"保险办理",
                        path:"/villagers/transact"
                    },
                    {
                        icon:"icon-liucheng",
                        name:"核保流程",
                        path:"/villagers/process"
                    },
                    {
                        icon:"icon-jieguobaozhang",
                        name:"承保结果",
                        path:"/villagers/results"
                    },
                    {
                        icon:"icon-_baoxianlipei",
                        name:"申请理赔",
                        path:"/villagers/claims"
                    },
                    {
                        icon:"icon-preferences",
                        name:"理赔流程",
                        path:"/villagers/claimsprocess"
                    },
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
            chooseOption(item){
                this.$router.push(item.path)
            }
        }
    }
</script>

<style scoped>
  .container{

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-bottom: 70px;
  }
  .title{
    height: 50px;
    width: 100%;
    line-height: 50px;
    text-align: center;
    background-color: #d3dce6;
    font-weight: bold;
    font-size: 27px;
  }
  .swiper{
    width:100%;
    height:300px;
  }
  .content{
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .options{
    margin-top: 20px;
    height: 300px;
    width: 90%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
  }
  .option{
    height: 150px;
    width: 33.3%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
  .option-icon{
    height: 90px;
    width: 90px;
    border-radius: 50%;
    background-color: rgba(255, 31, 6, 0.3);
    box-shadow: rgba(255, 31, 6, 0.1) 2px;
    display: flex;
    justify-content: center;
    align-items: center;

  }
  .option-icon i{
    font-size: 50px;
    color: red;
  }
  .option-name{

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
  .el-carousel__item{
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #99a9bf;
  }

</style>
