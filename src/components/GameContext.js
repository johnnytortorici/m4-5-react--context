import React from "react";

import useLocalStorage from "../hooks/useLocalStorage";
import items from "../data";

export const GameContext = React.createContext(null);

export const GameProvider = ({ children }) => {
  const [numCookies, setNumCookies] = useLocalStorage("num-cookies", 1000);
  const [purchasedItems, setPurchasedItems] = useLocalStorage("owned-items", {
    cursor: 0,
    grandma: 0,
    farm: 0,
  });

  const calculateCookiesPerSecond = (purchasedItems) => {
    return Object.keys(purchasedItems).reduce((acc, itemId) => {
      const numOwned = purchasedItems[itemId];
      const item = items.find((item) => item.id === itemId);
      const value = item.value;

      return acc + value * numOwned;
    }, 0);
  };

  return (
    <GameContext.Provider
      value={{
        numCookies,
        setNumCookies,
        purchasedItems,
        setPurchasedItems,
        cookiesPerSecond: calculateCookiesPerSecond(purchasedItems),
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
