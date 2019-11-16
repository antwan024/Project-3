import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Achievements from "./pages/Achievements";
import Events from "./pages/Events";
// import Home from "./pages/Home";
// import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
        <Route exact path="/" >
              <Home />
          </ Route>
              
          <Route exact path="/achievements" component={Achievements} />
          <Route exact path="/achievements/:id" component={Achievements} />
          <Route exact path="/events" component={Events} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}


function Home() {
  return (
    <div>
      
      <h5>Welcome to having a Best Life</h5>
    </div>
  );
}

export default App;