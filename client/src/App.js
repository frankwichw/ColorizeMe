import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import Profile from "./pages/Profile";
import Layout1 from "./pages/Layout1";
import Layout1Edit from "./pages/Layout1Edit";
import Layout2 from "./pages/Layout2";
import FourOhFour from "./pages/FourOhFour";
import Footer from "./components/Footer";
import CSS from "./App.css";

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/layout1" component={Layout1} />
        <Route exact path="/layout2" component={Layout2} />
        <Route exact path="/profile" component={Profile} />
        <Route path="/layout1/:id" component={Layout1Edit} />
        <Route component={FourOhFour} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default App;
