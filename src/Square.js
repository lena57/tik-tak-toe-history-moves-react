import React from 'react';

const Square = ({ square, handleClick, ind }) => {
  return (
    <div className="square" onClick={() => handleClick(ind)}>
      {square}
    </div>
  );
};

export default Square;
