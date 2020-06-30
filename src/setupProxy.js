const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api', {
      target: 'http://localhost:4001',
      // pathRewrite(path) {
      //   return path.replace('/api', '/').replace('.action', '.json')
      // },
    })
  )
}
