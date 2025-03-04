
  import { RouteRecordRaw } from "vue-router";

  
  export default [
    {
      path: "manage-services",
      component: () => import("./layout/index.vue"),
      name: "manageServicesLayout",
      children:[
     {
         path: "index",
         component: () => import("./pages/index.vue"),
             },
         
      ]
      }
      ] as Array<RouteRecordRaw>;
      