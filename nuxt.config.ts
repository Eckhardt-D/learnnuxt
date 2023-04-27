export default defineNuxtConfig({
  modules: ["@nuxt/content", "@nuxtjs/fontaine"],
  css: ["~/assets/fonts.css", "~/assets/tailwind.css"],
  app: {
    head: {
      meta: [
        {
          name: "keywords",
          content:
            "Nuxt, Nuxt.js, Nuxt3, Nuxt 3, Learn Nuxt, Learn Nuxt 3, Nuxt tutorial, Nuxt 3 tutorial, Nuxt modules, Nuxt data fetching, Nuxt SEO, Nuxt.js, Vue, Vue.js, Vue tutorial, Nuxt course",
        },
      ],
    },
  },
  fontMetrics: {
    fonts: [
      {
        family: "Roboto Condensed",
        fallbacks: ["Zapfino"],
        overrideName: "fallback-a",
      },
    ],
  },
  postcss: {
    plugins: {
      autoprefixer: {},
      tailwindcss: {},
    },
  },
});
