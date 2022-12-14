<script setup lang="ts">
import Command from "@/types/command";
import { computed, type StyleValue } from "vue";
import { ref } from "vue";
import CliTypography from "./CliTypography.vue";
type SharedClasses = { [Key: string]: boolean };
const emit = defineEmits<{
  (e: "command", command: Command): void;
}>();
const ERROR_ANIMATION_DURATION_MS: number = 400;
const userInput = ref<string>("help");
const isError = ref<boolean>(false);
const isSmall = ref<boolean>(window.matchMedia("(max-width: 400px)").matches);

const handleSubmit = () => {
  const command: Command | undefined =
    Command[userInput.value.toLowerCase() as keyof typeof Command];
  userInput.value = "";
  if (!command) {
    isError.value = true;
    setTimeout(() => (isError.value = false), ERROR_ANIMATION_DURATION_MS);
    return;
  }
  isError.value = false;
  emit("command", command);
};

const sharedClasses = computed<SharedClasses>(() => ({
  error: isError.value,
  base: true,
}));

const sharedStyle = computed<StyleValue>(() => ({
  "animation-duration": `${ERROR_ANIMATION_DURATION_MS}ms`,
}));

const submitButtonText = computed<string>(() =>
  isSmall.value ? "Send" : "[Enter]"
);
</script>

<template>
  <div class="container">
    <CliTypography
      variant="tiny"
      block
      no-fade
      style="line-height: 0.8em; margin-bottom: 5px"
      >Enter a command or type 'help' to see all available
      commands.</CliTypography
    >
    <div class="controls-container">
      <span :class="['caret', sharedClasses]" :style="sharedStyle">></span>
      <input
        type="text"
        :class="['input', sharedClasses]"
        :style="sharedStyle"
        @keypress.enter="handleSubmit"
        v-model="userInput"
      />
      <button
        @click="handleSubmit"
        :class="['button', sharedClasses]"
        :style="sharedStyle"
      >
        {{ submitButtonText }}
      </button>
    </div>
  </div>
</template>
<style scoped lang="sass">
@import "./../assets/variables.sass"
.base
  font-family: inherit
  font-size: 1.7em
  letter-spacing: inherit
  color: inherit
  background-color: #eeeeee

.input
  border: none
  display: block
  width: 100%
  flex: 1 1

.input:focus
  outline: none
  caret-color: #00ff33

.button
  border: none
  display: block
  margin: 0px
  padding: 0px
  padding-right: 10px
  padding-left: 10px

.caret
  padding-left: 10px
  padding-right: 10px

.container
  position: absolute
  bottom: 10px
  left: 10px
  right: 10px

.controls-container
  display: flex
  flex-direction: row

@keyframes error
  25%
    background-color: #ff6961
    color: #eeeeee

  50%
    background-color: #eeeeee
    color: inherit

  75%
    background-color: #ff6961
    color: #eeeeee

  100%
    background-color: #eeeeee
    color: inherit


.error
  animation-name: error
  animation-timing-function: ease-in-out

@media screen and (max-width: $small-device-max-width)
  .controls-container
    font-size: 0.7em
</style>
