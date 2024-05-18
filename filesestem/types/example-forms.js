/////////////////////////////
// types for context of files
/////////////////////////////

const componentCode = () =>
  `
<template>
<div>
</div>
</template>

<script setup lang="ts">
</script>

<style scoped>
/* Add your component styles here */
</style>
`;
// ///////////////////////////////////////
const layoutCode = () =>
  `
<script setup lang="ts"></script>

<template>
    <RouterView />
</template>

`;
//////////////////////////////////////////////////////////////////
///////////////////////////////heplart fanc///////////////////////
const fisrLetterUpperCase = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
const storeCode = (filename) => `
import { defineStore } from "pinia";
const use${fisrLetterUpperCase(filename)}Store = defineStore("${filename}Store", () => {});
export default use${fisrLetterUpperCase(filename)}Store;

`;
const routerCode = () => `
import { RouteRecordRaw } from "vue-router";

export default [
  {
    path: "",
    component: () => import("./layout/index.vue"),
    // name: "layoutName",
    // children:[
    //     {
    //         path: "",
    //         component: () => import("./pages/......."),
    //         name: "Home",
    //     }
    // ]
  },
] as Array<RouteRecordRaw>;


`;
export {
  storeCode,
  layoutCode,
  componentCode,
  routerCode
}