
import './App.css';
import React,{ Fragment, useState } from "react"
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom"
import Dashboard from "./components/dashboard"
import Login from "./components/login"
import Register from "./components/register"
function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
  return (
    <Fragment>
    <Router>
    <div className="container">
    <Switch>
    <Route exact path="/login" render={props => !isAuthenticated ? <Login {...props} /> : <Redirect to="/dashboard" />}/>
    <Route exact path="/register" render={props => !isAuthenticated? <Register {...props} /> : <Redirect to="/login" />}/>
    <Route exact path="/dashboard" render={props => isAuthenticated ? <Dashboard {...props} /> : <Redirect to="/login" />}/>
    </Switch>
    </div>
    </Router>
    </Fragment>
  );
}

export default App;
