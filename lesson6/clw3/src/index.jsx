import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Page from './Page';

const rootElem = document.querySelector('#root');
const root = ReactDOM.createRoot(rootElem);
root.render(<Page />);
