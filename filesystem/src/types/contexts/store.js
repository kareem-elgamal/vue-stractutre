/////////////////////////////
// types for store of file
/////////////////////////////
function kebabToCamelCase(kebab) {
    return kebab
        .split('-')
        .map((word, index) => index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1))
        .join('');
}


export const storeCode = (filename) =>
    `
  import { defineStore } from "pinia";
  const use${kebabToCamelCase(filename)}Store = defineStore("${kebabToCamelCase(filename)}Store", () => {});
  export default use${kebabToCamelCase(filename)}Store;
  
  `;