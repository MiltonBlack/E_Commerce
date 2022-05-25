import React, { useState } from "react";

export default function Login() {
//   let Name, Pass, Button;
//     Button = document.getElementsByTagName("button");
//    document.getElementById("email").value = Name;
//    document.getElementById("pass").value = Pass;
//    const Login = [{email: "arziblack2@gmail.com",pass: "Dice177" }];
//    function SignIn() {
//     if (Name === Login.email && Pass === Login.pass) {
//         console.log("success")
//     } else {alert("Wrong Email or password")};
//    }

    const [login, setLogin] = useState("");
    

    return (
        <div className="form">
            <form>
                <div className="text1 ">GAME HUB Inc.</div>
                <div>
                    <input 
                        className="box1" 
                        type="email" 
                        id="email"
                        placeholder="Enter Your Email"
                    />
                </div>
                <div>
                    <input 
                        className="box1" 
                        type="password" 
                        id="pass"
                        placeholder="Your Password"
                    />
                </div>
                <div>
                    <button 
                        className="btn1" 
                        value="submit"
                        
                        >Login</button></div>
                <div className="forgot">Forgot Password</div>
            </form>
        </div>
    )
}