// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "vue3-carousel-nuxt",
    "nuxt-mdi",
    "@pinia/nuxt",
  ],
  imports: {
    dirs: ["stores"],
  },
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  css: ["~/assets/css/main.css"],
});
