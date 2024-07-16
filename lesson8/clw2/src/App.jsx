import React, { Component }  from "react";
import Clock from "./Clock";

const locations = [
  {
    offset: 0, location: 'London',
  },
  {
    offset: 2, location: 'Kyiv',
  },
  {
    offset: -5, location: 'New York',
  },
];

export default class App extends Component {
  state = {
    isShowClock: true,
  };

  toggleClock = () => {
    this.setState(prevState => ({
      isShowClock: !prevState.isShowClock,
    }));
  };

  render() {
    return (
      <div>
        <button onClick={this.toggleClock}>
          {this.state.isShowClock ? 'hide' : 'show'}
        </button>
        { this.state.isShowClock && 
          <div  className="clocks__list">
            {locations.map(({offset, location}) => <Clock offset={offset} location={location} key={location}/>)}
          </div>
        }
      </div>
    );
  }
}
