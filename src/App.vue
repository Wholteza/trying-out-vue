<script setup lang="ts">
import { Fragment } from "vue";
import BorderBox from "./components/BorderBox.vue";
import CliTypography from "./components/CliTypography.vue";

const text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id faucibus nisl tincidunt eget nullam non nisi est sit. Eget nulla facilisi etiam dignissim diam quis. Aliquet nec ullamcorper sit amet. Ullamcorper morbi tincidunt ornare massa. Nec sagittis aliquam malesuada bibendum. Leo in vitae turpis massa sed. Scelerisque eu ultrices vitae auctor eu augue. Diam vel quam elementum pulvinar etiam. Vitae tortor condimentum lacinia quis vel eros donec ac odio. Mi sit amet mauris commodo quis imperdiet massa tincidunt. Et leo duis ut diam quam nulla. Lacus laoreet non curabitur gravida arcu ac tortor. Ut eu sem integer vitae. Purus in mollis nunc sed id semper risus. Viverra tellus in hac habitasse platea. At erat pellentesque adipiscing commodo elit at. Vel elit scelerisque mauris pellentesque pulvinar pellentesque. Porta non pulvinar neque laoreet suspendisse interdum.";
</script>

<template>
  <BorderBox>
    <CliTypography variant="title">Hi there</CliTypography>
    <CliTypography cursor>{{ text }}</CliTypography>
  </BorderBox>
</template>
