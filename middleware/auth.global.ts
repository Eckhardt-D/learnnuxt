export default defineNuxtRouteMiddleware(async () => {
  if (process.server) {
    return
  } else {
    const userStore = useUser();

    if (!userStore.user.value) {
      const user = await userStore.refresh();

      if (!user) return

      useCookie('learn_nuxt_token_v1').value = await user.getIdToken()
    }
  }
})