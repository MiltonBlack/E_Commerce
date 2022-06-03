import React, { useContext } from "react";
import GameCategory from "./GameCategory";
import { DataContext } from "./DataProvider";
import Racing from "./Racing";


export default function GameCategories() {


    const [games, setGames] = useContext(DataContext)
    console.log(games)

    
    return(
        <div>
            <div className="categories">
                <GameCategory />
                <Racing/>
            </div>
        </div>
    )
}