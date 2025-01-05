// nuxt.config.ts
import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-01-04',
  devtools: { enabled: true },
  // Global page headers: https://go.nuxtjs.dev/config-head
  app: {
    head: {
      title: 'cauliflower.dev',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    },
  },
  vite: {
    resolve: {
      alias: {
        '@': '',
      },
    },
  },
  modules: [
    '@pinia/nuxt'
  ],
  typescript: {
    typeCheck: true,
    strict: true,
  },
})