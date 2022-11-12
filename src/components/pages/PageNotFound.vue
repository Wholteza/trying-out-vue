<script setup lang="ts">
import CliPage from "../CliPage.vue";
import CliTypography from "../CliTypography.vue";
</script>
<template>
  <CliPage title="404" :custom-header="['???']">
    <CliTypography block paragraph>
      This page could not be found.
    </CliTypography>
  </CliPage>
</template>
