export default defineNuxtRouteMiddleware(async () => {
  if (process.server) {
    if(!useCookie('learn_nuxt_token_v1').value) {
      return navigateTo('/account/login')
    }
  } else {
    if (!useUser().user.value) {
      return navigateTo('/account/login')
    }
  }
});
