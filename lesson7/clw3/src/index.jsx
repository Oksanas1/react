import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import TransactsionsList from './TransactionsList';
import transactions from './transactions';

const rootElem = document.querySelector('#root');
const root = ReactDOM.createRoot(rootElem);
root.render(<TransactsionsList transactions={transactions} />);
