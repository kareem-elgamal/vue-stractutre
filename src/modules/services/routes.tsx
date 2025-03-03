
  import { RouteRecordRaw } from "vue-router";

  
  export default [
    {
      path: "services",
      component: () => import("./layout/index.vue"),
      name: "servicesLayout",
      children:[
     {
         path: "index",
         component: () => import("./pages/index.vue"),
             },
         
      ]
      }
      ] as Array<RouteRecordRaw>;
      