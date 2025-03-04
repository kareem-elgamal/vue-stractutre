
  import { RouteRecordRaw } from "vue-router";

  
  export default [
    {
      path: "form-templates",
      component: () => import("./layout/index.vue"),
      name: "formTemplatesLayout",
      children:[
     {
         path: "index",
         component: () => import("./pages/index.vue"),
             },
         
      ]
      }
      ] as Array<RouteRecordRaw>;
      