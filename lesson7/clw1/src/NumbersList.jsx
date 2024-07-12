import React from 'react';

export default function NumbersList({numbers}) {
  return (
    <ul>
      {numbers.map(numb => <li key={numb}>{numb}</li>)}
    </ul>
    );
}
