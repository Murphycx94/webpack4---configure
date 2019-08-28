import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Eslint Demo',
      content: '这是react应用',
    };
  }

  render() {
    const { title, content } = this.state;

    return (
      <div>
        <h1>{title}</h1>
        <h2>{content}</h2>
      </div>
    );
  }
}
