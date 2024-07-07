import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Greeting from './Greeting';

const userInfo = {
  firstName: 'John',
  lastName: 'Doe',
  birthDate: new Date('07.07.2007'),
};
const rootElem = document.querySelector('#root');
const root = ReactDOM.createRoot(rootElem);

root.render(<Greeting lastName={ userInfo.lastName } firstName={ userInfo.firstName } birthDate={ userInfo.birthDate } />
);
