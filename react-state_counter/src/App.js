import React, { useState } from "react";
import "./styles.css";

console.clear;

export default function App() {
  const [count, setcount] = useState(0);

  function increment() {
    setcount((prevCount) => prevCount + 1);
    console.log("🤙");
  }

  function decrement() {
    setcount((prevCount) => prevCount - 1);
    console.log("👎");
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <div className="button-container">
        <button type="button" onClick={decrement}>
          -
        </button>
        <button type="button" onClick={increment}>
          +
        </button>
      </div>
    </div>
  );
}
