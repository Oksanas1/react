import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

const rootElem = document.querySelector('#root');
const root = ReactDOM.createRoot(rootElem);

const renderTime = () => {
  const seconds = new Date().getSeconds();
  const style = ( seconds % 2 === 0 ) ? 
  { background: 'white', color: 'black' } 
  : { background: 'black', color: 'white' };

  const secondsElement = (
    <p className='seconds' style={ style }>{ seconds }</p>
  );

  root.render(secondsElement);
};

const onSetInterval = setInterval(() => renderTime(), 1000);
