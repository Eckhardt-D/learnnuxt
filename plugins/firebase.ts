import { getApps, initializeApp } from "firebase/app";
import {
  getFunctions,
  connectFunctionsEmulator,
  Functions,
} from "firebase/functions";

declare module "#app" {
  interface NuxtApp {
    $functions: Functions;
  }
}
declare module "vue" {
  interface ComponentCustomProperties {
    $functions: Functions;
  }
}
export {};

const app =
  getApps()?.[0] ||
  initializeApp({
    projectId: "kaizen-nuxt-course",
  });

export default defineNuxtPlugin(() => {
  const { public: isDevelopment } = useRuntimeConfig();
  const functions = getFunctions(app);

  if (isDevelopment) {
    connectFunctionsEmulator(functions, "localhost", 5001);
  }

  return {
    provide: { functions },
  };
});
