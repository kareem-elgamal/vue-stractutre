// /////////////////////////////
// // types for context of files
// /////////////////////////////

// const componentCode = () =>
//   `
// <template>
// <div>
// </div>
// </template>

// <script setup lang="ts">
// </script>

// <style scoped>
// /* Add your component styles here */
// </style>
// `;
// // ///////////////////////////////////////
// const layoutCode = () =>
//   `
// <script setup lang="ts"></script>

// <template>
//     <RouterView />
// </template>

// `;
// //////////////////////////////////////////////////////////////////
// ///////////////////////////////heplart fanc///////////////////////
// const fisrLetterUpperCase = (string) => {
//   return string.charAt(0).toUpperCase() + string.slice(1);
// }
// ///////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////
// const storeCode = (filename) => `
// import { defineStore } from "pinia";
// const use${fisrLetterUpperCase(filename)}Store = defineStore("${filename}Store", () => {});
// export default use${fisrLetterUpperCase(filename)}Store;

// `;
// const routerCode = () => `
// import { RouteRecordRaw } from "vue-router";

// export default [
//   {
//     path: "",
//     component: () => import("./layout/index.vue"),
//     // name: "layoutName",
//     // children:[
//     //     {
//     //         path: "",
//     //         component: () => import("./pages/......."),
//     //         name: "Home",
//     //     }
//     // ]
//   },
// ] as Array<RouteRecordRaw>;


// `;
import { componentCode } from "./contexts/component.js"
import { routerCode } from "./contexts/router.js"
import { PageCode } from "./contexts/page.js"
import { layoutCode } from "./contexts/layouts.js"
import { storeCode } from "./contexts/store.js"
import { i18nCode } from "./contexts/i18n.js"
import { i18nConf } from "./contexts/i18n-config.js"
import { routeCofig as routeConfigCode } from "./contexts/route-config.js"
import { protectRouter } from "./contexts/protect-router.js"
export {
  storeCode,
  layoutCode,
  componentCode,
  routerCode,
  PageCode,
  i18nCode,
  i18nConf,
  routeConfigCode,
  protectRouter
}