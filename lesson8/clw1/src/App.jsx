import React from "react";
import Life from "./Life";

export default class App extends React.Component {
  state = {
    showLife: true
  };

  toggleLife = () => {
    this.setState(prevState => ({
      showLife: !prevState.showLife
    }));
  };

  render() {
    return (
      <div>
        <button onClick={this.toggleLife}>
          Toggle Life Component
        </button>
        {this.state.showLife && <Life />}
      </div>
    );
  }
}