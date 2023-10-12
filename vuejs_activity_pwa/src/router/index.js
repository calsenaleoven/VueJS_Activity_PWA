import { createRouter, createWebHistory } from 'vue-router'
import Game from '../views/Game.vue'
import Hightech from '../views/Hightech.vue'



const routes = [
  {
    path: '/',
    name: 'Game',
    component: Game
  },
  {
    path: '/manage',
    name: 'Hightech',
    component: Hightech

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
