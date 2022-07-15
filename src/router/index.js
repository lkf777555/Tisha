import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('../views/login')
  },
  {
    path: '/:cathchAll(.*)',
    name: '404',
    component: () => import('../views/404')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
