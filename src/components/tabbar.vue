<template>
    <div class="tabbar">
      <div class="bar" @click="enter(0)" :class="currentIndex==0?'action':''">
        <i class="iconfont icon-fund-fill"></i>
        <div>积分信息</div>
      </div>
      <div class="bar" @click="enter(1)" :class="currentIndex==1?'action':''">
        <i class="iconfont icon-qianbao"></i>
        <div>小额信贷</div>
      </div>
      <div class="bar" @click="enter(2)" :class="currentIndex==2?'action':''">
        <i class="iconfont icon-shuju"></i>
        <div>大数据治理</div>
      </div>
      <div class="bar" @click="enter(3)" :class="currentIndex==3?'action':''">
        <i class="iconfont icon-insurance-fill"></i>
        <div>农业保险</div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "tabbar",
        components: {

        },
        data () {
            return {
                currentIndex:0
            }
        },
        computed: {

        },
        mounted() {

            // document.querySelector('body').setAttribute('style', 'background-color:#000000;')
            // // document.querySelector('body').setAttribute('style', '')
        },
        beforeDestroy() {
            // document.querySelector('body').removeAttribute('style')
        },
        watch: {
            // $route: {
            //     handler: function(route) {
            //         this.redirect = route.query && route.query.redirect
            //     },
            //     immediate: true
            // },
        },
        methods: {
            enter(index){
                this.currentIndex=index
                switch (index) {
                    case 0:
                        break
                    case 1:
                        break
                    case 2:
                        break
                }
            }
        }
    }
</script>

<style scoped>

.tabbar{
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;

}
i{
  font-size: 30px;
}
  .bar{
    width: 25%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .action{
    color: red;
  }
</style>
