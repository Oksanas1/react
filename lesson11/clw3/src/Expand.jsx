import React, { Component } from "react";
import PropTypes from "prop-types";

class Expand extends Component {
  state = {
    isOpen: false,
  }

  toggleIsOpen= () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    const { title, children } = this.props;
    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{title}</span>
          <button className="expand__toggle-btn" onClick={this.toggleIsOpen}>
            {this.state.isOpen 
              ? <i className="fas fa-chevron-up">-</i>
              : <i className="fas fa-chevron-down">+</i>}
          </button>
        </div>
        <div className="expand__content">
          {this.state.isOpen && children}
        </div>
      </div>
    );
  };
}

Expand.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired
};

export default Expand;