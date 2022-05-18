import React from "react"
import "./App.css"

export default function Header() {
    return (
        <div>
            <h1 className="Header">
                <div className="title"><span>GAME </span>HUB</div>
                <div><input type="search" /></div>
                <div className="list">
                    <div className="listClass">PLAY GAMES</div>
                    <div className="listClass">BUY GAMES</div>
                    <div className="listClass">CART</div>
                    <div className="listClass">LOGIN</div>
                    <div className="listClass">SIGN-UP</div>
                </div>
            </h1>
        </div>
    )
}