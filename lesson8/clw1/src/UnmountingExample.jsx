import React from "react";
import Life from "./Life";

export default class UnmountingExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: true
    };
  }
  
  toggleComponent = () => {
    this.setState(prevState => ({
      showComponent: !prevState.showComponent
    }));
  };

  render() {
    return (
      <div>
        {this.state.showComponent && <Life />}
        <button onClick={this.toggleComponent}>
          {this.state.showComponent ? 'Unmount' : 'Mount'}
        </button>
      </div>
    );
  }
}