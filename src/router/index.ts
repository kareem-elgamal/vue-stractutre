import * as VueRouter from "vue-router";

import ProtectedRouter from "@/router/ProtectedRouter";

import { AuthLayout, RootLayout, NotFountLayout } from "@/layouts";

import authRoutes from "@/modules/auth/index.routes";

import homeRoutes from "@/modules/home/index.routes";

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior: () => {
    return { x: 0, y: 0, behavior: "smooth" };
  },
  routes: [
    {
      path: "/:pathMatch(.*)*",
      component: NotFountLayout,
      name: "NotFountLayout",
    },
    {
      path: "/",
      component: RootLayout,
      children: homeRoutes,
      // name: "RootLayout",
    },
    {
      path: "/auth",
      component: AuthLayout,
      children: authRoutes,
      // name: "AuthLayout",
    },
  ],
});

ProtectedRouter(router);

export default router;
