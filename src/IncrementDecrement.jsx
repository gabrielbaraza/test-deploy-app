import React, { useState } from 'react';

function IncrementDecrement() {
  const [count, setCount] = useState(0);

  const buttonStyle = {
    padding: '10px',
    margin: '5px',
    fontSize: '16px',
    fontWeight: 'bold',
    backgroundColor: '#4CAF50', // Green color as an example
    color: 'white',
    cursor: 'pointer',
  };

  return (
    <div>
      <button style={buttonStyle} onClick={() => setCount(count + 1)}>
        +
      </button>
      {count}
      <button style={buttonStyle} onClick={() => setCount(count - 1)}>
        -
      </button>
    </div>
  );
}

export default IncrementDecrement;
