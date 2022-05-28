import React from "react";
import { FaGithub, FaFacebook, FaTwitter, FaInstagram, FaTwitch, FaDiscord, FaYoutube } from "react-icons/fa"

export default function Footer() {
    return (
        <div className="footer">
            <div className="about">
                <span className="heading">GAME HUB Inc.</span><br/>
                    Game Hub is an open source platform that offers the 
                    best and most enjoyable downloadable games when 
                    purchased with our licience. we are dedicated to
                    providing you with the latest games on windows PC.
                </div>
            <div>
                <span  className="heading">SOCIAL MEDIA</span><br/>
                <FaFacebook size="1.2rem" color="blue"/> Facebook<br/>
                <FaTwitter size="1rem" color="blue"/> Twitter<br/>
                <FaGithub size="1rem" /> GitHub<br/>
                <FaInstagram size="1rem" color="red"/> Instagram<br/>
                <FaTwitch size="1rem" color="purple"/> Twitch<br/>
                <FaDiscord size="1rem" color="purple"/> Discord<br/>
                <FaYoutube size="1.1rem" color="red"/> Youtube<br/>
            </div>
            <div>
                <span className="heading">USEFUL LINKS</span><br/>
                Popular Games<br/>
                Latest Games<br/>
                Online Games<br/>
                Free Games<br/>
            </div>
        </div>
    )
}