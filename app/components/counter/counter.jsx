import React, { useState } from "react";
import styles from "./counter.css"

function Counter() {
  const [count, setCount] = useState(0);

  const counter = event => {
    if (event.target.textContent === "+") {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
  };

  return (
    <div className={styles.container}>
      <button className={styles.btn} onClick={counter}>+</button>
      <span className={styles.count}>{count}</span>
      <button className={styles.btn} onClick={counter}>-</button>
    </div>
  );
}

export default Counter;
