import React from "react";
import Button from "./AddToCart";


export default function Game(props) {
    // const [cart, setCart] = React.useState(button)
    // function toggle() {
    //     setCart(prevCart => !prevCart)
    // }
    
    // let button = <Button/>
    // count === ? <button>Add To Cart</button> : <Button/>
    return (
        <div 
        className="cardMain"
        ><div className="card" >
           <img src={props.img} alt={props.name} />
           <div className="text">{props.name}</div>
        </div>
            <Button onClick={props.add}/>
        </div>
    )
}