import React, {useContext, useState} from "react";
import Button from "./AddToCart";
import {Link} from "react-router-dom"
import { useParams } from "react-router-dom";
import { DataContext } from './DataProvider';



export default function Game(props) {
    // const {id} = useParams();
    // const [games, setGames] = useContext(DataContext)

    // const details = games.filter((game, index) => {
    //     return game.id === id
    // })

    //     console.log(details)
   
    return (
        <div 
        className="cardMain"
        ><div className="card" key={props.id} >
            <Link to={`/games/${props.id}`}>
           <img src={props.img} alt={props.name} />
           </Link>
           <div className="text">{props.name}</div>
        </div>
            <Button />
        </div>
    )
}