import React, {useContext, useState} from "react";
import Game from "./Game";
import {useParams} from 'react-router-dom'
import { DataContext } from './DataProvider';

export default function GameCategory() {
    // const pcGames = GAMES.map(gam =>
    //     {
    //         return <Game
    //                     key={gam.id}
    //                     img={gam.img}
    //                     name={gam.name}
    //                  />
    //     }
    //     )
   
        // const {genre} = useParams();
        const [games, setGames] = useContext(DataContext)
        // Filtered only action games through the games array from DataContext into the Category array
        // and maped through the Category array to retrun the filtered elements.

        let Category = [];
        Category = games.filter(gameC => {
            return gameC.genre === "Action"
        })
        console.log(Category)
        // console.log(games)
        const pcList = Category.map(item => {
            return <Game key={item.id} name={item.name} img={item.img}/>
        })
        // console.log(pcList)

    return(
        <div>
            <div className="category" >
               {pcList}
            </div>
        </div>
    )
}