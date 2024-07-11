import React, { Component } from 'react';
import Online from './Online';
import Offline from './Offline';

export default class Page extends Component {
  state = {
    isOnline: true,
  }

  render() {
    return (
      <div className="status">
        {this.state.isOnline ? <Online /> : <Offline />}
      </div>
    );
  };
}
