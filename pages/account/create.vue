<script lang="ts" setup>

definePageMeta({
  layout: "marketing",
  middleware: "loggedin",
});

const userStore = useUser();
const snackbar = useSnackbar();
const route = useRoute();

const userCreateForm = ref<HTMLFormElement>();

const details = reactive({
  email: "",
  password: "",
  passwordConfirm: "",
});

const register = async () => {
  if (userCreateForm.value?.checkValidity()) {
    if (details.password !== details.passwordConfirm) {
      snackbar.error('Passwords do not match')
      return;
    }

    const continueUrl = route.query.continue as string | undefined;
    try {
      await userStore.create(details.email, details.password);
      snackbar.success('Success!')
      useRouter().push(continueUrl || '/learn/introduction/setting-up-your-computer')
    } catch (err) {
      snackbar.error((err as Error).message)
    }
  }
}
</script>

<template>
  <div>
    <form
      ref="userCreateForm"
      class="max-w-lg mx-auto"
      @submit.prevent="register"
    >
      <h1 class="text-center text-5xl font-black leading-tight tracking-tight my-7">
        Create an account
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
        >
      </section>

      <section class="flex flex-col mb-2">
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
        >
      </section>

      <section class="flex flex-col mb-5">
        <label
          class="text-sm"
          for="password-confirm"
        >
          Password confirm
        </label>
        <input
          id="password-confirm"
          v-model="details.passwordConfirm"
          placeholder="Confirm password"
          class="w-full text-black py-2 px-4 h-16 rounded-lg flex-grow mt-0.5 "
          type="password"
          minlength="8"
          required
        >
      </section>

      <section class="flex flex-col mb-2">
        <button
          class="btn-colorful"
          type="submit"
        >
          Sign up
        </button>
      </section>
      <p class="mt-4">Already have an account? <nuxt-link
        class="text-[var(--gradient-color-1)]"
        to="/account/login"
      >
        Login
      </nuxt-link></p>
    </form>
  </div>
</template>
