
  import { RouteRecordRaw } from "vue-router";

  
  export default [
    {
      path: "children1",
      component: () => import("./layout/index.vue"),
      name: "children1Layout",
      children:[
     {
         path: "index",
         component: () => import("./pages/index.vue"),
             },
         
      ]
      }
      ] as Array<RouteRecordRaw>;
      