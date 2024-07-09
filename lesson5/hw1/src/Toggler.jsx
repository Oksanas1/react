import React, { Component } from 'react';

export default class Counter extends Component {
  constructor() {
    super();
    this.state = {
      isToggle: false,
    }

    this.handleToggler = this.handleToggler.bind(this);
  };

  handleToggler() {
    this.setState({
      isToggle: !this.state.isToggle,
    })
  }
  
  render() {
    return (<div className="toggler" onClick={ this.handleToggler }>{ this.state.isToggle ? 'On' : 'Off' } </div>);
  }
}