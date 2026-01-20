import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '../pages/homepage.vue'
import About from '../pages/About.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Homepage,
    meta: { padded: false },
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: { padded: true },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

