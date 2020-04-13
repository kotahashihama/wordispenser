import i18n from './nuxt-i18n.config'

module.exports = {
  srcDir: 'client/',
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    ['nuxt-i18n', i18n]
  ],
  axios: {},
  proxy: {
    '/api': 'http://localhost:8000'
  }
}