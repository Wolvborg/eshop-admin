module.exports = {
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = process.env.VUE_APP_TITLE;
      args[0].template = './frontend/public/index.html';
      return args;
    });
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': '/home/wolborg/Codes/Repository/eshop-admin/frontend',
        vue$: 'vue/dist/vue.runtime.esm.js',
      },
    },
  },
  outputDir: 'temp',
  assetsDir: 'public',
  devServer: {
    proxy: 'http://localhost:3000',
  },
};
