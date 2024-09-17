import { useState } from "react";
export default function CounterAddOne(props) {
  return (
    <div>
      <div>Count: {props.count}</div>
      <button onClick={props.updateCount}>ADD ONE</button>
    </div>
  );
}
