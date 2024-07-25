import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

class Home extends PureComponent {
  render() {
    return (
      <div className="page__content">
        <h1>🏠</h1>
        <Link to="/products">To products</Link>
      </div>
    );
  };
}

export default Home;