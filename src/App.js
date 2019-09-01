import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./layout/Navbar";
import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";
import Home from './dashboard/Home'
import Recipe from './dashboard/Social'
import SingleMedia from './dashboard/SingleMedia';
class App extends Component {
  render() {
    return (
      <Router>
        {" "}
        <div>
          <Navbar />

          <Switch>
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/home" component={Home} />
            <Route path="/media" exact component={Recipe} />
            <Route path="/media/:id" component={SingleMedia} />

          </Switch>
      </div>
      ></Router>
   
    );
  }
}

export default App;
