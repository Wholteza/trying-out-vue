<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

defineProps<{
  variant?: "body" | "title";
  cursor?: boolean;
}>();

const showCursor = ref(true);
const cursorIntervalReference = ref<number | undefined>();

onMounted(() => {
  cursorIntervalReference.value = setInterval(
    () => (showCursor.value = !showCursor.value),
    700
  );
});
onUnmounted(() => {
  cursorIntervalReference.value && clearInterval(cursorIntervalReference.value);
});
</script>

<template>
  <span
    :class="{
      'variant-body': !variant || variant === 'body',
      'variant-title': variant === 'title',
    }"
  >
    <slot></slot>
    <span v-show="cursor && showCursor" class="cursor">_</span>
  </span>
</template>
<style scoped>
.variant-body {
  background-color: #eee;
  letter-spacing: 0.1em;
  line-height: 1.3em;
  font-size: 1.2em;
}
.variant-title {
  color: #555;
  letter-spacing: 0.1em;
  font-size: 2em;
}
.cursor {
  color: #00ff77;
  box-shadow: #00ff77 0px -3px 0px 0px inset;
}
</style>
