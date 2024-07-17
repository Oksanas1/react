import React from "react";

export default class UserForm extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(this.formRef);
    const formEntries = [...formData.entries()];

    const checkboxes = Array.from(this.formRef.querySelectorAll('input[type="checkbox"]'));
    checkboxes.forEach(checkbox => {
      if (!formData.has(checkbox.name)) {
        formEntries.push([checkbox.name, checkbox.value]);
      }
    });

    const result = formEntries.reduce((acc, [name, value]) => ({...acc, [name]: value}), {});

    this.props.onSubmit(result);
  };

  setRef = node => {
    this.formRef = node;
  } 

  render() {
    return (
      <form ref={this.setRef}className="login-form" onSubmit={this.handleSubmit}>
        <h1 className="form-title">Profile</h1>
        <div className="form-control">
          <label className="form-label" htmlFor="name">Name</label>
          <input className="form-input" type="text" id="name" name="name" />
        </div>
        <div className="form-control">
          <label className="form-label" htmlFor="student">Student</label>
          <input className="form-input" type="checkbox" id="student" name="student" />
        </div>
        <div className="form-control">
          <label className="form-label" id="occupation" htmlFor="occupation">Occupation</label>
          <select name="occupation" className="form-input">
            <option value="london">London</option>
            <option value="new-york">New York</option>
            <option value="coconut">Sidney</option>
            <option value="mango">Berlin</option>
          </select>
        </div>
        <div className="form-control">
          <label className="form-label" id="about" htmlFor="about">About</label>
          <textarea name="about" className="form-input" />
        </div>
        <button className="submit-button" type="submit">Submit</button>
      </form>
    );
  }
};
