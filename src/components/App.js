import React from "react";
import Chest from "./Chest";
import HighScores from "./HighScores";
// import Header from "./Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App(props) {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Chest} />
        <Route path="/highscores" component={HighScores} />
      </Switch>
    </Router>
  );
}
export default App;
