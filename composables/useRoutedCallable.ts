import { httpsCallableFromURL } from "firebase/functions";

export default (route: string) => {
  const {
    public: { isDevelopment },
  } = useRuntimeConfig();
  const { $functions } = useNuxtApp();

  const baseURL = isDevelopment
    ? "http://localhost:5001/kaizen-nuxt-course/us-central1/server"
    : "https://us-central1-kaizen-nuxt-course.cloudfunctions.net/server";

  return httpsCallableFromURL($functions, `${baseURL}${route}`);
};
