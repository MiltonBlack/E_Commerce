import React from "react";
import Button from "./AddToCart";
import {Link} from "react-router-dom"
import { DataContext } from './DataProvider';



export default function Game(props) {
    return (
        <div 
        className="cardMain"
        ><div className="card" key={props.id} >
            <Link to={`/gamehub/${props.id}`}>
           <img src={props.img} alt={props.name} />
           </Link>
           <div className="text">{props.name}</div>
        </div>
            <Button />
        </div>
    )
}