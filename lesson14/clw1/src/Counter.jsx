import React, { useState } from "react";

const Counter = () => {
  const [ count, setCount] = useState(0);

  function decrementCount() {
    setCount(count - 1);
  }

  function incrementCount() {
    setCount(count + 1);
  }

  return (
    <div className="counter">
      <button className="counter__button" onClick={decrementCount.bind(this)}>-</button>
      <span className="counter__value"> {count} </span>
      <button className="counter__button" onClick={incrementCount.bind(this)}>+</button>
    </div>
  );
};

export default Counter;