<script setup lang="ts">
import BorderBox from "./components/BorderBox.vue";
import CliCommandBox from "./components/CliCommandBox.vue";
import PageHelp from "./components/pages/PageHelp.vue";
import Command from "./types/command";
import { ref } from "vue";
import PageHello from "./components/pages/PageHello.vue";
import PageContact from "./components/pages/PageContact.vue";
import PageNotFound from "./components/pages/PageNotFound.vue";
import PageDemo from "./components/pages/PageDemo.vue";

const command = ref<Command>();
</script>

<template>
  <BorderBox>
    <PageHelp v-if="command === Command.help" />
    <PageHello v-else-if="command === Command.hello || !command" />
    <PageContact v-else-if="command === Command.contact" />
    <PageDemo v-else-if="command === Command.demo" />
    <PageNotFound v-else />
    <CliCommandBox @command="(cmd) => (command = cmd)"></CliCommandBox>
  </BorderBox>
</template>
