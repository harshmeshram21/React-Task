import React from "react";
import { useState } from "react";

function Count() {
  let count = 0;
  const [countData, setCount] = useState(count);

  const increment = () => setCount(countData + 1);
  const decrement = () => setCount(countData - 1);
  const reset = () => setCount(countData * 0);

  return (
    <div>
      <h1>Count: {countData}</h1>
      <button style={{ marginRight: "20px" }} onClick={increment}>
        Increment
      </button>
      <button onClick={decrement}>Decrement</button>
      <button style={{ marginLeft: "20px" }} onClick={reset}>
        Decrement
      </button>
    </div>
  );
}

export default Count;
