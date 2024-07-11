import React, { Component } from 'react';
import Login from './Login';
import Logout from './Logout';
import Greeting from './Greeting';

export default class Auth extends Component {
  state = {
    isLoggedIn: false,
  }

  handleLoginClick() {
    this.setState({
      isLoggedIn: true,
  });
  }

  handleLogoutClick() {
    this.setState({
      isLoggedIn: false,
  });
  }

  render() {
    return (
      <div className="panel">
        <Greeting isLoggedIn={this.state.isLoggedIn} />
        {this.state.isLoggedIn ? <Logout onLogout={this.handleLogoutClick.bind(this)}/> : <Login onLogin={this.handleLoginClick.bind(this)}/>}
      </div>
    );
  };
}
