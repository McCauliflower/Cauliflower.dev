// nuxt.config.ts
import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  vite: {
    resolve: {
      alias: {
        '@': '',
      },
    },
  },
  modules: [ //instead of buildModules
    '@pinia/nuxt'
  ],
  typescript: {
    typeCheck: true, // Enable type checking during build
    strict: true, // Optional, for stricter TypeScript rules
  },
})
