import React from "react";
import { Router, Route } from "react-router-dom";
import history from "../../history";

import Home from "../templates/Home";
import Info from "../templates/Info";
import Explainer from "../templates/Explainer";
import Question from "../templates/Question";
import Ready from "../templates/Ready";
import Results from "../templates/Results";
import LookUp from "../templates/LookUp";
import Calculating from "../templates/Calculating";
import LastScreen from "../templates/LastScreen";

function App() {
  return (
    <Router history={history}>
      <Route exact path="/" component={Home} />
      <Route exact path="/look-up" component={LookUp} />
      <Route exact path="/info" component={Info} />
      <Route exact path="/explainer" component={Explainer} />
      <Route exact path="/question/:index" component={Question} />
      <Route exact path="/calculating" component={Calculating} />
      <Route exact path="/result/:id" component={Results} />
      <Route exact path="/ready" component={Ready} />
      <Route exact path="/final" component={LastScreen} />
    </Router>
  );
}

export default App;
