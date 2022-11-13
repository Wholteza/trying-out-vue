<template>
  <div class="box"><slot>No Content</slot></div>
</template>

<style scoped lang="sass">
@import "./../assets/variables.sass"
.box
  min-height: 100%
  min-width: 100%
  padding: 5%
  box-sizing: border-box
  border: 20px
  border-style: solid
  border-color: #ddd
  @media screen and (max-width: $small-device-max-width)
    border-width: 15px
</style>
