import a from './a'
import b from './b'

console.log('index - a:', a)
console.log('index - b:', b)

// 测试懒加载的，与本文内容无关
const button = document.getElementById('button')
button.onclick = () => {
  import(/* webpackChunkName: 'lazyload' */'./lazyload').then((lazyload) => {
    console.log(lazyload)
  })
}
