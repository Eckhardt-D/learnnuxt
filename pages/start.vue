<script lang="ts" setup>
definePageMeta({
  layout: "marketing"
})

const email = ref("");
const loading = ref(false);
const error = ref<string | null>(null);
const success = ref(false);

watchEffect((onCleanup) => {
  let timeout: NodeJS.Timeout | undefined;

  if (error.value || success.value) {
    timeout = setTimeout(() => {
      error.value = null;
      success.value = false;
    }, 3000)
  }

  onCleanup(() => {
    if (timeout) {
      clearTimeout(timeout)
    }
  })
})

const registerForm = ref<null | HTMLFormElement>(null);

const register = async () => {
  if (registerForm.value?.checkValidity()) {
    loading.value = true;
    const response = await fetch("/api/earlybird", {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        email: email.value,
      })
    })
    .then(response => response.json())
    .catch((error) => {
      return {
        data: null,
        error: {
          reason: (error as Error).message,
          message: 'Could not register your email, please try again.'
        }
      }
    })

    if (response.data?.success) {
      window.usermaven("track", "earlybird_signup", {
        email: email.value,
      });
      email.value = '';
      success.value = true;
      loading.value = false;
      return;
    }

    error.value = response.error?.message ?? null;
    loading.value = false;
  }
}
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
      ref="registerForm"
      class="flex flex-col sm:flex-row items-center justify-between gap-2 max-w-[500px]"
      @submit.prevent
    >
      <input
        v-model="email"
        placeholder="Your email address"
        class="w-full text-black py-2 px-4 h-16 rounded-lg flex-grow mt-0.5"
        :class="error && 'border-red-500'"
        type="email"
        required
      >
      <button
        class="btn-colorful w-full sm:w-[144px]"
        :class="loading && '!bg-gray-700'"
        :disabled="loading"
        @click="register"
      >
        {{ loading ? 'Loading..' :'Sign up' }}
      </button>
    </form>
    <p
      v-if="error"
      class="text-red-400 mt-2"
    >
      {{ error }}
    </p>
    <p
      v-if="success"
      class="text-green-400 mt-2"
    >
      Success! You can expect an email as soon as the course launches 🚀
    </p>
  </div>
</template>