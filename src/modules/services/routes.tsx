
  import { RouteRecordRaw } from "vue-router";

  
  export default [
    {
      path: "services",
      component: () => import("./layout/index.vue"),
      name: "servicesLayout",
      children: [
{
         path: "index",
component: () => import("./pages/index.vue"),
},
,
{ path: "/manage-services",
component: () => import("./modules/manage-services/routes.tsx") },
{ path: "/form-templates", component: () => import("./modules/form-templates/routes.tsx") }
]
 
 
      }
      ] as Array<RouteRecordRaw>;
      