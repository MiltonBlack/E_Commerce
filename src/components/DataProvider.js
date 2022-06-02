import React, {createContext, useState} from "react";
import GameData from "../Game.json"

export const DataContext = createContext();

export const DataProvider = (props) => {

    const [games, setGames] = useState(GameData);

  return (
    <DataContext.Provider value={[games, setGames]}>
        {props.children}
    </DataContext.Provider>
  )
}
