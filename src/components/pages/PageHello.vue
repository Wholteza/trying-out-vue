<script setup lang="ts">
import CliPage from "../CliPage.vue";
import CliTypography from "../CliTypography.vue";
</script>
<template>
  <CliPage title="Hello" :custom-header="['cat ~/hello']" class="fade-in">
    <CliTypography block paragraph>
      Hi there! Welcome to my website made in vue.
    </CliTypography>
    <CliTypography block paragraph>
      This is just a simple test to explore and learn. It is quite impressive
      how fast you can progress when you're already experienced with similar
      frameworks such as react or angular.
    </CliTypography>
  </CliPage>
</template>
