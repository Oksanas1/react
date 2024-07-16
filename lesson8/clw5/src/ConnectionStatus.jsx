import React from "react";

export default class App extends React.Component {
  state = {
    isConnect: true
  };

  componentDidMount() {
    window.addEventListener("offline", (e) => this.onStatusChange(false));  
    window.addEventListener("online", (e) => this.onStatusChange(true));
  }

  componentWillUnmount() {
    window.removeEventListener("offline", (e) =>  this.onStatusChange());
    window.removeEventListener("online", (e) => this.onStatusChange());
  }

  onStatusChange = (isConnect) => {
    this.setState({
      isConnect,
    });
  };

  render() {
    return this.state.isConnect ? (<div className="status">online</div>) : (<div className="status status_offline">offline</div>);
  }
}