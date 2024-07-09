import React, { Component } from 'react';


export default class GoodButton extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    alert(event.target.textContent);
  }
  
  render() {
    return (<button className="fancy-button" onClick={ this.handleClick }>Click me!</button>);
  }
}