import React, { useState, useEffect } from "react";

export function Users() {
  const [state, setState] = useState({
    query: "",
    users: [],
  });

  useEffect(() => {
    (async () => {
      const res = await fetch("https://api.github.com/search/users?q=frae");
      const data = await res.json();
      console.log(data.items);
      setState({ users: data.items });
    })();
  }, []);

  return (
    <React.Fragment>
      <h1>THIS IS THE HOME PAGE</h1>
      <input id="query" type="text" autocomplete="off" />
      <ul>
        {state.users.map(user => (
          <li key={user.id}>{user.login}</li>
        ))}
      </ul>
    </React.Fragment>
  );
}
