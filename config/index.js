'use strict'
// Template version: 1.2.4
// see http://vuejs-templates.github.io/webpack for documentation.
/**
 * 项目配置参数
 * @type {string}
 */
const projectName = 'elise'

/**
 * 项目详细配置
 */
const path = require('path')

module.exports = {
  common: {
    folderName: path.resolve(__dirname, `../items/${projectName}/src`), // 依赖文件
    entranceHtml: path.resolve(__dirname, `../items/${projectName}/index.html`), // 入口html
    entranceJs: path.resolve(__dirname, `../items/${projectName}/src/main.js`) // 入口js文件
  },
  dev: {
    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {},

    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 8030, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: true,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    // Eslint
    useEslint: true,
    showEslintErrorsInOverlay: false,

    // Source Maps
    devtool: 'eval-source-map',
    cssSourceMap: false,

    // Cache
    cacheBusting: true
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, `../items/${projectName}/dist/index.html`),

    // Paths
    assetsRoot: path.resolve(__dirname, `../items/${projectName}/dist`),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',

    // Source Maps
    productionSourceMap: false,
    devtool: '#source-map',

    // Gzip
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // bundleAnalyzerReport
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
