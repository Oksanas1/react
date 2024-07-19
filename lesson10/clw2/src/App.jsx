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
    const target = e.target;
    const name = target.name;
    const value = target.value;

    this.setState((prevState) => ({
      userData: {
        ...prevState.userData,
        [name]: value,
      } 
    }));
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