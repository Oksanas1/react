import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
import Contacts from "./Contacts";
import PageNotFound from './PageNotFound';

const App = () => {
  return (
    <Router>
      <div className="page">
        <Switch>
          <Route path="/" component={<Home />}><Home /></Route>
          <Route path="/products" component={Products}><Products /></Route>
          <Route path="/contacts" component={Contacts}><Contacts /></Route>
          <Route path="*" component={PageNotFound}><PageNotFound /></Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;