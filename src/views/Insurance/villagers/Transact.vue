<template>
  <div class="container">
    <div class="title">
      <div class="title-back" @click="back()"><i class="iconfont icon-fanhui"></i>返回</div>
      <span>保险办理</span>
    </div>
    <div class="sousuo">
      <div class="search">
        <input data-id="search" type="search" alt="search" v-model="input">
        <i class="iconfont icon-sousuo"  @click="search()"></i>
      </div>
      <div class="classification">
        <i class="iconfont icon-icon-"></i>
        <span>分类</span>
      </div>
    </div>
    <div class="content">
      <div class="box-card"  v-for="(item,index) in enterprises" :key="index">
        <div class="card-title">
          <div class="card-avatar"><img src="@/assets/cards/card2.png"></div>

          <div class="card-name">
            <span style="font-weight: bold">{{item.name}}</span>
            <span style="font-weight: lighter">{{item.time}}</span>
          </div>
          <div class="card-right">
            <div class="card-button">详情</div>
            <i class="iconfont icon-gengduo"></i>
          </div>
        </div>
        <div class="card-introduction">{{item.introduction}}</div>
      </div>

    </div>
    <tabbar></tabbar>
  </div>
</template>

<script>
    import tabbar from "../../../components/tabbar";
    export default {
        name: "Transact",
        components: {
            tabbar
        },
        data () {
            return {
                input:"",
                enterprises:[
                    {
                        index:0,
                        name:'安华种植业保险',
                        imgUrl:"@/assets/cards/card2.png",
                        introduction:"政策性保险,政府保费补贴高,自交保费少,保障范围广.只需交纳少量的保费就可解决'靠天吃饭'的后顾之忧",
                        time:"12-01",
                    },
                    {
                        index:1,
                        name:'安华种植业保险',
                        imgUrl:"",
                        introduction:"政策性保险,政府保费补贴高,自交保费少,保障范围广.只需交纳少量的保费就可解决'靠天吃饭'的后顾之忧",
                        time:"12-01",

                    },
                    {
                        index:2,
                        name:'安华种植业保险',
                        imgUrl:"",
                        introduction:"政策性保险,政府保费补贴高,自交保费少,保障范围广.只需交纳少量的保费就可解决'靠天吃饭'的后顾之忧",
                        time:"12-01",
                    },
                    {
                        index:3,
                        name:'安华种植业保险',
                        imgUrl:"",
                        introduction:"政策性保险,政府保费补贴高,自交保费少,保障范围广.只需交纳少量的保费就可解决'靠天吃饭'的后顾之忧",
                        time:"12-01",
                    },
                    {
                        index:4,
                        name:'安华种植业保险',
                        imgUrl:"",
                        introduction:"政策性保险,政府保费补贴高,自交保费少,保障范围广.只需交纳少量的保费就可解决'靠天吃饭'的后顾之忧",
                        time:"12-01",
                    },

                ],

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
            back(){

                this.$router.go(-1)
            }
        }
    }
</script>

<style scoped>
  .container{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-bottom: 80px;
  }
  .title{
    height: 60px;
    width: 100%;
    line-height: 60px;
    text-align: center;
    background-color: #d3dce6;
    font-size: 30px;
    font-weight: bold;
    /*color: black;*/
    letter-spacing:3px;
  }
  .title-back{
    position: absolute;
    left: 20px;
    display: inline-block;
    line-height: 60px;
    color: #0362ff;
    /*font-size: 30px;*/
    font-weight: normal;
  }
  .sousuo{
    height: 90px;
    width: 100%;
    padding: 10px 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: wheat;
  }
  .search{
    height: 70px;
    width: 85vw;

  }

  .search i{
    position: absolute;
    /*z-index: 500;*/
    display: inline-block;
    font-size: 30px;
    right: 17vw;
    top:100px;
    /*margin-top: -20px;*/
    color:black;
  }

  input[type="search"] {
    font-family: 宋体, iconfont;
    height: 100%;
    width: 82vw;
    margin-left: 3vw;
    display: inline-block;
    padding-left: 1vw;
    padding-right: 1.7vw;

    border-radius: 1.5vw 1.5vw;
    border: #d3d3d3 1px solid;
    outline:none;
    background-color: white;
    color:black;
    font-size: 12px;
  }
  input[type=search]::-webkit-search-cancel-button{
    -webkit-appearance: none;
  }
  .classification{
    width: 15vw;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .content{
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .box-card{
    margin-top: 60px;
    height: 180px;
    width: 90%;
    /*padding: 15px 15px;*/
    color: black;
    background-color: #f0f0f0;
    border-radius: 10px 10px;
    box-shadow: #d3d3d3 5px 5px 5px 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

  }
  .box-card:first-child{
    margin-top: 90px;
  }
  .card-title{
    height: 40%;
    width: 93%;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    position: relative;
  }
  .card-title .card-avatar{
    height: 68px;
    width: 68px;
    border-radius: 50%;
    background-color: #d3dce6;
    /*border: 1px solid black;*/
  }
  .card-avatar img{
    height: 68px;
    width: 68px;
    border-radius: 50%;
  }

  .card-title .card-name{
    height: 100%;
    width: 40%;
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    /*align-items: end;*/
    text-align: left;
    font-size: 27px;

  }
  .card-title .card-name span{

  }
  .card-title .card-right{
    width: 20%;
    position: absolute;
    right: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .card-right i{
    font-size: 40px;
  }
  .card-right .card-button{
    height: 50px;
    width: 70px;
    background-color: #42b983;
    border-radius: 5px 5px;
    text-align: center;
    line-height: 50px;
    color: white;
  }
  .card-introduction{
    font-family: 微软雅黑;
    height: 40%;
    width: 93%;
    /*font-weight: lighter;*/
    font-size: 27px;
    overflow: hidden;
    text-overflow:ellipsis;
    display: flex;
    align-items: start;
  }



</style>
