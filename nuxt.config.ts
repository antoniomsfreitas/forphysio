// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: false },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  css: ['normalize.css', '~/assets/styles/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
              @use "~/assets/styles/utils/_variables.scss" as *;
              @use "~/assets/styles/utils/_mixins.scss" as *;
              @use "~/assets/styles/utils/_keyframes.scss" as *;
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
    '@kgierke/nuxt-basic-auth',
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
        es: '/sobre-nosotros',
        pt: '/sobre-nos',
        'zh-sg': '/about-us',
      },
      contacts: {
        en: '/contacts',
        es: '/contactos',
        pt: '/contactos',
        'zh-sg': '/contacts',
      },
      partnerships: {
        en: '/partnerships',
        es: '/alianzas',
        pt: '/acordos',
        'zh-sg': '/partnerships',
      },
      recruitment: {
        en: '/recruitment',
        es: '/reclutamiento',
        pt: '/recrutamento',
        'zh-sg': '/recruitment',
      },
      faq: {
        en: '/frequently-asked-questions',
        es: '/preguntas-frecuentes',
        pt: '/perguntas-frequentes',
        'zh-SG': '/frequently-asked-questions',
      },
      'privacy-policy': {
        en: '/privacy-policy',
        es: '/politica-de-privacidad',
        pt: '/politica-de-privacidade',
        'zh-SG': '/privacy-policy',
      },
      'team/index': {
        en: '/team',
        es: '/equipo',
        pt: '/equipa',
        'zh-sg': '/team',
      },
      'team/[slug]': {
        en: '/team/[slug]',
        es: '/equipo/[slug]',
        pt: '/equipa/[slug]',
        'zh-sg': '/team/[slug]',
      },
      'services/index': {
        en: '/services',
        es: '/servicios',
        pt: '/servicos',
        'zh-sg': '/services',
      },
      'services/[slug]': {
        en: '/services/[slug]',
        es: '/servicios/[slug]',
        pt: '/servicos/[slug]',
        'zh-sg': '/services/[slug]',
      },
      'blog/index': {
        en: '/blog',
        es: '/blog',
        pt: '/blog',
        'zh-sg': '/blog',
      },
      'blog/[slug]': {
        en: '/blog/[slug]',
        es: '/blog/[slug]',
        pt: '/blog/[slug]',
        'zh-SG': '/blog/[slug]',
      },
      'blog/categories/index': {
        en: '/blog/categories',
        es: '/blog/categorias',
        pt: '/blog/categorias',
        'zh-SG': '/blog/categories',
      },
      'blog/categories/[slug]': {
        en: '/blog/categories/[slug]',
        es: '/blog/categorias/[slug]',
        pt: '/blog/categorias/[slug]',
        'zh-SG': '/blog/categories/[slug]',
      },
      'blog/authors/index': {
        en: '/blog/authors',
        es: '/blog/autores',
        pt: '/blog/autores',
        'zh-SG': '/blog/authors',
      },
      'blog/authors/[slug]': {
        en: '/blog/autores/[slug]',
        es: '/blog/autores/[slug]',
        pt: '/blog/authors/[slug]',
        'zh-SG': '/blog/authors/[slug]',
      },
    },
  },
  basicAuth: {
    enabled: process.env.IS_PRODUCTION === 'false',
    users: [
      {
        username: 'forphysio',
        password: 'website2024',
      },
    ],
    allowedRoutes: ['/api/.*'],
  },
});
