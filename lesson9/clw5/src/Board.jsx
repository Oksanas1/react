import React from "react";
import Square from "./Square";

export default function Board({onSquareClick, squares}) {
  const renderSquare = index => (<Square key={index} value={squares[index]} onSquareClick={() => onSquareClick(index)} />);

  return (
    <div className="board">
      {[0,1,2].map(row => (
        <div key={row} className="board__row">
          {renderSquare(row * 3)}
          {renderSquare(row * 3 + 1)}
          {renderSquare(row * 3 + 2)}
        </div>
      ))}
    </div>
  );
};
