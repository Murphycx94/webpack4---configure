/*
 * @Author: Murphy Chu - shmilyclxy@163.com
 * @Description: 将要懒加载的组件
 * @Date: 2019-08-26 16:47:45
 * @Last Modified by: Murphy Chu
 * @Last Modified time: 2019-08-26 16:51:30
 */
import React, { Component } from 'react'

console.log('lazyload.js loaded')

class Index extends Component {

  componentDidMount () {
    console.log('lazyload 组件渲染成功')
  }
  
  render () {
    return (
      <div>
        这部分是懒加载的内容哦
      </div>
    )
  }
}

export default Index
