import React from "react";
import { Router, Route } from "react-router-dom";
import history from '../../history';

import Home from "../templates/Home";
import Info from "../templates/Info";
import Question from '../templates/Question';

function App() {
  return (
    <div className="site-wrapper">
      <Router history={history}>
        <Route exact path="/" component={Home} />
        <Route exact path="/info" component={Info} />
        <Route exact path="/question/:index" component={Question} />
      </Router>
    </div>
  );
}

export default App;
