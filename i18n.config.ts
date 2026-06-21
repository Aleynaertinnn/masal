export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'tr',
  messages: {
    tr: {
      welcome: 'Workspace\'e Hoş Geldiniz',
      description: 'Gelişmiş Nuxt 4 mimarisiyle projelerinizi uçuşa geçirin.',
      api_title: 'Composables ile Çekilen Veriler'
    },
    en: {
      welcome: 'Welcome to Workspace',
      description: 'Take your projects to flight with advanced Nuxt 4 architecture.',
      api_title: 'Data Fetched with Composables'
    }
  }
}))
