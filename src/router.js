import React from "react";
import {BrowserRouter as Router , Switch,Route, Link } from "react-router-dom";
import App from "./App";
import Login from "./componets/FeatureMovie/Login/Login";

const Routes = () =>{


return(
    <Router>
        <ul>
            <li><Link to="/">Login</Link></li>
            <li><Link to="/home">home</Link></li>
        </ul>

    <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/home" exact component={App} />
    </Switch>
    </Router>
   
   )    
}

export default Routes