import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Saved from "./components/Saved";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";

const App = () =>
<Router>
  <div>
  	<Nav/>
    <Jumbotron />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/saved" component={Saved} />
    </Switch>
  </div>
</Router>

export default App;


