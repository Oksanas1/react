import React from "react";
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import Home from "./Home";
import Products from "./Products";

const App = () => {
  return (
    <Router>
      <div className="page">
        <ul className="navigation">
          <li className="navigation__item">
            <Link to="/">Home</Link>
          </li>
          <li className="navigation__item">
            <Link to="/products">Products</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/products" component={Products} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;