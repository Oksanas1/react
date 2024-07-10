import React, { Component } from 'react';

export default class Counter extends Component {
  constructor() {
    super();
    this.state = {
      textColor: '',
    }

    this.changeText = this.changeText.bind(this);
  };

  changeText(textColor) {
    this.setState({
      textColor,
    })
  }
  
  render() {
    return (
      <div>
        <div className="picker__title">{this.state.textColor}</div>
        <div>
          <button className="picker__button picker__button_coral" onMouseOver={() => this.changeText("Coral")} onMouseLeave={() => this.changeText("")}></button>
          <button className="picker__button picker__button_aqua" onMouseOver={() => this.changeText("Aqua")} onMouseLeave={() => this.changeText("")}></button>
          <button className="picker__button picker__button_bisque" onMouseOver={() => this.changeText("Bisque")} onMouseLeave={() => this.changeText("")}></button>
        </div>
    </div>    
    );
  }
}