import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/Home'
Vue.use(Router)

const normalRoutes = [
  {
    path: '/',
    name: '主页',
    component: Home
  }
]

export const router = new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    ...normalRoutes,
    {
      path: '*',
      redirect: '/404'
    }
  ]
})
