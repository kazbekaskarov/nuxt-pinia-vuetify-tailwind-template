export default defineNuxtConfig({
  compatibilityDate: '2024-07-29',
  // runtimeConfig: {
  //   public: {
  //     buildENV: process.env.NUXT_PUBLIC_BUILD_ENV,
  //   },
  // },
  // app: {
  //   baseURL: process.env.NUXT_PUBLIC_BUILD_ENV === 'production' ? '/' : '/' + process.env.NUXT_PUBLIC_BUILD_ENV + '/',
  //   head: {
  //     link: [
  //       {
  //         rel: 'stylesheet',
  //         href: 'https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&family=Montserrat+Alternates:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap',
  //       },
  //       { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css' },
  //     ],
  //   },
  // },
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
