import meta from "./meta/meta";
require("dotenv").config()

export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  env: {
    APP_GANALITICS_UA: process.env.APP_GANALITICS_UA
  },

  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    htmlAttrs: {
      lang: "ja"
    },
    title: 'tameblog | 今日も一日',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ...meta()
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/scss/common.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    {src: '@/plugins/ga.js', mode: 'client'},
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
    '@nuxtjs/dotenv'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxt/content'
  ],
  content: {
    markdown: {
      prism: {
        theme: "prism-themes/themes/prism-cb.css"
      }
    }
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  },
  generate: {
    fallback: true,
    crawler: false,
    async routes() {
        const result = []
        const { $content } = require('@nuxt/content')
        const data = await $content("categories", { deep: true }).only(["path", "dir", "tags"]).fetch()
        for(let path of data) {
          result.push(path.path)
          result.push(path.dir)
          for(let tag of path.tags) {
            if(result.includes(`/tags/${tag}`)) {
              continue
            }
            result.push(`/tags/${tag}`)
          }
        }
        return result
    }
  }
}
