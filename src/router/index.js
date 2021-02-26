import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/views/Home'
import Login from '@/views/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      // 首页
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      //登陆页面
      path: '/Login',
      name: 'Login',
      component: Login
    }
    
  ]
})
