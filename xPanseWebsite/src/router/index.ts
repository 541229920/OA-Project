import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/Layout.vue'
import Home from '@/views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      children: [
        {
          path: '/',
          component: Layout,
          children: [
            {
              path: '/',
              component: Home
            }, {
              path: '/profile',
              component: () => import('@/views/Profile.vue')
            }, {
              path: '/research',
              component: () => import('@/views/Research.vue')
            }, {
              path: '/About',
              component: () => import('@/views/About.vue')
            }
          ]
        }
      ]
    },
  ]
})

export default router
