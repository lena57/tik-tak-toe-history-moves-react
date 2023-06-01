import React from 'react';
import Board from './Board';

const App = () => {
  const [history, setHistory] = React.useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = React.useState(0);
  const currentBoard = history[currentMove];
  const gamerX = currentMove % 2 === 0;

  const reset = () => {
    setHistory([Array(9).fill(null)]);
  };

  const onPlay = (newBoard) => {
    const newHistory = [...history.slice(0, currentMove + 1), newBoard];
    setHistory(newHistory);
    setCurrentMove(newHistory.length - 1);
  };

  const jumpToMove = (move) => {
    setCurrentMove(move);
  };

  const moves = history.map((board, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move # ' + move;
    } else description = 'Go to Game Start!';
    return (
      <li key={move}>
        <button onClick={() => jumpToMove(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="container">
      <Board gamerX={gamerX} board={currentBoard} onPlay={onPlay} />
      <div style={{ marginTop: '20px' }}>
        <ol>{moves}</ol>

        <button onClick={reset}>reset</button>
      </div>
    </div>
  );
};

export default App;
