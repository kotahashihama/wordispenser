module.exports = {
  srcDir: 'client/',
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  axios: {},
  proxy: {
    '/api': 'http://localhost:8000'
  }
}