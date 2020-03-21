const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');

module.exports = {
  configureWebpack: (config) => {
    config.module
      .rule('vue').use('vue-loader').end();
    // config: {
    //   rules: [
    //     {
    //       test: /\.vue$/,
    //       include: path.resolve(__dirname),
    //       loader: 'vue-loader',
    //     },
    //     // 它会应用到普通的 `.js` 文件
    //     // 以及 `.vue` 文件中的 `<script>` 块
    //     {
    //       test: /\.js$/,
    //       include: path.resolve(__dirname),
    //       loader: 'babel-loader',
    //     },
    //     // 它会应用到普通的 `.css` 文件
    //     // 以及 `.vue` 文件中的 `<style>` 块
    //     {
    //       test: /\.css$/,
    //       // include: path.resolve(__dirname),
    //       use: [
    //         'vue-style-loader',
    //         'css-loader',
    //       ],
    //     },
    //     {
    //       test: /\.sass$/,
    //       loaders: ['style', 'css', 'sass'],
    //     },
    //   ],
    // },
    // plugins: [
    //   new VueLoaderPlugin(),
    // ],
  },
  css: {
    loaderOptions: {
      sass: {
        data: '@import "@/style/common.scss";',
      },
    },
  },
};
