export default defineNuxtRouteMiddleware(() => {
  const user = useUser();
  if (user.user.value) {
      return navigateTo('/free/introduction/setting-up-your-computer')
  }
})
