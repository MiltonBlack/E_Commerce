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
                <FaFacebook/>Facebook<br/>
                <FaTwitter/>Twitter<br/>
                <FaGithub/>GitHub<br/>
                <FaInstagram/>Instagram<br/>
                <FaTwitch/>twitch<br/>
                <FaDiscord/>Discord<br/>
                <FaYoutube/>Youtube<br/>
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