import React from "react";

export default function Register() {
    return (
        <div className="form">
            <form>
                <div className="text1 ">GAME HUB Inc.</div>
                <div><input className="box1" type="email" placeholder="User NAME"/></div>
                <div><input className="box1" type="email" placeholder="Enter Your Email"/></div>
                <div><input className="box1" type="password" placeholder="Your Password"/></div>
                <div><input className="box1" type="password" placeholder="Confirm Password"/></div>
                <div><button className="btn1">Sign Up</button></div>
                <div className="forgot">Forgot Password</div>
            </form>
        </div>
    )
}