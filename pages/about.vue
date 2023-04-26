<script lang="ts" setup>
definePageMeta({
  layout: "marketing"
})
</script>

<template>
  <main>
    <div class="text-center my-10 md:my-20 max-w-5xl mx-auto px-4">
      <img
        width="128"
        height="128"
        src="/images/eckhardt.jpeg"
        class="rounded-full mx-auto"
        alt="Eckhardt"
      >
      <h1 class="text-5xl md:text-7xl font-bold mt-10">
        About the author
      </h1>
      <p class="mt-10">
        Eckhardt Dreyer is a Full-Stack developer from Namibia.
        He has been in the industry for 7 years and specializing in Vue & Nuxt for the last 3 of those 7. 
        Among other His daily work at Stillio, Superdense and Kaizen Media is based heavily on Nuxt work.
        Along with working with Nuxt on a daily, he has also been teaching Nuxt concepts on the Kaizen Codes
        channel on YouTube for a few years.
      </p>

      <nuxt-link
        to="/"
        class="btn-colorful w-40 mx-auto mt-10"
      >
        &larr; Home
      </nuxt-link>
    </div>
  </main>
</template>