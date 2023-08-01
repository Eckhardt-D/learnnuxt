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
          src: "https://um.learnnuxt.co/lib.js",
          "data-key": "UM1zSQHtsL",
          "data-tracking-host": "https://um.learnnuxt.co",
          "data-autocapture": "true",
          "data-randomize-url":"true",
          defer: true,
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
  modules: ["@nuxt/content", "nuxt-simple-sitemap"],
  postcss: {
    plugins: {
      autoprefixer: {},
      tailwindcss: {},
    },
  },
  runtimeConfig: {
    public: {
      isDevelopment: process.env.APP_ENV === "dev",
    },
  },
  sitemap: {
    siteUrl: "https://learnnuxt.co",
  },
});
