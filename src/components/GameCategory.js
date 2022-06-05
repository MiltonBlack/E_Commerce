import React, {useContext} from "react";
import Game from "./Game";
import { DataContext } from './DataProvider';

export default function GameCategory() {
   
        const [games] = useContext(DataContext)
        // Filtered only action games through the games array from DataContext into the Category array
        // and maped through the Category array to retrun the filtered elements.

        let Category = [];
        Category = games.filter(gameC => {
            return gameC.genre === "Action"
        })
        console.log(Category)
        console.log(games)
        const pcList = Category.map(item => {
            return <Game key={item.id} name={item.name} img={item.img} />
        })
        // console.log(pcList)

    return(
        <div><p className="text2">Action games</p>
            <div className="category" >
                {/* <h1 className="text2">Action Games</h1> */}
               {pcList}
            </div>
        </div>
    )
}