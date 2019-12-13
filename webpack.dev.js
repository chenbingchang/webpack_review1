const path = require('path'); // node path模块
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 生成html并且把，js/css自动引入
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // 打包前自动把output下面的目录清空
const VueLoaderPlugin = require('vue-loader/lib/plugin'); // 它的职责是将你定义过的其它规则复制并应用到 .vue 文件里相应语言的块。例如，如果你有一条匹配 /\.js$/ 的规则，那么它会应用到 .vue 文件里的 <script> 块。
const UglifyJsPlugin = require('uglifyjs-webpack-plugin'); // 压缩js，mode改成production会内部自己调用Uglifyjs

/**
 * HtmlWebpackPlugin 插件，自动生成HTML并且自动引入打包好的js
 * uglifyjs-webpack-plugin 插件，压缩JS
 * babel-loader loader，编译js
 * mini-css-extract-plugin 插件，把css抽取成单独的文件
 * optimize-css-assets-webpack-plugin 插件，压缩css
 * postcss-loader loader，给css加兼容性前缀
 * CleanWebpackPlugin 插件，打包前自动把output下面的目录清空
 * 要导入 CSV、TSV 和 XML，你可以使用 csv-loader 和 xml-loader。让我们处理这三类文件：
 */

// 1、抽取公共代码，import自己写的公共代码；2、vendor抽取成单独文件

module.exports = {
  // 入口文件，可以配置多个
  entry: './src/main.js',
  // 出口文件
  output: {
    filename: '[name].js', // 文件名称
    path: path.resolve(__dirname, 'dist'), // 文件保存的路劲
    publicPath: '/', // 最终体现在静态资源的uri中，而不是在打包后放到指定的目录中
    chunkFilename: '[name].bundle.js' // 非入口(non-entry) chunk 文件的名称。例如动态引入的文件
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
      // 编译js
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      // 解析*.vue文件
      {
        test: /\.vue$/,
        use: ['vue-loader']
      },
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
      },
      /**
       * 解析图片
       * file-loader/url-loader
       * 如果图片变成<img src="[object Module]"/>这种情况是因为版本问题，可以使用的："url-loader": "^2.1.0","file-loader": "^4.2.0"
       */
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024 // 1KB，小于1KB的图片将被转换成base64，否则就是正常的图片
            }
          }
        ]
      },
      // 解析字体
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      },
      // 解析 CSV、TSV 和 XML，import进入后会变成json形式，如果没有需要这些配置可以去掉
      {
        test: /\.(csv|tsv)$/,
        use: ['csv-loader']
      },
      {
        test: /\.xml$/,
        use: ['xml-loader']
      }
    ]
  },
  optimization: {
    // 压缩JS,这是最新的方式，以前一般是放到plugins配置里面
    // minimizer: [new UglifyJsPlugin()]
    /**
     * 对vendor公共代码进行切割，会把用到的第三方库都放到一个文件里
     */
    splitChunks: {
      // chunks: 'all', // 这表明将选择哪些块进行优化,有效值为all，async和initial
      // name: 'splitChunks',
    }
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
  // 解析
  resolve: {
    // import或require时的别名
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
};
