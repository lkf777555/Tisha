import { createRouter, createWebHashHistory } from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login')
  },
  {
    path: '/:cathchAll(.*)',
    name: '404',
    component: () => import('../views/404')
  },
  {
    path: '/layout',
    name: 'layout',
    component: () => import('../layout'),
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('../views/Home')
      },
      {
        path: '/category/list',
        name: 'category',
        component: () => import('../views/category/list')
      },
      {
        path: '/goods/list',
        name: 'goods',
        component: () => import('../views/goods/list')
      },
      {
        path: '/skus/list',
        name: 'skus',
        component: () => import('../views/skus/list')
      },
      {
        path: '/coupon/list',
        name: 'coupon',
        component: () => import('../views/coupon/list')
      },
      {
        path: '/user/list',
        name: 'user',
        component: () => import('../views/user/list')
      },
      {
        path: '/level/list',
        name: 'level',
        component: () => import('../views/level/list')
      },
      {
        path: '/order/list',
        name: 'order',
        component: () => import('../views/order/list')
      },
      {
        path: '/comment/list',
        name: 'comment',
        component: () => import('../views/comment/list')
      },
      {
        path: '/manager/list',
        name: 'manager',
        component: () => import('../views/manager/list')
      },
      {
        path: '/access/list',
        name: 'access',
        component: () => import('../views/access/list')
      },
      {
        path: '/role/list',
        name: 'role',
        component: () => import('../views/role/list')
      },
      {
        path: '/setting/base',
        name: 'setting',
        component: () => import('../views/setting/base')
      },
      {
        path: '/image/list',
        name: 'image',
        component: () => import('../views/image/list')
      },
      {
        path: '/notice/list',
        name: 'notice',
        component: () => import('../views/notice/list')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
// 路由进入之前
router.beforeEach((to, from, next) => {
  NProgress.start()
  if (localStorage.getItem('token')) {
    next()
  } else {
    if (to.path === '/login') {
      next()
    } else {
      next('/login')
    }
  }
})
// 路由进入后
router.afterEach(() => {
  NProgress.done()
})
export default router
