<script setup lang="ts">
import BorderBox from "../BorderBox.vue";
import CliLink from "../CliLink.vue";
import CliPage from "../CliPage.vue";
import CliTypography from "../CliTypography.vue";
</script>
<template>
  <CliPage title="Demo" :custom-header="['cat ~/demo']">
    <CliTypography block paragraph variant="tiny">
      Typography:Tiny
    </CliTypography>
    <CliTypography block paragraph> Typography:Body </CliTypography>
    <CliTypography block paragraph variant="title">
      Typography:Title
    </CliTypography>
    <CliTypography paragraph block variant="tiny"
      ><CliLink url="">Link+Typography:Tiny</CliLink></CliTypography
    >
    <CliTypography paragraph block
      ><CliLink url="">Link+Typography:Body</CliLink></CliTypography
    >
    <CliTypography paragraph block variant="title"
      ><CliLink url="">Link+Typography:Title</CliLink></CliTypography
    >
    <BorderBox><CliTypography>Layout:BorderBox</CliTypography></BorderBox>
  </CliPage>
</template>
