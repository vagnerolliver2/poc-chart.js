/* eslint-disable */
module.exports = {
  chainWebpack: (config) => {
    config.devServer.set('inline', false)
    config.devServer.set('hot', false)
  },
  filenameHashing: false,
  outputDir: 'dist/',
  configureWebpack: (config) => {
    config.output.filename = '[name].js'
    config.output.chunkFilename = '[name].js'
  },
}
