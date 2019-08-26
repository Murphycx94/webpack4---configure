const htmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const hoisting = true

module.exports = {
  mode: hoisting ? 'production' : 'none',
  entry: path.join(__dirname, './index.js'),
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].[contenthash:8].js',
    chunkFilename: '[name].[contenthash:8].js'
  },
  optimization: {
    minimize: false
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.join(__dirname, './index.html')
    })
  ]
}