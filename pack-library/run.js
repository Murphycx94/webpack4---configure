// /**
//  * 使用exec
//  */

// const exec = require('child_process').exec

// exec('webpack')
const func = require('./index')
const cli = require('./dist/lib/index.min')

console.log(func, cli)