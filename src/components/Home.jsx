import React, { useEffect } from "react";

export function Home() {

  useEffect(() => {
    (async () => {
      const res = await fetch("http://localhost:3001/");
      const data = await res.text();
      console.log(data);
      // setState({ users: data.items });
    })();
  }, []);

  return (
    <React.Fragment>
      <h1>THIS IS THE HOME PAGE</h1>
    </React.Fragment>
  );
}
