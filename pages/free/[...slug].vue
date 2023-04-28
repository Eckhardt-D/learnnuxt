<script lang="ts" setup>
const path = (useRoute().params.slug as string[]).join('/')
const doc = await queryContent(`/free/${path}`).findOne()
useSeo({
  title: doc.title,
  description: doc.description,
})
</script>

<template>
  <main>
    <ContentDoc />
  </main>
</template>
