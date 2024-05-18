
import { RouteRecordRaw } from "vue-router";

export default [
  {
    path: "",
    component: () => import("./layout/index.vue"),
    name: "Home",
    // children:[
    //     {
    //         path: "",
    //         component: () => import("./pages/......."),
    //         name: "Home",
    //     }
    // ]
  },
] as Array<RouteRecordRaw>;


