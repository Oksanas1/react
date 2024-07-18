import React from "react";

export default function Square({index, value, onSquareClick }) {
  return (
    <div data-index={index} className="square" onClick={ onSquareClick }>
      <p className="square__value">{value}</p>
    </div>
  );
}
