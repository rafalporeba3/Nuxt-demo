export default {
  target: 'static',
  head: {
    title: 'nuxtfoodapp',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Mulish:wght@300&family=Poppins:wght@600&display=swap' }
    ]
  },
  css: [
    '~/assets/main.scss'
  ],
  plugins: [
    `~/plugins/getfood.server.js`
  ],
  components: true,
  buildModules: [],
  modules: [],
  build: {}
}
