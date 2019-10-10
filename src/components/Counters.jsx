import React from "react";
import { Counter } from "./Counter";

export function Counters(props) {
  return (
    <div>
      <button className="btn btn-success m-2" onClick={props.handleAdd}>
        Add
      </button>
      <button className="btn btn-warning m-2" onClick={props.handleResetAll}>
        Reset
      </button>
      {props.counters.map(counter => (
        <Counter
          key={counter.uuid}
          counter={counter}
          handleIncrement={props.handleIncrement}
          handleDecrement={props.handleDecrement}
          handleDelete={props.handleDelete}
        />
      ))}
    </div>
  );
}
