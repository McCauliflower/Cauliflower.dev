// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  vite: {
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  },
  modules: [
    '@nuxt/typescript-build',
    '@pinia/nuxt'
  ],
  typescript: {
    typeCheck: true,
    strict: true
  }
})
