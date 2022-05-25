import React from "react";
import Game from "./Game";
import GAMES from "../Game.json"

export default function GameCategory() {
    const pcGames = GAMES.map(gam =>
        {
            return <Game
                        key={gam.id}
                        img={gam.img}
                        name={gam.name}
                     />
        }
        )
   
    return(
        <div>
            <div className="category">
               {pcGames}
            </div>
        </div>
    )
}