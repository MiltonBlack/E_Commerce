import React from "react";
import GameCategory from "./GameCategory";


export default function GameCategories() {
    return(
        <div>
            <div className="categories">
                <GameCategory />
                <GameCategory />
            </div>
        </div>
    )
}