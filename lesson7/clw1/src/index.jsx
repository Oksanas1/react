import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import NumbersList from './NumbersList';

const numbers = [1,2,3,4,5,6];
const rootElem = document.querySelector('#root');
const root = ReactDOM.createRoot(rootElem);
root.render(<NumbersList numbers={numbers} />);
