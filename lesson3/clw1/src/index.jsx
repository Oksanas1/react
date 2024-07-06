import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { Search } from './Search';

const rootElem = document.querySelector('#root');
const root = ReactDOM.createRoot(rootElem);
const userInfo = {
  name: 'Tom',
}

root.render(<Search user={userInfo} />
);
