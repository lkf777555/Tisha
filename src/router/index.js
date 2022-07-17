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
    path: '/',
    name: 'layout',
    component: () => import('../layout')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
NProgress.configure({
  showSpinner: true, // 加载微调器设置,默认为true
  // 使用缓动（CSS缓动字符串）和速度（以毫秒为单位）调整动画设置。（默认：ease和200）
  easing: 'ease',
  speed: 2000,
  minimum: 0 // 更改启动时使用的最小百分比
})
// 路由进入之前
router.beforeEach((to, from, next) => {
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
