module.exports = {
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      alias: {
        // '@': "src",   // 这个是默认配置过的
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network'
      }
    }
  }

}