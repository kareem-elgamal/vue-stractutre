import useGlobalStore from "@/store/useGlobalStore";

import { Router } from "vue-router";

export default function ProtectedRouter(router: Router) {
  return router.beforeEach((to, from, next) => {
    const { user } = useGlobalStore();

    const isAuthenticated = !!user;

    const inAuthPage = to.path.includes("/auth");

    if (!isAuthenticated && !inAuthPage) {
      return next({ name: "LoginIndex", replace: true });
    }

    if (isAuthenticated && inAuthPage) {
      return next({ name: "Home", replace: true });
    }

    if (!isAuthenticated && inAuthPage) {
      return next();
    }

    return next();
  });
}
