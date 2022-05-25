import React, { useState } from "react";

export default function Button() {

    const [count, setCount] = useState(0)

    function remove() {
        setCount(prevCount => prevCount - 1)
    }

    function add() {
        setCount(prevCount => prevCount + 1)
    }

    return (
        <div>
            <button onClick={remove}>-</button>
            <span className="span">{count}</span>
            <button onClick={add}>+</button>
        </div>
    )
}