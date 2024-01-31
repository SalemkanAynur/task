<template>
  <button class="btn" :disabled="disabled" :class="{ 'btn-disabled': disabled, 'full-width': fullWidth }">
    {{ text }}
  </button>
</template>
<script setup>
  import { defineProps } from "vue";

  const props = defineProps({
    icon: [String, Boolean],
    disabled: Boolean,
    type: {
      type: String,
      default: "button"
    },
    color: String,
    size: String,
    text: String,
    fullWidth: Boolean
  });
</script>
<style lang="scss" scoped>
  @import "./index.style.scss";
</style>
