import React from "react";
import UserProfile from "./UserProfile";
import UserMenu from "./UserMenu";

export default class App extends React.Component {
  state = {
    userData: null,
  };

  componentDidMount() {
    this.fetchUserId();
  }

  fetchUserId = () => {
    fetch(`https://api.github.com/users/${this.props.userId}`)
      .then(response => response.json())
      .then(data => this.setState({
        userData: data,
      }));
  }

  render() {
    const userData = this.state.userData;
    return (
      <div className="page">
        <header className="header">
          <UserMenu userData={userData} />
        </header>
        <UserProfile userData={userData} />
      </div>
    );
  }
}