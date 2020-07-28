import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import useInterval from "../hooks/use-interval.hook";
import useLocalStorage from "../hooks/useLocalStorage";

import GlobalStyles from "./GlobalStyles";
import Home from "./Home";
import Game, { calculateCookiesPerSecond } from "./Game";

function App(props) {
  useInterval(() => {
    const numOfGeneratedCookies = calculateCookiesPerSecond(purchasedItems);
    setNumCookies(numCookies + numOfGeneratedCookies);
  }, 1000);

  const [numCookies, setNumCookies] = useLocalStorage("num-cookies", 1000);
  const [purchasedItems, setPurchasedItems] = useLocalStorage("owned-items", {
    cursor: 0,
    grandma: 0,
    farm: 0,
  });

  return (
    <>
      <GlobalStyles />
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/game">
          <Game
            numCookies={numCookies}
            setNumCookies={setNumCookies}
            purchasedItems={purchasedItems}
            setPurchasedItems={setPurchasedItems}
          />
        </Route>
      </Router>
    </>
  );
}

export default App;
