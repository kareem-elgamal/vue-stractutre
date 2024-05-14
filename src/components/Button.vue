<script setup lang="ts">
defineProps({
  icon: {
    type: String,
    default: "",
  },
  iconWrapperClassName: {
    type: String,
    default: "",
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
  },
});
</script>

<template>
  <button
    type="button"
    :class="[
      'btn btn-primary min-w-[120px] relative capitalize text-base',
      {
        'justify-start': icon,
      },
    ]"
    :disabled="isLoading || disabled"
    v-bind="$attrs"
  >
    <span>
      {{ label }}
      <span class="loading loading-ring" v-if="icon && isLoading"></span>
    </span>
    <span
      v-if="icon"
      :class="[
        'absolute inset-[4px] start-auto w-[38px] rounded-full inline-flex items-center justify-center text-lg bg-white/20',
        iconWrapperClassName,
      ]"
    >
      <span class="loading loading-spinner" v-if="isLoading"></span>
      <i :class="['icon', icon]" v-else></i>
    </span>
  </button>
</template>
