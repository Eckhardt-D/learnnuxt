<script lang="ts" setup>
const title = 'Learn Nuxt - from beginner to advanced';
const description = 'Take your Nuxt skills to the next level with over 16 chapters, 5+ projects and multiple interactive quizes.'

useHead({
  title,
  meta: [
    { name: 'description', content: description }
  ],
});

useServerSeoMeta({
  title,
  description,
  author: 'Eckhardt-D',
  twitterTitle: title,
  twitterCard: 'summary_large_image',
  twitterDescription: description,
  ogTitle: title,
  ogDescription: description,
  ogImage: 'https://kaizen-nuxt-course.web.app/images/social_learn_nuxt-min.webp',
})
</script>

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
  background-image: url(/image.webp);
  background-repeat: repeat-y;
  background-position: 50% 0;
}
</style>