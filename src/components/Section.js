import React, { useContext } from "react";
import GameCategory from "./GameCategory";
import { DataContext } from "./DataProvider";


export default function GameCategories() {


    const [games, setGames] = useContext(DataContext)
    console.log(games)

    
    return(
        <div>
            <div className="categories">
                <GameCategory />
            </div>
        </div>
    )
}