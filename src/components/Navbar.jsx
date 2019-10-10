import React from "react";

function getTotal(props) {
  return props.counters.reduce((accumulator, counter) => accumulator + counter.value, 0);
}

export function Navbar(props) {
  return (
    <nav className="navbar navbar-light bg-light">
      <span className="navbar-brand mb-0">
        Total:
        <span className="badge badge-success m-2">{getTotal(props)}</span>
      </span>
    </nav>
  );
}
