<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

defineProps<{
  variant?: "tiny" | "body" | "title";
  cursor?: boolean;
  block?: boolean;
  paragraph?: boolean;
  noFade?: boolean;
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
  <div :class="{ inline: !block, paragraph, 'fade-in': !noFade }">
    <span
      :class="{
        'variant-body': !variant || variant === 'body',
        'variant-title': variant === 'title',
        'variant-tiny': variant === 'tiny',
        block,
      }"
    >
      <span v-if="variant === 'title'">> </span>
      <slot></slot>
      <span v-show="cursor && showCursor" class="cursor">_</span>
    </span>
  </div>
</template>
<style scoped lang="sass">
@import "./../assets/variables.sass"
.variant-body
  background-color: #eee
  letter-spacing: 0.1em
  line-height: 1.3em
  font-size: 1.2em
  font-weight: 400
.variant-tiny
  background-color: #eee
  letter-spacing: 0.1em
  line-height: 0px
  font-size: 0.8em
  font-weight: 400

.variant-title
  color: #555
  letter-spacing: 0.1em
  font-size: 3em
  font-weight: 500

.cursor
  color: #00ff77
  box-shadow: #00ff77 0px -3px 0px 0px inset

.inline
  display: inline-block

.paragraph
  margin-top: 10px
  margin-bottom: 10px

@media screen and (max-width: $small-device-max-width)
  .variant-title
    font-size: 2em

  .variant-body
    font-size: 0.9em

  .variant-tiny
    font-size: 0.7em
</style>
