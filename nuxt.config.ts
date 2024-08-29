// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['normalize.css', '~/assets/styles/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
              @use "~/assets/styles/utils/_variables.scss" as *;
              @use "~/assets/styles/utils/_mixins.scss" as *;
          `,
        },
      },
    },
  },
  modules: [
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          Roboto: [100, 300, 400, 500, 700],
        },
        preload: true,
      },
    ],
    '@nuxt/eslint',
    '@nuxt/icon',
    '@vueuse/nuxt',
    'nuxt-swiper',
    '@nuxt/image',
    '@nuxtjs/i18n',
  ],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  compatibilityDate: '2024-07-11',
  icon: {
    class: 'icon',
    mode: 'svg',
    customCollections: [
      {
        prefix: 'icon',
        dir: './assets/icons',
      },
    ],
  },
  image: {
    screens: {
      m: 479,
      t: 767,
      d: 1279,
    },
  },
  i18n: {
    langDir: 'locales',
    strategy: 'prefix',
    defaultLocale: 'pt',
    customRoutes: 'config',
    locales: [
      { code: 'pt', language: 'pt-PT', file: 'pt.json', name: 'Português' },
      { code: 'en', language: 'en-US', file: 'en.json', name: 'English' },
      { code: 'es', language: 'es-ES', file: 'es.json', name: 'Español' },
      { code: 'zh-sg', language: 'zh-SG', file: 'zh.json', name: '中文 (繁體)' },
    ],
    pages: {
      about: {
        en: '/about-us',
        es: '/sobre-nos',
        pt: '/sobre-nos',
        'zh-SG': '/about-us',
      },
      'team/index': {
        en: '/team',
        es: '/equipo',
        pt: '/equipa',
        'zh-SG': '/team',
      },
      'team/[slug]': {
        en: '/team/[slug]',
        es: '/equipo/[slug]',
        pt: '/equipa/[slug]',
        'zh-SG': '/team/[slug]',
      },
    },
  },
});
