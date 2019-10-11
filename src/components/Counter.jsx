import React, { useEffect } from "react";

function formatBadge(props) {
  return props.counter.value === 0 ? "Zero" : props.counter.value;
}

function getBadgeClasses(props) {
  let classes = "badge m-2 badge-";
  classes += props.counter.value === 0 ? "warning" : "primary";
  return classes;
}

console.log("constructor()");
export function Counter(props) {
  useEffect(() => console.log("componentDidMount()" + props.counter.uuid), []);
  useEffect(() => {
    return () => {
      console.log("componentWillUnmount()" + props.counter.uuid);
    };
  }, []);
  useEffect(() => console.log("componentDidUpdate()" + props.counter.uuid));
  console.log("render()" + props.counter.uuid);

  return (
    <div>
      <button
        onClick={props.handleDecrement(props.counter.uuid)}
        disabled={!props.counter.value}
        className="btn btn-success btn-sm m-2 "
      >
        -
      </button>
      <span className={getBadgeClasses(props)}>{formatBadge(props)}</span>
      <button onClick={props.handleIncrement(props.counter.uuid)} className="btn btn-success btn-sm m-2 ">
        +
      </button>
      <button onClick={props.handleDelete(props.counter.uuid)} className="btn btn-danger btn-sm m-2">
        Del
      </button>
    </div>
  );
}
