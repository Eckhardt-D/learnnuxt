<script lang="ts" setup>
useSeo();
</script>

<template>
  <main>
    <Navigation />
    <slot />
    <Footer v-once />
    <LazySnackbar />
  </main>
</template>

<style>
body {
  background-color: #00131c;
  color: #fff;
  background-image: url(/image.webp);
  background-repeat: repeat-y;
  background-position: 50% 0;
}
</style>