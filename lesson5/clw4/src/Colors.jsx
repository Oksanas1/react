import React, { Component } from 'react';


export default class Counter extends Component {
  handleClick = (color, event) => {
    document.body.style.background = color;
  }
  
  render() {
    return (
      <div className='colors'>
        <button className="colors__button" onClick={ this.handleClick.bind(this, "red") } style={{background: "red"}}></button>
        <button className="colors__button" onClick={ this.handleClick.bind(this, "green") } style={{background: "green"}}></button>
        <button className="colors__button" onClick={ this.handleClick.bind(this, "blue") } style={{background: "blue"}}></button>
      </div>
    );
  }
}