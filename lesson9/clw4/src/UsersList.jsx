import React, { Component } from "react";
import User from "./User";
import Filter from "./Filter";

export default class UsersList extends Component {
  state = {
    filterText: '',
  }
  
  handleFilterChange = event => {
    this.setState({
      filterText: event.target.value,
    });
  };

  render() {
    const filteredUsers = (this.state.filterText === '') 
      ? this.props.users
      : this.props.users.filter(user =>
        user.name.toLowerCase().includes(this.state.filterText.toLowerCase()));

    return (
      <div>
        <Filter filterText={this.state.filterText} count={filteredUsers.length} onChange={this.handleFilterChange} />
        <ul className="users">
          {filteredUsers.map(({id, name, age}) => (
            <User key={id} name={name} age={age} />
          ))}
        </ul>
      </div>
    );
  }
};
