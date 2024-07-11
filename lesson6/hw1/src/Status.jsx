import React, { Component } from 'react';
import Online from './Online';
import Ofline from './Ofline';

export default class Page extends Component {
  state = {
    isOnline: false,
  }

  render() {
    return (
      <div className="status">
        {this.state.isOnline ? <Online /> : <Ofline />}
      </div>
    );
  };
}
