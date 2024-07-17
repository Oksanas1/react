import React from "react";

export default class App extends React.Component {
  state = {
    textValue: '',
  };

  handleChange = (e) => {
    this.setState({
      textValue: e.target.value,
    });
  };

  render() {
    return (
      <form className="search" onSubmit={() => alert(`Search text: ${this.state.textValue}`)}>
        <input type="text" className="search__input" onChange={this.handleChange.bind(this)} value={this.state.textValue} />
        <button className="search__button">Search</button>
      </form>
    );
  }
}