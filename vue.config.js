const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const isDevBuild = process.env.NODE_ENV == 'development';

// 文件: https://cli.vuejs.org/zh/config/
module.exports = {
  // 基本路徑
  publicPath: '/',
  // 輸出文件目錄
  outputDir: 'wwwroot',
  // 用於嵌套生成的靜態資產（js，css，img，fonts）的目錄。
  // assetsDir: '',
  // 以多頁模式構建應用程序。
  pages: undefined,
  // eslint-loader 是否在保存的時候檢查
  lintOnSave: true,
  // 是否使用包含運行時編譯器的 Vue 核心的構建。
  runtimeCompiler: false,
  // 預設情況下 babel-loader 忽略其中的所有文件 node_modules。
  transpileDependencies: [],
  // 生產環境 sourceMap
  productionSourceMap: true,
  // webpack 配置
  configureWebpack: {
    optimization: {
      minimizer: isDevBuild
        ? []
        : [
          new UglifyJsPlugin({
            uglifyOptions: {
              compress: {
                drop_console: true,
              },
            },
          }),
        ],
    },
  },
  chainWebpack: () => {

  },
  // css相關配置
  css: {
    // 啟用 CSS modules
    modules: false, // 是否使用 css 分離插件
    extract: true, // 開啟 CSS source maps?
    sourceMap: false, // css 預設器配置項
    loaderOptions: {},
  },
  // webpack-dev-server 相關配置
  devServer: {
    host: '0.0.0.0',
    port: process.env.PORT || 4000,
    https: false,
    hotOnly: false,
    disableHostCheck: true,
    // 設置代理
    proxy: {
      '/api': {
        target: process.env.VUE_APP_API_SERVER,
        ws: true,
        changeOrigin: true,
      },
    },
    before: (app) => {},
  },
  // enabled by default if the machine has more than 1 cores
  parallel: require('os').cpus().length > 1,
  // PWA 插件相關配置
  pwa: {},
  // 第三方插件配置
  pluginOptions: {
    i18n: {
      locale: process.env.VUE_APP_I18N_LOCALE || 'zh-TW',
      fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'zh-TW',
      localeDir: 'locales',
      enableInSFC: true,
    },
  },
};
