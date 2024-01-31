<template>
  <component :is="layout">
    <router-view></router-view>
  </component>
</template>

<script setup lang="ts">
  import { computed } from "vue";
  import { useRoute } from "vue-router";

  const route = useRoute();

  const layout = computed(() => {
    return route.meta.layout || "auth";
  });
</script>
