import { resolve } from "path";

export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        {
          name: "keywords",
          content:
            "Nuxt, Nuxt.js, Nuxt3, Nuxt 3, Learn Nuxt, Learn Nuxt 3, Nuxt tutorial, Nuxt 3 tutorial, Nuxt modules, Nuxt data fetching, Nuxt SEO, Nuxt.js, Vue, Vue.js, Vue tutorial, Nuxt course",
        },
      ],
      link: [
        {
          rel: "shortcut icon",
          href: "/icons/LearnNuxt.svg",
          type: "image/svg+xml",
        },
      ],
      script: [
        {
          src: "/js/um.js",
          defer: true,
        },
        {
          src: "https://t.usermaven.com/lib.js",
          "data-key": "UM87fyjQWD",
          "data-tracking-host": "https://events.usermaven.com",
          "data-autocapture": "true",
          "data-privacy-policy": "strict",
          defer: true,
          async: true,
        },
      ],
    },
  },
  content: {
    highlight: {
      preload: ["javascript", "typescript", "vue", "bash"],
      theme: {
        default: "github-dark",
      },
    },
    sources: {
      learn: {
        prefix: "/learn",
        driver: "fs",
        base: resolve(__dirname, "content-paid"),
      },
      free: {
        prefix: "/free",
        driver: "fs",
        base: resolve(__dirname, "content-free"),
      },
    },
  },
  css: ["~/assets/tailwind.css", "~/assets/fonts.css"],
  fontMetrics: {
    fonts: [
      {
        family: "Roboto Condensed",
        fallbacks: ["Zapfino"],
        overrideName: "fallback-a",
      },
    ],
  },
  modules: ["@nuxt/content", "@nuxtjs/fontaine"],
  postcss: {
    plugins: {
      autoprefixer: {},
      tailwindcss: {},
    },
  },
  runtimeConfig: {
    serviceAccountPath: process.env.SERVICE_ACCOUNT_PATH,
  },
  /**
   * Keep a function warm for incoming requests to reduce cold starts a bit
   * @see https://firebase.google.com/docs/functions/manage-functions#min-max-instances
   * @see https://github.com/unjs/nitro/issues/90#issuecomment-1430548908
   */
  nitro: {
    preset: "firebase",
    replace: {
      "functions.https.onRequest":
        "functions.runWith({ minInstances: 1 }).https.onRequest",
    },
  },
});
