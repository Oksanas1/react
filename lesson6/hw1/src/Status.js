import React, { Component, useEffect } from 'react';
import Online from './Online';
import Offline from './Offline';

export default class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOnline: true,
      isOffline: false
    }

    window.addEventListener("offline", (e) => {
      this.setState({
        isOnline: false,
        isOffline: true
      })
    });
    
    window.addEventListener("online", (e) => {
      this.setState({
        isOnline: true,
        isOffline: false
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
