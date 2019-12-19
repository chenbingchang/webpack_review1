const path = require('path'); // node path模块
const common = require('./webpack.common');
const merge = require('webpack-merge');

const dev = merge(common, {
  // 开发工具
  devtool: 'inline-source-map', // 代码出错时可以查看到打包前的代码，方便调试
  // 开发环境，提供服务器的功能，需要安装webpack-dev-server模块
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'), // 告诉服务器从那个目录提供内容。
    host: 'localhost', // 域名
    port: 8080, // 端口
    hot: true, // 是否启用热替换
    open: true // 启动后是否自动打开浏览器
    // publicPath: '/assets/' // 虚拟目录，
    /* proxy: {// 代理
      "/api": "http://localhost:3000"
    } */
  },
  module: {
    rules: [
      // 解析*.scss文件
      {
        test: /\.scss$/,
        use: [
          'style-loader', // 开发环境，生产环境要用插件mini-css-extract-plugin抽成单独的文件
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
});
console.log(process.env.NODE_ENV)
module.exports = dev;
