function kebabToCamelCase(kebab) {
  if (!kebab || typeof kebab !== "string") return ""; // Handle undefined or non-string input

  if (!kebab.includes("-")) return kebab; // Return as is if no '-'

  return kebab
    .split("-")
    .map((word, index) =>
      index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join("");
}
function camelToKebab(str) {
  return str
    .replace(/([a-z])([A-Z])/g, "$1-$2") // Insert a dash before uppercase letters
    .toLowerCase(); // Convert everything to lowercase
}
export const routeCofig = (name, path, modules) => `
import * as VueRouter from "vue-router";
import guards from "./guards";

  const routes: [
     ${modules.map(element => {
  return element ? `
        {
          path: "${camelToKebab(element.name)}",
          component:()=> import ("@/modules/${element.name}/layout/index.vue"),
          name: "${kebabToCamelCase(element.name)}",
          ${modules.children ? 'children: []' : ''}
          }
          `: ''
})}
  ]

  const validRoutes = routes.filter((route): route is VueRouter.RouteRecordRaw => route !== undefined);

const router = VueRouter.createRouter({
  scrollBehavior: () => {
    return { x: 0, y: 0, behavior: "smooth" };
  },
routes: validRoutes,
});

guards(router);

export default router;
`