// vue.config.js
module.exports = {
  publicPath:
    process.env.NODE_ENV === 'production' ? '/shaka-player-vuejs/' : '/',
  configureWebpack: {
    devtool: 'source-map'
  }
}
