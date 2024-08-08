import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeRoutes from '@/home/router/HomeRoutes'
import AccountRoutes from '@/account/router/AccountRoutes'
import AuthenticationRoutes from '@/authentication/router/AuthenticationRoutes'
import CommunityRoutes from '@/community/router/CommunityRoutes'

const routes: Array<RouteRecordRaw> = [
  ...HomeRoutes,
  ...AccountRoutes,
  ...AuthenticationRoutes,
  ...CommunityRoutes,
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
