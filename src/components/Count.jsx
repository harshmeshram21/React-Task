import React from "react";
import { useState } from "react";

function Count() {
  let count = 0;
  const [countData, setCount] = useState(count);

  const increment = () => setCount(countData + 1);
  const decrement = () => setCount(countData - 1);
  const reset = () => setCount(countData * 0);

  return (
    <div className="contContainer">
      <div className="countBox">
        <h1>Count: {countData}</h1>
        <button
          style={{
            marginRight: "20px",
            border: "none",
            color: "#9B7EBD",
            fontSize: "20px",
            backgroundColor: "pink",
            fontSize: "30px",
            cursor: "pointer",
          }}
          onClick={increment}
        >
          <i class="fa-solid fa-plus"></i>
        </button>
        <button
          style={{
            marginRight: "20px",
            border: "none",
            color: "#9B7EBD",
            fontSize: "20px",
            backgroundColor: "pink",
            fontSize: "30px",
            cursor: "pointer",
          }}
          onClick={decrement}
        >
          <i class="fa-solid fa-minus"></i>
        </button>
        <button
          style={{
            marginRight: "20px",
            border: "none",
            color: "#9B7EBD",
            fontSize: "20px",
            backgroundColor: "pink",
            fontSize: "30px",
            cursor: "pointer",
            // marginLeft: "10px",
          }}
          onClick={reset}
        >
          <i class="fa-solid fa-rotate-right"></i>
        </button>
      </div>
    </div>
  );
}

export default Count;
