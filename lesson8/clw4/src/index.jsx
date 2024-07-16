import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import User from './User';

const rootElem = document.querySelector('#root');
const root = ReactDOM.createRoot(rootElem);
root.render(<User userId={'Facebook'} />);
