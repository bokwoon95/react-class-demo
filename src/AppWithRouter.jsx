import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home } from "./components/Home.jsx";
import { Users } from "./components/Users.jsx";

export function AppWithRouter() {
  return (
    <React.Fragment>
      <Router>
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/users" component={Users} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}
