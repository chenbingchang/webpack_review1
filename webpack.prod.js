const path = require('path'); // node path模块
const common = require('./webpack.common');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const prod = merge(common, {
  module: {
    rules: [
      // 解析*.scss文件
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it uses publicPath in webpackOptions.output
              // publicPath: '../css',
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          {
            loader: 'css-loader',
            options: { importLoaders: 2 }
          },
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
      ignoreOrder: false, // Enable to remove warnings about conflicting order
    }),
  ]
});

console.log(prod)

module.exports = prod;
