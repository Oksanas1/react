import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Game from './Game';

const rootElem = document.querySelector('#root');
const root = ReactDOM.createRoot(rootElem);
root.render(<Game />);
