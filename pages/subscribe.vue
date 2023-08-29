<script lang="ts" setup>
definePageMeta({
  middleware: "authed",
  layout: "marketing",
})

const createCheckout = async () => {
  const createSession = useRoutedCallable("/checkout");
  const response = await createSession({
    email: useUser().user.value?.email,
  });

  // @ts-ignore
  if (response.data?.redirectUrl) {
    // @ts-ignore
    window.location.href = response.data.redirectUrl;
  }
}
</script>

<template>
  <main class="max-w-5xl mx-auto">
    <h1 class="mt-14 tracking-tighter text-3xl md:text-5xl text-center font-black">
      Premium access <span class="text-colorful">for life</span>
    </h1>

    <p class="text-center tracking-wider mt-5  max-w-3xl mx-auto">
      With a premium account you get access to all paid content for life.
      This includes articles, videos, stackblitz exercises and more.
    </p>

    <button
      class="btn-colorful mx-auto mt-10"
      @click="createCheckout"
    >
      Checkout with Stripe
    </button>
  </main>
</template>
