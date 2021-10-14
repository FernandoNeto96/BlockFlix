import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "../componets/Navbar/Navbar";
//import { MyProvider } from "./context/context";
import { rotas } from "./Router";

export default function RouterExample() {
  return (
    <Router>

      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        {rotas.map((route) => {
          const Component = route.component;
          return (
            
            <Route key={route.path} exact path={route.path}>
              {route.path === "/"?"":<Navbar/>}
              <Component />
            </Route>
          );
        })}
      </Switch>
    </Router>
  );
}

