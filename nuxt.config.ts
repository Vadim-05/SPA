// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  plugins: [
    '~/plugins/vuetify',
  ],
  css: ['vuetify/lib/styles/main.sass','~/scss/mainColors.scss'],
  serverMiddleware: ['~/server/api/customData'],
  app: {
    head: {
      title: 'SPA',
    },
  },
  build: {
    transpile: ['vuetify']
  },
  devtools: { enabled: true }
})
