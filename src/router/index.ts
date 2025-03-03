
import * as VueRouter from "vue-router";
import guards from "./guards";

  const routes: [
     
        {
          path: "dashboard",
          component:()=> import ("@/modules/dashboard/layout/index.vue"),
          name: "dashboard",
          
          }
          ,
        {
          path: "category",
          component:()=> import ("@/modules/category/layout/index.vue"),
          name: "category",
          
          }
          ,
        {
          path: "services",
          component:()=> import ("@/modules/services/layout/index.vue"),
          name: "services",
          
          }
          
  ]

  const validRoutes = routes.filter((route): route is VueRouter.RouteRecordRaw => route !== undefined);

const router = VueRouter.createRouter({
  scrollBehavior: () => {
    return { x: 0, y: 0, behavior: "smooth" };
  },
routes: validRoutes,
});

guards(router);

export default router;
