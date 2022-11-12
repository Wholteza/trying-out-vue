<script setup lang="ts">
import Command from "@/types/command";
import CliPage from "../CliPage.vue";
import CliTypography from "../CliTypography.vue";
const commands = `"${Object.keys(Command).join('", "')}"`;
</script>
<template>
  <CliPage title="Help" :custom-header="['cat ~/help']">
    <CliTypography block paragraph>
      It seems like you're in need of some help?
    </CliTypography>
    <CliTypography block paragraph>
      The available commands are {{ commands }}.</CliTypography
    >
    <CliTypography block paragraph>
      All commands are case sensitive.</CliTypography
    >
  </CliPage>
</template>
