import React, { useState } from "react";


function Counter() {
  const [count, setCount] = useState(0);
  const [counts, setCounts] = useState(0);

  const counter = event => {
    if (event.target.textContent === "+") {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <button onClick={counter}>+</button>
      <span>{count}</span>
      <button onClick={counter}>-</button>
    </div>
  );
}

export default Counter;
