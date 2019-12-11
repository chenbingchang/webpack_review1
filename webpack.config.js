const path = require('path'); // node path模块
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 生成html并且把，js/css自动引入
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // 打包前自动把output下面的目录清空
const VueLoaderPlugin = require('vue-loader/lib/plugin'); // 它的职责是将你定义过的其它规则复制并应用到 .vue 文件里相应语言的块。例如，如果你有一条匹配 /\.js$/ 的规则，那么它会应用到 .vue 文件里的 <script> 块。

module.exports = {
  // 入口文件，可以配置多个
  entry: './src/main.js',
  // 出口文件
  output: {
    filename: '[name].[hash].js', // 文件名称
    path: path.resolve(__dirname, 'dist'), // 文件保存的路劲
    publicPath: '/' // 最终体现在静态资源的uri中，而不是在打包后放到指定的目录中
  },
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
      // 解析*.vue文件
      {
        test: /\.vue$/,
        use: ['vue-loader']
      },
      // 解析*.scss文件
      {
        test: /\.scss$/,
        use: [
          'style-loader',// 开发环境，生产环境要用插件extract-text-plugin
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
  // 插件
  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html', // html的模板
      filename: 'index.html' // html文件的名称
    })
  ],
  resolve: {
    alias: {}
  }
};
