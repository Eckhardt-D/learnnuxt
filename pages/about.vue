<script lang="ts" setup>
definePageMeta({
  layout: "marketing"
})
</script>

<template>
  <main>
    <div class="text-center my-10 md:my-20 max-w-5xl mx-auto px-4">
      <h1 class="text-5xl md:text-7xl font-bold mt-10">
        About the authors
      </h1>
      <p class="mt-10">
        Learn Nuxt was originally created by Eckhardt Dreyer, with the idea to make it a paid product
        to learn Nuxt. Over time that decision has changed and now Learn Nuxt is maintained by the community
        in an open-source <a href="https://github.com/Eckhardt-D/learnnuxt.git">GitHub Repository</a>.
        You can reach out there, or
        <a
          class="text-[var(--gradient-color-1)]"
          href="https://twitter.com/eckhardtdreyer"
        > reach out on twitter</a> if you have questions / comments.
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
