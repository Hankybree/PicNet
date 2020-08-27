module.exports = {
  pwa: {
    name: 'PicNet',
    themeColor: '#113260',
    msTileColor: '#051D5A',
    runtimeCompiler: true,
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
          urlPattern: new RegExp('^http://picnet.aviliax.com/'),
          options: {
            networkTimeoutSeconds: 3,
            cacheName: 'api-cache',
            cacheableResponse: {
                statuses: [0, 200],
            },
          },
        },
      ],
    }
  },
}; 