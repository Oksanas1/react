import React from "react";
import UserForm from "./UserForm";

export default class App extends React.Component {
  createUser = (event) => {
    event.preventDefault();
    const formData = [...new FormData(event.target)].reduce((acc,[name, value]) => ({...acc, [name]: value}), {});

    console.log(formData)
  }

  render() {
    return (<UserForm createUser={this.createUser}/>);
  }
}