import { useState } from "react";

export default function CounterMinusOne({ count, updateCount }) {
  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={updateCount}>ADD ONE</button>
    </div>
  );
}
