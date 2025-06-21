export default defineNuxtConfig({
  css: ['@/assets/css/index.css'],
  devtools: { enabled: false },
  modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss', '@nuxtjs/i18n', 'nuxt-icons'],
  ssr: false,
  components: [
    { path: '~/components', pathPrefix: true },
    // { path: '~/single-use/test', pathPrefix: true, prefix: 'test' },
  ],
  imports: {
    dirs: ['store', 'store/*/*', 'composables', 'api', 'components'],
  },
});
