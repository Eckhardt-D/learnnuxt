<template>
  <main>
    <Navigation />
    <slot />
    <Footer v-once />
  </main>
</template>

<style>
body {
  background-color: #00131c;
  color: #fff;
  background-image: url(/bg.webp);
  background-repeat: repeat-y;
  background-position: 50% 0;
}
</style>