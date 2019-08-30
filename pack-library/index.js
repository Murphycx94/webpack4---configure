const isProd = process.env.NODE_ENV === 'production'

if (isProd) {
  module.exports = require('./dist/large-number.min.js')
} else {
  module.exports = require('./dist/large-number.js')
}