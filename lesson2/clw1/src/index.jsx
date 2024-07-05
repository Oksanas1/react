import React from 'react';
import ReactDOM from 'react-dom/client';

const rootElem = document.querySelector('#root');

const root = ReactDOM.createRoot(rootElem);

root.render(
  <>
    <h1>Search Form</h1>
    <div>
      <input type="text" />
      <button>Search</button>
    </div>
  </>
);
