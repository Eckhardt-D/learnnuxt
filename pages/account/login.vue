<script lang="ts" setup>

definePageMeta({
  layout: "marketing",
});

const userStore = useUser();
const snackbar = useSnackbar();

const userLoginForm = ref<HTMLFormElement>();

const details = reactive({
  email: "",
  password: "",
});

const register = async () => {
  if (userLoginForm.value?.checkValidity()) {
    try {
      await userStore.login(details.email, details.password);
      snackbar.success('Success!')
      useRouter().push('/learn/introduction/setting-up-your-computer')
    } catch (err) {
      snackbar.error((err as Error).message)
    }
  }
}
</script>

<template>
  <div>
    <form
      ref="userLoginForm"
      class="max-w-lg mx-auto"
      @submit.prevent="register"
    >
      <h1 class="text-center text-5xl font-black leading-tight tracking-tight my-7">
        Login to your account
      </h1>

      <section class="flex flex-col mb-2">
        <label
          class="text-sm"
          for="email"
        >
          Email address
        </label>
        <input
          id="email"
          v-model="details.email"
          placeholder="Your email address"
          class="w-full text-black py-2 px-4 h-16 rounded-lg flex-grow mt-0.5 "
          type="email"
          required
          autocomplete="email"
        >
      </section>

      <section class="flex flex-col mb-5">
        <label
          class="text-sm"
          for="password"
        >
          Password
        </label>
        <input
          id="password"
          v-model="details.password"
          placeholder="Password"
          class="w-full text-black py-2 px-4 h-16 rounded-lg flex-grow mt-0.5 "
          type="password"
          required
          minlength="8"
          autocomplete="password"
        >
      </section>

      <section class="flex flex-col mb-2">
        <button
          class="btn-colorful"
          type="submit"
        >
          Login
        </button>
      </section>
      <p class="mt-4">Don't have an account? <nuxt-link
        class="text-[var(--gradient-color-1)]"
        to="/account/login"
      >
        Register
      </nuxt-link></p>
    </form>
  </div>
</template>
