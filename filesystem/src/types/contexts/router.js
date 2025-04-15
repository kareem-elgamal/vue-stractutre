/////////////////////////////
// types for nuxt config of files
/////////////////////////////
// import Path from "path";

// import { integrateRoute } from "../../midelware/integrate-route.js";
function camelToKebab(str) {
  return str
    .replace(/([a-z])([A-Z])/g, "$1-$2") // Insert a dash before uppercase letters
    .toLowerCase(); // Convert everything to lowercase
};
function kebabToCamelCase(kebab) {
  return kebab
    .split('-')
    .map((word, index) => index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}


export const routerCode = (name, path, modules) => {

  return `
  import { RouteRecordRaw } from "vue-router";
  export default [
    {
      path: "${camelToKebab(name)}",
      component: () => import("./layout/index.vue"),
      name: "${kebabToCamelCase(name)}Layout",
      children:[
     ${modules.page.length ? modules.page.map(el => {
    return `{
         path: "${el}",
         component: () => import("./pages/${el}.vue"),
             },
         `
  }) : ''
}
      ]
      }
      ] as Array<RouteRecordRaw>;
      `;
}