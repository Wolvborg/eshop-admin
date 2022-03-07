module.exports = {
  configureWebpack: {
    entry: './frontend/main.ts',
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
