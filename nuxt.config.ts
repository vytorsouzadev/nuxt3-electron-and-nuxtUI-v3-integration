// nuxt.config.ts
export default defineNuxtConfig({
  ssr: false,
  modules: ['@nuxt/ui'],
  css: ['~/assets/css/main.css'],
  app: {
      baseURL: process.env.NODE_ENV === 'development' ? '/' : './',
  },
  devServer: {
      port: parseInt(process.env.PORT || '33223'), // Use PORT from .env, fallback to 33223
  },
  compatibilityDate: '2025-02-08',
  
});