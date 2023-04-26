export default defineNuxtConfig({
  modules: ["@nuxt/content", "@nuxtjs/fontaine"],
  css: ["~/assets/fonts.css", "~/assets/tailwind.css"],
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
