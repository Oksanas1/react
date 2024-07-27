import React from 'react';
import { Route, Link, Switch, useRouteMatch } from 'react-router-dom';
import User from './User';

const Users = () => {
  let { path, url } = useRouteMatch();

  return (
    <div>
      <h1>Users</h1>
      <ul className="navigation">
        <li className="navigation__item">
          <Link to={`${url}/github`}>Github</Link>
        </li>
        <li className="navigation__item">
          <Link to={`${url}/facebook`}>Facebook</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path={path}>
          <span>Select a user please</span>
        </Route>
        <Route path={`${path}/:usersId`} component={User} />
      </Switch>
    </div>
  );
};

export default Users;
