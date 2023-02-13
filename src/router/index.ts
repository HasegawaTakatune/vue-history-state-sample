import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/page1',
      name: 'page1',
      component: () => import('../views/Samples/Page1.vue')
    },
    {
      path: '/page2',
      name: 'page2',
      component: () => import('../views/Samples/Page2.vue')
    },
    {
      path: '/page3',
      name: 'page3',
      component: () => import('../views/Samples/Page3.vue')
    }
  ]
})

export default router
