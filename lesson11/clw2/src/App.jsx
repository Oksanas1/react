import React, { Component } from "react";
import Dialog from "./Dialog";

export default class App extends Component {
  state = {
    isOpen: false,
  }

  handdleOpen = () => {
    this.setState({
      isOpen: true,
    });
  }

  handdleClose = () => {
    this.setState({
      isOpen: false,
    });
  }

  render() {
    return (
      <div className="app">
        <button className="btn" onClick={this.handdleOpen}>Show dialog</button>
        <Dialog isOpen={this.state.isOpen} title="Recommendation" onClose={this.handdleClose}>
            {<p>Use immutable array methods to work with data. It will help to avoid bugs</p>}
        </Dialog>
      </div>
    );
  }
}