
  import { RouteRecordRaw } from "vue-router";

  
  export default [
    {
      path: "dashboard",
      component: () => import("./layout/index.vue"),
      name: "dashboardLayout",
      children:[
     {
         path: "index",
         component: () => import("./pages/index.vue"),
             },
         ,{
         path: "add",
         component: () => import("./pages/add.vue"),
             },
         
      ]
      }
      ] as Array<RouteRecordRaw>;
      