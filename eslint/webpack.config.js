const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

process.env.NODE_ENV = 'development'

module.exports = {
  mode: process.env.NODE_ENV,
  entry: path.join(__dirname, './src/index.jsx'),
  output: {
    path: path.join(__dirname, './dist')
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          'eslint-loader'
        ]
      }
    ]
  },
  devtool: 'source-map',
  plugins: [
    new CleanWebpackPlugin(),
    new htmlWebpackPlugin({
      template: path.join(__dirname, './src/index.html')
    })
  ]
}
