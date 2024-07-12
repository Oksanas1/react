import React, { Component, useEffect } from 'react';
import Login from './Login';
import Logout from './Logout';
import Spinner from './Spinner';

export default class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true,
      isSpinnerShow: false,
    }
  }

  handleClick() {
    this.setState({
      isSpinnerShow: true,
    });

    setTimeout(() => {
      this.setState({
        isSpinnerShow: false,
        isLogin: !this.state.isLogin,
      })
    }, 2000);
  }
  
  render() {
    return (
      <div className="status">
        {((this.state.isSpinnerShow) && <Spinner size={50} />)
          || (this.state.isLogin 
            ? <Login onLogin={this.handleClick.bind(this)} /> 
            : <Logout onLogout={this.handleClick.bind(this)} />)}
      </div>
    );
  };
}
