const { defineConfig } = require('@vue/cli-service');

process.env.VUE_CLI_TEST = false;

module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    name: 'TWISC@NTUST',
    themeColor: '#172b4d',
    msTileColor: '#172b4d',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: '#172b4d'
  },
  css: {
    sourceMap: false
  }
})
