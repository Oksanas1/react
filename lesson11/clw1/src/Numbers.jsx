import React, { PureComponent } from "react";
import PropTypes from 'prop-types'; 

class Numbers extends PureComponent {
  // shouldComponentUpdate(nextProps) {
  //   (this.props.number === nextProps.number 
  //     && this.props.title === nextProps.title) 
  //       ? false 
  //       : true;
  // }

  render() {
    const { title, number } = this.props;
    return (
      <div className="number">
        <span className="number__title">{title}</span>
        <span className="number__value">{number}</span>
      </div>
    );
  };
}

Numbers.propTypes = {
  title: PropTypes.string,
  number: PropTypes.number.isRequired
}

Numbers.defaultProps = {
  title: 'All numbers'
}

export default Numbers;