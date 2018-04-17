import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import Profile from "./pages/Profile";
import Layout1 from "./pages/Layout1";
import Layout2 from "./pages/Layout2";
import FourOhFour from "./pages/FourOhFour";
import Navigation from "./components/Navigation";

const App = () => (
  <Router>
    <div>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/:id" component={Profile} />
        <Route exact path="/layout1" component={Layout1} />
        <Route exact path="/layout2" component={Layout2} />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </Router>
);

export default App;
