import './App.css';
import React from 'react';
import Square from './Square';

function Board({ gamerX, onPlay, board }) {
  const calculateWinner = (board) => {
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
      if (board[a] && board[a] === board[b] && board[b] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const winner = calculateWinner(board);

  const handleClick = (index) => {
    if (board[index] || winner) return;
    const gamer = gamerX ? 'x' : 'o';
    onPlay(board.map((el, ind) => (ind === index ? gamer : el)));
  };

  let status;
  if (winner) {
    status = `Winner is ${winner}`;
  } else {
    status = 'Next player is ' + (gamerX ? 'x' : 'o');
  }

  return (
    <div>
      <span style={{ color: 'green', fontSize: '30px' }}>{status}</span>
      <div className="board">
        {board.map((square, ind) => (
          <Square
            square={square}
            key={ind}
            ind={ind}
            handleClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
}

export default Board;
