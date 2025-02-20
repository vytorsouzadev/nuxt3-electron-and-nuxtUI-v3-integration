export default defineNuxtConfig({
    ssr: false,
    modules: ['@nuxt/ui'],
    css: ['~/assets/css/main.css'],
    app: {
      baseURL: process.env.NODE_ENV === 'development' ? '/' : './'
    },
    devServer:{
      port: 33222
    },
    compatibilityDate: '2025-02-08'
  })