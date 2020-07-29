import React, { useEffect } from "react";

import { GameContext } from "../components/GameContext";

const useCalculateAway = () => {
  const {
    time,
    numCookies,
    setNumCookies,
    cookiesPerSecond,
  } = React.useContext(GameContext);

  useEffect(() => {
    const currentTime = new Date().getTime();
    const timeAway = Math.floor((currentTime - time) / 1000);
    setNumCookies(numCookies + timeAway * cookiesPerSecond);
    // eslint-disable-next-line
  }, []);
};

export default useCalculateAway;
