import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Toggler from './Toggler';

const rootElem = document.querySelector('#root');
const root = ReactDOM.createRoot(rootElem);

root.render(<Toggler />);
