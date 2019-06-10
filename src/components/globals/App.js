import React from "react";
import { Router, Route } from "react-router-dom";
import history from "../../history";

import Home from "../templates/Home";
import Info from "../templates/Info";
import Question from "../templates/Question";
import Ready from "../templates/Ready";
import LookUp from "../templates/LookUp";

function App() {
  return (
    <div className="site-wrapper">
      <Router history={history}>
        <Route exact path="/" component={Home} />
        <Route exact path="/look-up" component={LookUp} />
        <Route exact path="/info" component={Info} />
        <Route exact path="/question/:index" component={Question} />
        <Route exact path="/ready" component={Ready} />
      </Router>
    </div>
  );
}

export default App;
