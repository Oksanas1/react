import React, { Component } from "react";
import Board from "./Board";

  const calculateWinner = (squares) => {
    const winnerLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
  
    for (let i = 0; i < winnerLines.length; i++) {
      const [a, b, c] = winnerLines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
  
    return null;
  };

export default class Game extends Component {
  state = {
    isNextX: true,
    squares: Array(9).fill(null)
  }

  handleClick = index => {
    const { squares, isNextX } = this.state;
    if (squares[index] || calculateWinner(squares)) {
      return;
    }
    
    const newSquares = squares.slice();
    newSquares[index] = isNextX ? 'X' : 'O';
    this.setState({
      squares: newSquares,
      isNextX: !isNextX,
    });
  };

  render() {
    const { squares, isNextX } = this.state;
    const winner = calculateWinner(squares);
    const status = winner ? `Winner: ${winner}` : `Next player: ${isNextX ? 'X' : 'O'}`;

    return (
      <div className="game">
        <Board squares={squares} isWin={winner} onSquareClick={this.handleClick} />

        <div className="game-info">
          <p>{status}</p>
        </div>
      </div>
    );
  }
};
