// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['normalize.css', '~/assets/styles/main.scss'],
  modules: [
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          Roboto: [300, 400, 500],
        },
        preload: true,
      },
    ],
  ],
});
