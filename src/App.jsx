import React, { useState } from "react";
import { Counters } from "./components/Counters";
import { Navbar } from "./components/Navbar.jsx";
const uuidv4 = require("uuid/v4");

export function App() {
  const [state, setState] = useState({
    counters: [
      { uuid: uuidv4(), value: 0 },
      { uuid: uuidv4(), value: 5 },
      { uuid: uuidv4(), value: 8 },
      { uuid: uuidv4(), value: 2 },
    ],
  });

  function handleAdd() {
    const counter = { uuid: uuidv4(), value: 0 };
    const counters = state.counters.concat([counter]);
    setState({ counters });
  }

  function handleResetAll() {
    const counters = state.counters.map(counter => {
      counter.value = 0;
      return counter;
    });
    console.log(counters);
    setState({ counters });
  }

  function handleIncrement(uuid) {
    return function() {
      const counters = [...state.counters];
      for (const counter of counters) {
        if (counter.uuid === uuid) {
          counter.value++;
        }
      }
      setState({ counters });
    };
  }

  function handleDecrement(uuid) {
    return function() {
      const counters = [...state.counters];
      for (const counter of counters) {
        if (counter.uuid === uuid && counter.value > 0) {
          counter.value--;
        }
      }
      setState({ counters });
    };
  }

  function handleDelete(uuid) {
    return function() {
      const counters = state.counters.filter(counter => counter.uuid !== uuid);
      setState({ counters });
    };
  }

  return (
    <React.Fragment>
      <Navbar counters={state.counters} />
      <Counters
        counters={state.counters}
        handleResetAll={handleResetAll}
        handleAdd={handleAdd}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        handleDelete={handleDelete}
      />
    </React.Fragment>
  );
}
