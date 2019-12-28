const path = require('path'); // node path模块
const common = require('./webpack.common');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

/**
 * terser-webpack-plugin 压缩JS
 * optimize-css-assets-webpack-plugin 压缩CSS
 */

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
              /**
               * 由于css文件放到了css目录下，背景图片的地址会多了/css，但是图片放到了img目录，所以需要加'../'前缀来回到img目录
               */
              publicPath: '../',// css中引用URL资源的前缀，比如背景图片
              hmr: process.env.NODE_ENV === 'development',// 热替换，开发环境才使用
            }
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
  /**
   * mode: 'production',会使用webpack默认的压缩
   * 可以通过optimization.minimizer来覆盖webpack默认的压缩
   */
  mode: 'production',
  optimization: {
    minimizer: [
      new TerserPlugin({
        exclude: /\/node_modules/
      }),
      new OptimizeCssAssetsPlugin()
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: 'css/[name].css',
      chunkFilename: 'css/[id].css',
      ignoreOrder: false // Enable to remove warnings about conflicting order
    })
  ]
});

module.exports = prod;
