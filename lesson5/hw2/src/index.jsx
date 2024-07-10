import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import ColorPicker from './ColorPicker';

const rootElem = document.querySelector('#root');
const root = ReactDOM.createRoot(rootElem);

root.render(<ColorPicker />);
