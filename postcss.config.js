/**
 * postcss-loader 不会添加任何前缀，需要通过配置插件，让插件来添加css前缀，比如"autoprefixer"，插件要通过npm安装，否则会保错
 */

module.exports = {
  plugins: {
    autoprefixer: {}// 这里是指autoprefixer的配置项
  }
}
