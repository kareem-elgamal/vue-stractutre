export const protectRouter = () => {

  return `
  import { Router } from "vue-router";
  
  export default function ProtectedRouter(router: Router) {
    return router.beforeEach((to, from, next) => {
      // add router guards if you has
      });
      }
      
      `
}