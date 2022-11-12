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
@keyframes green-wave {
  from {
    box-shadow: #00ff77 0px -3px 0px 0px inset;
  }
  to {
    box-shadow: #00ff77 0px -1.3em 0px 0px inset;
  }
}

@keyframes green-wave-reverse {
  from {
    box-shadow: #00ff77 0px -1.3em 0px 0px inset;
  }
  to {
    box-shadow: #00ff77 0px -3px 0px 0px inset;
  }
}
.link {
  box-shadow: #00ff77 0px -2px 0px 0px inset;
  text-decoration: none;
  color: inherit;
  letter-spacing: inherit;
  transition-duration: 200ms;
  line-height: inherit;
}
.link:hover {
  box-shadow: #00ff77 0px -1.3em 0px 0px inset;
}
</style>
