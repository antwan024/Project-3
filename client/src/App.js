import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Achievements from "./pages/Achievements";
// import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Achievements} />
          <Route exact path="/achievements" component={Achievements} />
          <Route exact path="/achievements/:id" component={Achievements} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
