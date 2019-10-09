const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const getDependenciesWebpackPlugin = require('./get-dependencies-webpack-plugin/index')
const TerserPlugin = require('terser-webpack-plugin')
const path = require('path')

module.exports = {
  mode: 'none',
  entry: {
    'large-number': path.join(__dirname, './src/index.js'),
    'large-number.min': path.join(__dirname, './src/index.js')
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].js',
    library: 'largeNumber',
    libraryTarget: 'umd',
    libraryExport: 'default',
    globalObject: "typeof window !== 'undefined' ? window : this"
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        include: /\.min\.js$/
      })
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new getDependenciesWebpackPlugin()
  ]
}
