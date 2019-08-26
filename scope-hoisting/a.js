import { funcA, objA } from './a-child'

console.log('a success')

funcA()

console.log(objA.value)

export default {
  value: '这是a模块'
}