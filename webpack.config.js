const path = require('path')// node path模块
const HtmlWebpackPlugin = require('html-webpack-plugin')// 生成html并且把，js/css自动引入

module.exports = {
  // 入口文件，可以配置多个
  entry: './src/main.js',
  // 出口文件
  output: {
    filename: '[name].bundle.js',// 文件名称
    path: path.resolve(__dirname, 'dist'),// 文件保存的路劲
  },
  // 开发工具
  devtool: 'inline-source-map',// 代码出错时可以查看到打包前的代码，方便调试
  // 开发环境，提供服务器的功能，需要安装webpack-dev-server模块
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),// 告诉服务器从哪里提供内容。只有在你想要提供静态文件时才需要
    host: 'localhost',// 域名
    port: 8080,// 端口
    hot: true,// 是否启用热替换
    open: true,// 启动后是否自动打开浏览器
    publicPath: '/',// 静态资源的路劲
    /* proxy: {// 代理
      "/api": "http://localhost:3000"
    } */
  },
  // 插件
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',// html的模板
      filename: 'index.html',// html文件的名称
    })
  ]
}
