import React from 'react';
import Product from './Product';
import { Link, Switch, Route } from 'react-router-dom';

const Products = ({ match }) => {
  const { url, path } = match;

  return (
    <div className="page__content">
      <h1>Products</h1>
      <ul className="navigation">
        <li className="navigation__item">
          <Link to={`${url}/book`}>Book</Link>
        </li>
        <li className="navigation__item">
          <Link to={`${url}/ball`}>Ball</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path={path}>
          <span>Select a product please</span>
        </Route>
        <Route path={`${path}/:productId`} component={Product} />
      </Switch>
    </div>
  );
};

export default Products;