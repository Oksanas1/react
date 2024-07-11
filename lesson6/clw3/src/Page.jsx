import React, { Component } from 'react';
import Info from './Info';

export default class Page extends Component {
  state = {
    info: null,
  }

  handleClick(info) {
    this.setState({
      info,
    });
  }

  render() {
    return (
      <div className="page">
        {this.state.info && <Info info={this.state.info} />}
        <div className="actions">
          <button className="btn" onClick={this.handleClick.bind(this, 'Price is 500$. Available in 2 colors')}>IPhone 13</button>
          <button className="btn" onClick={this.handleClick.bind(this, 'Price is 650$. Not available')}>IPhone 13 Pro</button>
          <button className="btn" onClick={this.handleClick.bind(this, '')}>Clear</button>
        </div>
      </div>
    );
  };
}
