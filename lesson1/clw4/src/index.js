import './styles.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

const rootElement = document.querySelector('#root');
const renderGreeting = (
  <div className='greeting'>
    <h1 className='greeting__title'>Hello, world!</h1>
    <p className='greeting__text'>I am learning React</p>
  </div>);

const root = ReactDOM.createRoot(rootElement);
root.render(renderGreeting);
