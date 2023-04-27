<script lang="ts" setup>
definePageMeta({
  layout: "marketing"
})

const email = ref("");
</script>

<template>
  <div class="max-w-6xl mx-auto px-4 mb-40">
    <h1 class="text-5xl md:text-7xl font-bold my-10">
      <span class="text-colorful">Thank you</span> for showing interest!
    </h1>
    <p class="max-w-4xl">
      The project content is still under production. Here you can sign up to receive an email once the early-release version is ready.
      The great news is, if you sign up within the early-release version - you will get <span class="text-[var(--gradient-color-1)]">75%</span>
      off with a custom coupon in your mailbox and still get access for life!
    </p>

    <h2 class="font-bold text-2xl mt-14 mb-2">
      Sign up to get notified
    </h2>
    <form
      class="flex flex-col sm:flex-row items-center justify-between gap-2 max-w-[500px]"
      @submit.prevent
    >
      <input
        v-model="email"
        placeholder="Your email address"
        class="w-full text-black py-2 px-4 h-16 rounded flex-grow mt-1"
        type="email"
      >
      <button class="btn-colorful w-full sm:w-[144px]">
        Sign up
      </button>
    </form>
  </div>
</template>