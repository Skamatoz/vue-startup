import { createMemoryHistory, createWebHistory, createRouter } from 'vue-router'
import Page1 from './Page1.vue'
import Page2 from './Page2.vue'
import Page3 from './Page3.vue'

const routes = [
  {
    path: '/',
    component: Page1
  },
  {
    path: '/page2',
    component: Page2
  },
  {
    path: '/page3',
    component: Page3
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router; // Экспорт по умолчанию