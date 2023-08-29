export default defineNuxtRouteMiddleware(() => {
  const userStore = useUser();

  if (process.client && !userStore.user.value) {
     return navigateTo("/account/login");
  }
})
