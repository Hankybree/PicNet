const Dotenv = require('dotenv-webpack')

module.exports = {
  pwa: {
    name: 'PicNet',
    themeColor: '#113260',
    msTileColor: '#051D5A',
    assetsVersion: 1.0,
    manifestOptions: {
      background_color: '#051D5A'
    },
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    workboxOptions: {
      runtimeCaching: [
        {
          handler: 'NetworkFirst',
          urlPattern: 'https://picnet.aviliax.com/api/'
        }
      ]
    }
  },
  configureWebpack: {
    plugins: [
      new Dotenv()
    ]
  }
}; 