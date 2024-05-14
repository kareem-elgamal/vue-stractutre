import { createApp } from "vue";

import App from "./App.vue";

import router from "@/router/index";

import { createPinia } from "pinia";

import { VueQueryPlugin } from "@tanstack/vue-query";

import Vue3Toasity, { type ToastContainerOptions } from "vue3-toastify";

import "vue3-toastify/dist/index.css";

import "@/styles/index.css";

const pinia = createPinia();

createApp(App)
  .use(pinia)
  .use(router)
  .use(VueQueryPlugin)
  .use(Vue3Toasity, {
    autoClose: 3000,
  } as ToastContainerOptions)
  .mount("#app");
