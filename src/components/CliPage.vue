<script setup lang="ts">
import CliTypography from "./CliTypography.vue";

defineProps<{
  title: string;
  customHeader?: string[];
}>();
</script>

<template>
  <div class="container">
    <CliTypography
      v-for="header in customHeader"
      :key="header"
      block
      variant="tiny"
      >{{ header }}</CliTypography
    >
    <CliTypography variant="title" block>{{ title }}</CliTypography>
    <slot />
  </div>
</template>

<style scoped></style>
