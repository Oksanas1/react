import React from 'react';
import Transaction from './Transaction';

export default function TransactsionsList({transactions}) {    
  const transactionsList = transactions.map((props) => <Transaction key={props.id} {...props} />)

  return (
    <ul className="transactions">
      {transactionsList}
    </ul>
    );
}
