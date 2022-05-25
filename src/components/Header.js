import React from "react"
import "../App.css"

export default function Header(props) {
    return (
        <div className="filter">
            <h1 className="Header">
                <div className="title"><span>GAME </span>HUB</div>
                <div className="search"><input type="search" /><button className="btn">Search</button></div>
                <div className="list">
                    <div className="listClass">PLAY GAMES</div>
                    <div className="listClass">BUY GAMES</div>
                    <div className="listClass">CART{}</div>
                    <div className="listClass">LOGIN</div>
                    <div className="listClass">SIGN-UP</div>
                </div>
            </h1>
            
        </div>
    )
}