import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Status from './Status';

const rootElem = document.querySelector('#root');
const root = ReactDOM.createRoot(rootElem);
root.render(<Status />);
