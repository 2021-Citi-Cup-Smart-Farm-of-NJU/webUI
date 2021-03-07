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
import Claims from "../views/Insurance/villagers/Claims";
import Results from "../views/Insurance/villagers/Results";
import ClaimsProcess from "../views/Insurance/villagers/ClaimsProcess";
import Process from "../views/Insurance/villagers/Process";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/home'
    },
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
      path: '/admin/main',
      name: 'AdminMain',
      component: AdminMain,
    },
    {
      path:'/admin/publicity',
      name:'Publicity',
      component:Publicity
    },
    {
      path:'/admin/enterprise',
      name:'Enterprise',
      component:Enterprise
    },
    {
      path: '/enterprise/main',
      name: 'EnterpriseMain',
      component: EnterpriseMain,
    },
    {
      path: '/enterprise/insurance',
      name: 'Insurance',
      component: Insurance
    },
    {
      path: '/enterprise/points',
      name:'Points',
      component: Points
    },
    {
      path: '/villagers/main',
      name: 'villagers',
      component: VillagersMain,
    },
    {
      path: '/villagers/transact',
      component: Transact
    },
    {
      path: '/villagers/query',
      component: Query
    },
    {
      path: '/villagers/claims',
      component: Claims
    },
    {
      path: '/villagers/process',
      component: Process
    },
    {
      path: '/villagers/results',
      component: Results
    },
    {
      path: '/villagers/claimsprocess',
      component: ClaimsProcess
    },
    ]
})
