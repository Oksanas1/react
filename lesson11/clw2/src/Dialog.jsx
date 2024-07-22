import React from "react";
import PropTypes from "prop-types";

const Dialog = ({ title, children, isOpen, onClose }) => {
  if(!isOpen) return null;
 
    return (
      <div className="dialog">
        <div className="dialog__heading">
          <h4 className="dialog__title">{title}</h4>
          <button className="dialog__close-btn" onClick={onClose}>+</button>
        </div>
        <div className="dialog__content">
          {children}
        </div>
      </div>
    );
}

Dialog.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
}

Dialog.defaultTypes = {
  title: '',
}

export default Dialog;