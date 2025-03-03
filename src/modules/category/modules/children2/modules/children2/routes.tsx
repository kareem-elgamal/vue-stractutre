
  import { RouteRecordRaw } from "vue-router";

  
  export default [
    {
      path: "children2",
      component: () => import("./layout/index.vue"),
      name: "children2Layout",
      children:[
     {
         path: "index",
         component: () => import("./pages/index.vue"),
             },
         
      ]
      }
      ] as Array<RouteRecordRaw>;
      