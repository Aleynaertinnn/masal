// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    '@pinia/nuxt',
    '@nuxt/image',
    ['@nuxtjs/i18n', {
      locales: [
        { code: 'tr', language: 'tr-TR', name: 'Türkçe' },
        { code: 'en', language: 'en-US', name: 'English' }
      ],
      defaultLocale: 'tr', // Varsayılan dil
      strategy: 'prefix_except_default', // tr için direkt '/', en için '/en' rotası üretir
    }],
  ],
  css: ['~/assets/css/main.css'],
});
