import React from "react";
import Profile from "./Profile";
import ShoppingCart from "./ShoppingCart";

export default class App extends React.Component {
  state = {
    userData: {
      firstName: '',
      lastName: '',
    }
  };

  handleChange = (e) => {
    const {name , value} = e.target;

    this.setState({
      userData: {
        ...this.state.userData,
        [name]: value,
      } 
    });
  }

  render() {
    const userData = this.state.userData;
    return (
      <div className="page">
        <h1 className="title">Hello, {userData.firstName} {userData.lastName}</h1>
        <main className="content">
          <ShoppingCart userName={userData.firstName} />
          <Profile userData={userData} onChange={this.handleChange} />
        </main>
      </div>
    );
  }
}