<script setup lang="ts">
import CliTypography from "./CliTypography.vue";

defineProps<{
  title: string;
  customHeader?: string[];
}>();
</script>

<template>
  <CliTypography v-for="header in customHeader" :key="header" block>{{
    header
  }}</CliTypography>
  <CliTypography variant="title" block>{{ title }}</CliTypography>
  <slot />
</template>

<style scoped></style>
