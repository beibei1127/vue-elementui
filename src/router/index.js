import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import Layout from '@/layout/index.vue'
import errorPage from '../views/404.vue'
import { getToken } from '@/utils/auth'


Vue.use(VueRouter)

export const constantRoutes = [
  {
    path: '/',
    redirect:'/nihao',
    name: 'Layout',
    component: Layout,
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/404',
    name: '404',
    component: errorPage
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

export const asyncRoutes = [
  {
    path: '/admin',
    // redirect:'/admin/nihao',
    name: 'Layout',
    component: Layout,
    meta: {
      roles: ['admin','yunwei'],
      title:'图表',
      icon:'el-icon-s-home'
    },
    children: [
      {
        path: '/nihao',
        name: 'nihao',
        component: () => import('@/views/role/nihao.vue'),
        meta: {
          roles: ['admin'],
          title:'柱形图',
          icon:'el-icon-s-home'
        }
      },
      {
        path: '/yunwei',
        name: 'Yunwei',
        component: () => import('@/views/role/yunwei.vue'),
        meta: {
          roles: ['yunwei'],
          title:'折线图',
          icon:'el-icon-s-home'
        },
      }
    ]
  },
  {
    path: '/yunweiaa',
    name: 'yunwei',
    component: () => import('@/views/role/yunwei.vue'),
    meta: {
      roles: ['yunwei'],
      title:'表格',
      icon:'el-icon-s-home'
    }
  },
  {
    path: '/main',
    name: 'Layout',
    component: Layout,
    meta: {
      roles: ['admin'],
      title:'嵌套',
      icon:'el-icon-s-home'
    },
    children:[
      {
        path: '/mainone',
        name: 'mainone',
        component: () => import('@/views/main/main.vue'),
        meta: {
          roles: ['admin'],
          title:'嵌套一',
          icon:'el-icon-s-home'
        },
        children:[
          {
            path: '/maintwo',
            name: 'maintwo',
            component: () => import('@/views/main/main.vue'),
            meta: {
              roles: ['admin'],
              title:'嵌套二',
              icon:'el-icon-s-home'
            },
          },
          {
            path: '/qiantao2',
            name: 'qiantao2',
            component: () => import('@/views/main/index.vue'),
            meta: {
              roles: ['yunwei'],
              title:'嵌套2',
              icon:'el-icon-s-home'
            },
          },
          {
            path: '/mainthree',
            name: 'mainthree',
            component: () => import('@/views/main/indexa.vue'),
            meta: {
              roles: ['yunwei'],
              title:'嵌套er',
              icon:'el-icon-s-home'
            },
          }
        ]
      },
    ]
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:constantRoutes
})



export default router
