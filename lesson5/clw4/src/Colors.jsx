import React, { Component } from 'react';


export default class Counter extends Component {
  setBodyColor = (color, event) => {
    document.body.style.backgroundColor = color;
  }
  
  render() {
    return (
      <div className='colors'>
        <button className="colors__button" onClick={ this.setBodyColor.bind(this, "#f00") } style={{background: "#f00"}}></button>
        <button className="colors__button" onClick={ this.setBodyColor.bind(this, "#0f0") } style={{background: "#0f0"}}></button>
        <button className="colors__button" onClick={ this.setBodyColor.bind(this, "#00f") } style={{background: "#00f"}}></button>
      </div>
    );
  }
}