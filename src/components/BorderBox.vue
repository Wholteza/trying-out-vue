<template>
  <div class="box"><slot>No Content</slot></div>
</template>

<style scoped>
.box {
  min-height: 100%;
  min-width: 100%;
  padding: 5%;

  position: relative;

  box-sizing: border-box;

  border: 20px;
  border-style: solid;
  border-color: #ddd;
}
</style>
