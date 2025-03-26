import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import CartView from '@/views/CartView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView,
    },
    {
      path: '/category/:slug',
      name: 'categories',
      component: () => import('@/views/CategoryView.vue'),
    },
    {
      path: '/products/:slug',
      name: 'products',
      component: () => import('@/views/ProductView.vue'),
    },
  ],
})

router.beforeResolve((to, _, next) => {
  if (to.name) {
    NProgress.start()
  }
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
