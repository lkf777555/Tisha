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
        component: () => import('../views/Home'),
        meta: {
          title: '主控台'
        }
      },
      {
        path: '/category/list',
        name: 'category',
        component: () => import('../views/category/list'),
        meta: {
          title: '分类管理'
        }
      },
      {
        path: '/goods/list',
        name: 'goods',
        component: () => import('../views/goods/list'),
        meta: {
          title: '商品管理'
        }
      },
      {
        path: '/skus/list',
        name: 'skus',
        component: () => import('../views/skus/list'),
        meta: {
          title: '规格管理'
        }
      },
      {
        path: '/coupon/list',
        name: 'coupon',
        component: () => import('../views/coupon/list'),
        meta: {
          title: '优惠卷管理'
        }
      },
      {
        path: '/user/list',
        name: 'user',
        component: () => import('../views/user/list'),
        meta: {
          title: '用户管理'
        }
      },
      {
        path: '/level/list',
        name: 'level',
        component: () => import('../views/level/list'),
        meta: {
          title: '会员等级'
        }
      },
      {
        path: '/order/list',
        name: 'order',
        component: () => import('../views/order/list'),
        meta: {
          title: '订单管理'
        }
      },
      {
        path: '/comment/list',
        name: 'comment',
        component: () => import('../views/comment/list'),
        meta: {
          title: '评论管理'
        }
      },
      {
        path: '/manager/list',
        name: 'manager',
        component: () => import('../views/manager/list'),
        meta: {
          title: '管理员管理'
        }
      },
      {
        path: '/access/list',
        name: 'access',
        component: () => import('../views/access/list'),
        meta: {
          title: '权限管理'
        }
      },
      {
        path: '/role/list',
        name: 'role',
        component: () => import('../views/role/list'),
        meta: {
          title: '角色管理'
        }
      },
      {
        path: '/setting/base',
        name: 'setting',
        component: () => import('../views/setting/base'),
        meta: {
          title: '基础设置'
        }
      },
      {
        path: '/image/list',
        name: 'image',
        component: () => import('../views/image/list'),
        meta: {
          title: '图库管理'
        }
      },
      {
        path: '/notice/list',
        name: 'notice',
        component: () => import('../views/notice/list'),
        meta: {
          title: '公告管理'
        }
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
