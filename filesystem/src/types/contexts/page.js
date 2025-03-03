/////////////////////////////
// types for context of pages
/////////////////////////////
export const PageCode = (filename) =>
  `
  <template>
    <div class="">${filename} page</div>
  </template>
  <script lang="ts"setup>
  </script>
  `;