// /////////////////////////////
// types for layout of files
/////////////////////////////
export const layoutCode = () =>
    `
  <script setup lang="ts">
  // import parent layout what you want and wrap solt inside it to make sited layout 
  // import ParentLayout from "../../layouts/*****.vue" 
  </script>
  
  <template>
  <!-- <pearnt-layout> // id it has -->
      <slot />
      <!--  <pearnt-layout> -->
  </template>
  
  `;