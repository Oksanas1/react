import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import UsersList from './UsersList';

const generateUsers = () => {
  const users = [];
  for (let i = 1; i < 11; i++) {
    users.push({
      id: i,
      name: `User${i}`,
      age: Math.floor(Math.random() * 50) + 18,
    });
  }
  return users;
};

const rootElem = document.querySelector('#root');
const root = ReactDOM.createRoot(rootElem);
root.render(<UsersList users={generateUsers()} />);
