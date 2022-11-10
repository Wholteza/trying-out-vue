<script setup lang="ts">
defineProps<{
  url: string;
}>();
</script>

<template>
  <a :href="url" class="link">
    <slot></slot>
  </a>
</template>

<style scoped>
.link {
  box-shadow: #00ff77 0px -3px 0px 0px inset;
  text-decoration: none;
  color: inherit;
  letter-spacing: inherit;
  line-height: inherit;
}
</style>
