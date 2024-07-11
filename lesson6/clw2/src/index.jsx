import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Mailbox from './Mailbox';

const rootElem = document.querySelector('#root');
const root = ReactDOM.createRoot(rootElem);
root.render(<Mailbox unreadMessages={[]}/>);
