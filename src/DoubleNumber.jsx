import React, { useState } from 'react';

function DoubleNumber() {
  const [number, setNumber] = useState(4);

  const buttonStyle = {
    padding: '10px',
    margin: '5px',
    fontSize: '16px',
    fontWeight: 'bold',
    backgroundColor: '#2196F3', // Blue color as an example
    color: 'white',
    cursor: 'pointer',
  };

  function handleDoubleNumber() {
    setNumber(number * 2);
  }

  return (
    <>
      <span>{number}</span>
      <button style={buttonStyle} onClick={handleDoubleNumber}>
        Double the number
      </button>
    </>
  );
}

export default DoubleNumber;
