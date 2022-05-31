import React from "react"
import "../App.css"
import { GiShoppingCart, GiShoppingBag, GiGamepad } from "react-icons/gi"
import { FaSignInAlt } from "react-icons/fa"

export default function Header(props) {
    return (
        <div className="filter">
            <h1 className="Header">
                <div className="title"><span>GAME </span>HUB</div>
                <div className="search"><input type="search" /><button className="btn">Search</button></div>
                <div className="list">
                    <div className="listClass">cc<br/>PLAY GAMES</div>
                    <div className="listClass"><GiShoppingBag size="2rem" color="rgb(8, 247, 8)"/><br/>BUY GAMES</div>
                    <div className="listClass"><GiShoppingCart size="2rem" color="rgb(8, 247, 8)"/><br/>CART</div>
                    <div className="listClass"><FaSignInAlt size="2rem" color="rgb(8, 247, 8)"/><br/>LOGIN</div>
                    <div className="listClass"><br/>SIGN-UP</div>
                </div>
            </h1>
            
        </div>
    )
}