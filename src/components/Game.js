import React from "react";
import Button from "./AddToCart";



export default function Game(props) {
   
    return (
        <div 
        className="cardMain"
        ><div className="card" >
           <img src={props.img} alt={props.name} />
           <div className="text">{props.name}</div>
        </div>

            {}
            <Button />
        </div>
    )
}