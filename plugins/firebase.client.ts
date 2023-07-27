import { getApps, initializeApp } from "firebase/app";
import {
  getFunctions,
  connectFunctionsEmulator,
  Functions,
} from "firebase/functions";
import { getAuth, connectAuthEmulator, Auth } from "firebase/auth";
import {
  getFirestore,
  connectFirestoreEmulator,
  Firestore,
} from "firebase/firestore";

declare module "#app" {
  interface NuxtApp {
    $functions: Functions;
    $firestore: Firestore;
    $auth: Auth;
  }
}
declare module "vue" {
  interface ComponentCustomProperties {
    $functions: Functions;
    $firestore: Firestore;
    $auth: Auth;
  }
}

const app =
  getApps()?.[0] ||
  initializeApp({
    apiKey: "AIzaSyD_gFtMOtwA3CPg_w_febYOrvMwjYvOhTw",
    authDomain: "kaizen-nuxt-course.firebaseapp.com",
    projectId: "kaizen-nuxt-course",
    storageBucket: "kaizen-nuxt-course.appspot.com",
    messagingSenderId: "211737789535",
    appId: "1:211737789535:web:e6ee31fa2033376de287ea",
    measurementId: "G-GTJ814EEEN",
  });

export default defineNuxtPlugin(() => {
  const { public: {isDevelopment} } = useRuntimeConfig();
  const functions = getFunctions(app);
  const firestore = getFirestore(app);
  const auth = getAuth(app);

  if (isDevelopment) {
    connectFunctionsEmulator(functions, "localhost", 5001);
    connectFirestoreEmulator(firestore, "localhost", 8080);
    connectAuthEmulator(auth, "http://localhost:9099");
  }

  return {
    provide: { functions, firestore, auth },
  };
});
