export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'piu',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'Maul Score', content: 'na zywo z boisk jajowatej pilki' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap'}
    ]
  },

  loading: { 
    color:'orange',
    height: '5px'
  
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    "~/assets/remove default.css"
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    [
      "storyblok-nuxt",
      { accessToken: "aTMYT97xfTppXtsE2GztmQtt", cacheProvider: "memory" }
    ]
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
