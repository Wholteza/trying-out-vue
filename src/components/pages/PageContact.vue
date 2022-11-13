<script setup lang="ts">
import CliPage from "../CliPage.vue";
import CliTypography from "../CliTypography.vue";
</script>
<template>
  <CliPage title="Contact" :custom-header="['cat ~/contact']">
    <CliTypography block paragraph cursor> Contact me at ...</CliTypography>
  </CliPage>
</template>
