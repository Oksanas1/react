import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

const rootElem = document.querySelector('#root');
const root = ReactDOM.createRoot(rootElem);

const titleElem = (<h1 className="title">Todo List</h1>);
const listElem = (<ul className="list"></ul>);

const renderToDo = (
  <>
    { titleElem }
    <main className="todo-list">
      <div className="actions">
        <input className="task-input" type="text" />
        <button className="btn create-task-btn">Create</button>
      </div>
      { listElem }
    </main>
  </>
);

root.render(renderToDo);
