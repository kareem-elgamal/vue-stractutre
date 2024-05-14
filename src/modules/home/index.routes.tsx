import { RouteRecordRaw } from "vue-router";

export default [
  {
    path: "",
    component: () => import("./pages/Home.vue"),
    name: "Home",
  },
] as Array<RouteRecordRaw>;
