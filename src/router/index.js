import { createRouter, createWebHistory,createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/toListDet',
    name: 'toListDet',
    component: () => import('../views/toListDet.vue')
  },
  {
    path: '/searchView',
    name: 'searchView',
    component: () => import('../views/searchView.vue')
  },
  {
    path: '/tagMusicDet',
    name: 'tagMusicDet',
    component: () => import('../views/tagMusicDet.vue')
  },
]

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
    history:createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
