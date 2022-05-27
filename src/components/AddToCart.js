import React, { useState } from "react";


export default function Button() {

    const [count, setCount] = useState(0)
    

    function remove() {
        setCount(prevCount => prevCount - 1)
    }

    function add() {
        setCount(prevCount => prevCount + 1)
    }

    const element = <div>
            {count > 0 && <button onClick={remove}>-</button>}
            {count > 0 && <span className="span">{count}</span>} 
            <button onClick={add}>{count === 0 ? "Add To Cart" : "+"}</button>
    </div>
   
   

    return (
        <div >
            {element}
        </div>
    )
}