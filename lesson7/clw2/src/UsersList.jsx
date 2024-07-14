import React, { Component } from 'react';
import User from './User';

export default class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortType: "-"
    };
    
    this.usersList = props.users.slice().map(({name, age}) => <User name={name} age={age} key={name}/>)
  }

  handleClick = () => {
    if(this.state.sortType === 'asc') {
      this.setState({
        sortType: 'desc',
      });

      this.usersList.sort((a, b)=> a.props.age - b.props.age);
    } else {
      this.setState({
        sortType: 'asc'
      });

      this.usersList.sort((a, b)=> b.props.age - a.props.age);
    }
  }

  render() {
    return (
      <div>
        <button className="btn" onClick={this.handleClick.bind(this)}>{this.state.sortType}</button>
        <ul className="users">
          {this.usersList}
        </ul>
      </div>
    );
  }
}
