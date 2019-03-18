import React, { useState } from 'react';

const Example = () => {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const [lower, setLower] = useState(10);
  const [number, setNumber] = useState(5);

  return (
    <div className="hook-block">
      <h3 className="use-state-hook">Use state hook</h3>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <p>Number {lower}</p>
      <button onClick={() => setLower(lower - 1 )}>
        Descrease me
      </button>
      <p> Increase and decrease me: {number}</p>
      <button onClick={() => setNumber(number - 1 )}>
        Descrease me
      </button>
      <button onClick={() => setNumber(number + 1 )}>
        Increase me
      </button>

    </div>
  );
}
export default Example