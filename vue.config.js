const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
// const goods = require('./static/goods.json')

module.exports = {
  lintOnSave: true,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('styles', resolve('src/assets/styles'))
      .set('common', resolve('src/common'))
  },
  publicPath: './',
  assetsDir: 'static',
  // webpack-dev-server
  devServer: {
    // before: function (app, server) {
    //   app.get('/goods', function (req, res) {
    //     res.json(goods)
    //   })
    // },
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        pathRewrite: {
          '^/api': '/mock'
        }
      }
    }
  }
}
