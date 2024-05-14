<script setup lang="ts">
import useGlobalStore from "@/store/useGlobalStore";
import { storeToRefs } from "pinia";

const store = useGlobalStore();

const { theme } = storeToRefs(store);

const { toggleTheme: actionToggleTheme } = store;

function toggleTheme() {
  if (theme.value === "light") {
    actionToggleTheme("dark");
  } else {
    actionToggleTheme("light");
  }
}
</script>

<template>
  <button @click="toggleTheme" class="btn btn-primary">
    toggle theme {{ theme }}
  </button>
</template>
