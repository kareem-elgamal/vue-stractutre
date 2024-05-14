import { RouteRecordRaw } from "vue-router";

export default [
  {
    path: "",
    component: () => import("./pages/Login.vue"),
    name: "LoginIndex",
  },
  {
    path: "login",
    component: () => import("./pages/Login.vue"),
    name: "Login",
  },
  {
    path: "register",
    component: () => import("./pages/Register.vue"),
    name: "Register",
  },
  {
    path: "forget-password",
    component: () => import("./pages/ForgetPassword.vue"),
    name: "ForgetPassword",
  },
] as Array<RouteRecordRaw>;
