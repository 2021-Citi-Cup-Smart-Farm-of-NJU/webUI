import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/views/Home'
import Login from '@/views/Login'
import AdminMain from "../views/Insurance/admin/AdminMain";
import EnterpriseMain from "../views/Insurance/enterprise/EnterpriseMain";
import Publicity from "../views/Insurance/admin/Publicity";
import Enterprise from "../views/Insurance/admin/Enterprise";
import Points from "../views/Insurance/enterprise/Points";
import Insurance from "../views/Insurance/enterprise/Insurance";
import VillagersMain from "../views/Insurance/villagers/VillagersMain";
import Transact from "../views/Insurance/villagers/Transact";
import Query from "../views/Insurance/villagers/Query";

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
    },
    {
      path: '/admin',
      name: 'AdminMain',
      component: AdminMain,
      children: [
        {
          path:'/admin/publicity',
          component:Publicity
        },
        {
          path:'/admin/enterprise',
          component:Enterprise
        },
        ]
    },
    {
      path: '/enterprise',
      name: 'enterprise',
      component: EnterpriseMain,
      children: [
        {
          path:'/enterprise/insurance',
          component:Insurance
        },
        {
          path:'/enterprise/points',
          component:Points
        },
    {
      path: '/villagers',
      name: 'villagers',
      component:VillagersMain,
      children: [
        {
          path:'/villagers/Transact',
          component:Transcat
        },
        {
          path:'/villagers/Query',
          component:Query
        },
      ]
    }


  ]
})
