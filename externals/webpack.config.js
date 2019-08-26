const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'production',
  externals: {
    jquery: 'jQuery',
    vue: 'Vue',
    moment: 'moment',
  },
  entry: path.join(__dirname, './index.js'),
  output: {
    path: path.join(__dirname, './dist')
  },
  module: {
    rules: [
      // {
      //   test: /\.js?$/,
      //   exclude: /node_modules/,
      //   use: ['babel-loader']
      // }
    ]
  },
  optimization: {
    splitChunks: {
      minSize: 0,
      cacheGroups: {
        commons: {
          name: 'common',
          chunks: 'all',
          minChunks: 1
        }
      }
    }
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.join('./index.html')
    })
  ]
}