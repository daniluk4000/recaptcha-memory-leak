// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  experimental: {
    asyncContext: true,
  },
  modules: ['vue-recaptcha/nuxt'],
  runtimeConfig: {
    public: {
      recaptcha: {
        v2SiteKey: 'test123',
      },
    }
  }
})
