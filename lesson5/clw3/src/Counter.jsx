import React, { Component } from 'react';


export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    }

    this.handleClick = this.handleClick.bind(this);
    this.addCounter = this.addCounter.bind(this);
    this.decreaseCounter = this.decreaseCounter.bind(this);
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

  resetCounter() {
    this.setState({
      count: 0,
    })
  }

  handleClick(event) {
    // if(event.target.dataset.action === "decrease") {
    //   this.decreaseCounter();
    // } else if(event.target.dataset.action === "increase") {
    //   this.addCounter();
    // }

    this.resetCounter();
  }
  
  render() {
    return (
      <div className="counter">
        <button data-action="decrease" className="counter__button" onClick={ this.decreaseCounter }>-</button>
        <span className="counter__value" onClick={ this.handleClick }>{this.state.count}</span>
        <button data-action="increase" className="counter__button" onClick={ this.addCounter }>+</button>
      </div>    
    );
  }
}