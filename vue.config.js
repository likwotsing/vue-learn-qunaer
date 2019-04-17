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
  // publicPath: '/project',
  assetsDir: 'static',
  // webpack-dev-server
  devServer: {
    // before: function (app, server) {
    //   app.get('/goods', function (req, res) {
    //     res.json(goods)
    //   })
    // },
    proxy: {
      // '/api': {
      //   // 默认是80端口，可以省略
      //   // target: 'http://localhost:80',
      //   target: 'http://localhost',
      //   pathRewrite: {
      //     // 因为映射的目录相同，下面的设置可以省略
      //     '^/api': '/api'
      //   }
      // }
      '/api': {
        target: 'http://localhost:8080',
        pathRewrite: {
          '^/api': '/mock'
        }
      }
    }
  }
}
