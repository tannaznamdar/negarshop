<script setup>
import '@splidejs/vue-splide/css';
import { RouterView } from 'vue-router'
import BaseLayout from "@/layouts/BaseLayout.vue";
</script>

<template>
  <BaseLayout>
    <router-view :key="$route.fullPath" />
  </BaseLayout>
</template>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-weight: normal;
  direction: rtl;
  background: #f0f0f0;
  font-size: 1rem;
  text-align: right;
  font-family: IRANSansWeb;
}

@font-face {
  font-family: "myFont";
  src: url("assets/fonts/Iranian Sans.ttf") format('ttf');
}

/* For  desktop: */
@media (min-width: 1200px) {

  body,
  html {

    .container,
    .container-lg,
    .container-md,
    .container-sm,
    .container-xl {
      max-width: 1320px;
    }
  }
}

/* For tablets: */
@media (min-width:450px) and (max-width:820px) {}

/* For mobile: */
@media (max-width:449px) {}
</style>
