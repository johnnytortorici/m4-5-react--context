import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import useInterval from "../hooks/use-interval.hook";
import useCalculateAway from "../hooks/useCalculateAway";

import { GameContext } from "./GameContext";
import GlobalStyles from "./GlobalStyles";
import Home from "./Home";
import Game from "./Game";

function App(props) {
  const {
    setTime,
    numCookies,
    setNumCookies,
    cookiesPerSecond,
  } = React.useContext(GameContext);

  useInterval(() => {
    setTime(new Date().getTime());
    setNumCookies(numCookies + cookiesPerSecond);
  }, 1000);

  useCalculateAway();

  return (
    <>
      <GlobalStyles />
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/game">
          <Game />
        </Route>
      </Router>
    </>
  );
}

export default App;
