import React, { Component, useEffect } from 'react';
import Online from './Online';
import Offline from './Offline';

export default class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOnline: true
    }

    window.addEventListener("offline", (e) => {
      this.setState({
        isOnline: false,
      })
    });
    
    window.addEventListener("online", (e) => {
      this.setState({
        isOnline: true,
      })
    });
  }
  
  render() {
    return (
      <div className="status">
        {this.state.isOnline ? <Online /> : <Offline />}
      </div>
    );
  };
}
