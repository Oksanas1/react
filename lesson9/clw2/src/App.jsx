import React from "react";
import UserForm from "./UserForm";

export default class App extends React.Component {
  createUser = (data) => {
    console.log(data);
  }

  render() {
    return (<UserForm createUser={this.createUser}/>);
  }
}