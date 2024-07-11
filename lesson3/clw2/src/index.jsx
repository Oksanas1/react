import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Search from './Search';

const rootElem = document.querySelector('#root');
const root = ReactDOM.createRoot(rootElem);

root.render(<Search name='Tom' />
);