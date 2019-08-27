import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Lazyload: null
    }
  }

  handleClick = () => {
    import(/* webpackChunkName: 'lazyload' */'./lazyload').then((Lazyload) => {
      this.setState({
        Lazyload: Lazyload.default
      })
    })
  }
  
  render () {
    const { Lazyload } = this.state
    
    return (
      <div>
        <h1>
          这是react应用
        </h1>
        <p>实践webpack代码分割和懒加载</p>
        <button onClick={this.handleClick}>
          load懒加载组件
        </button>
        {
          Lazyload && <Lazyload />
        }
      </div>
    )
  }
}

export default App
