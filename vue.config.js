const SpritesmithPlugin = require('webpack-spritesmith') // 引入雪碧图
const path = require('path')
const childProcess = require('child_process')

try {
  process.env.RELEASE_VERSION = childProcess
    .execSync('git rev-parse --short=32 HEAD', { encoding: 'utf8' })
    .trim()
} catch (e) {
  console.log(`get release failed: ${e.message}`)
}
module.exports = {
  lintOnSave: false,
  publicPath: './',
  outputDir: 'docs',
  chainWebpack: config => {
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@Echarts': 'echarts/esm'
      }
    },
    module: {
      rules: [
        {
          test: /\.md$/,
          use: [
            {
              loader: 'vue-loader',
              options: {
                compilerOptions: {
                  preserveWhitespace: false
                }
              }
            }
          ]
        }
      ]
    }
  },
  devServer: {
    host: '0.0.0.0',
    sockHost: '127.0.0.1' + ':' + this.port,
    port: 8084,
    https: false,
    hotOnly: false,
    disableHostCheck: true,
    before: app => {}
  },
  productionSourceMap: false
}
