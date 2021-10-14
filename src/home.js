import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
//import { MyProvider } from "./context/context";
import { rotas } from "./router";

export default function RouterExample() {
  return (
    <Router>
      <Navbar />

      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        {rotas.map((route) => {
          const Component = route.component;
          return (
            <Route key={route.path} path={route.path}>
              <Component />
            </Route>
          );
        })}
      </Switch>
    </Router>
  );
}

function Home() {
  return <h2>Hoe</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}



