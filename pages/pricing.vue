<script lang="ts" setup>
definePageMeta({
  layout: "marketing"
});
</script>

<template>
  <div class="py-14 sm:py-22">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl sm:text-center">
        <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
          Free forever!
        </h2>
        <p class="mt-6 text-lg leading-8 ">
          Learn Nuxt was made free and open source on November 12, 2023. Contributions from the community are warmly welcomed.
        </p>
      </div>
      <p class="mt-10 text-center">Start learning with <nuxt-link
        class="text-[var(--gradient-color-1)]"
        to="/free/introduction/setting-up-your-computer"
      >
        this article  &rarr;
      </nuxt-link></p>
    </div>
  </div>
</template>
