import React, { Component } from 'react';


export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    }

    this.handleClick = this.handleClick.bind(this);
  }

  addCounter() {
    this.setState({
      count: this.state.count + 1,
    })
  }

  decreaseCounter() {
    this.setState({
      count: this.state.count - 1,
    })
  }

  handleClick(event) {
    event.target.dataset.action === "increase" ? this.addCounter() : this.decreaseCounter();
  }
  
  render() {
    return (
      <div className="counter">
        <button data-action="decrease" className="counter__button" onClick={ this.handleClick }>-</button>
        <span className="counter__value">{this.state.count}</span>
        <button data-action="increase" className="counter__button" onClick={ this.handleClick }>+</button>
      </div>    
    );
  }
}