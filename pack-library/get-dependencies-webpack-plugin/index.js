const _ = require('lodash');
const fs = require('fs')

const NAME_REG = /\/node_modules\/([\S]+?)\//

function getDep (stats) {
  console.log('type:', Object.prototype.toString.call(stats.modules))
  if (_.isEmpty(stats.assets) && !_.isEmpty(stats.children)) {
    stats = stats.children[0]
  }
  const dependencies = []
  stats.modules.forEach(m => {
    if (m.issuerName) {
      const res = m.issuerName.match(NAME_REG)
      if (res) dependencies.push(res[1])
    }
  })
  fs.writeFile('./dependencies.json', JSON.stringify(dependencies))
  return dependencies
}

class getDependenciesWebpackPlugin {
  apply(compiler) {
    console.log('compiler: ', compiler)
    this.compiler = compiler
    compiler.hooks.done.tapAsync('get-dependencies', (stats, cb) => {
      cb = cb || (() => {})
      const dependencies = getDep(stats.toJson())
      console.log('----------------', '', dependencies, '', '----------------')
      cb()
    })
  }
}

module.exports = getDependenciesWebpackPlugin;
