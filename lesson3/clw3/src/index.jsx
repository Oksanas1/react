import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Comment from './Comment';

const userInfo = {
  avatarUrl: 'https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745',
  name: 'Tom'
};
const rootElem = document.querySelector('#root');
const root = ReactDOM.createRoot(rootElem);

root.render(<Comment user={ userInfo } text="Good job!" date={ new Date() } />
);
