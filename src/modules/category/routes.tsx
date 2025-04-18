
  import { RouteRecordRaw } from "vue-router";

  
  export default [
    {
      path: "category",
      component: () => import("./layout/index.vue"),
      name: "categoryLayout",
      children: [
{
         path: "index",
component: () => import("./pages/index.vue"),
},
,
{ path: "/children1",
component: () => import("./modules/children1/routes.tsx") },
{ path: "/children2", component: () => import("./modules/children2/routes.tsx") }
]
 
 
      }
      ] as Array<RouteRecordRaw>;
      