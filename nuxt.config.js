export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Dan Montesinos',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          "I began my career over a decade ago as a Graphic Designer in my home country, Venezuela. I've always had a passion for clean and minimal design. I spend my free time working on personal & freelance projects ranging from Web Development to Digital Marketing. My other passions are traveling, recording music, biking, kayaking, and spending time with my pets, and family."
      },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;600;700&family=Source+Sans+Pro:wght@300;400;600;700&display=swap, https://use.typekit.net/rxz7cpd.css'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // CSS file in the project
    '~/assets/css/main.css',
    // // SCSS file in the project
    '~/assets/css/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    ['nuxt-lazysizes']
  ],

  lazySizes: {
    extendAssetUrls: {
      img: ['src', 'srcset', 'data-src', 'data-srcset'],
      source: ['src', 'srcset', 'data-src', 'data-srcset']
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  router: {
    middleware: ['class']
  },

  watch: ['~/custom/*.js']
}
