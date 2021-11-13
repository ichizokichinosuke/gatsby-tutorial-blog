import React from "react";
import "../styles/hero.css";

export default function Hero () {
    return (
        <div className="hero">
            <h1 className="hero-text">
                Welcome to my blog!<br />
                Enjoy lots of my posts.<br />
            </h1>
            <div className="hero-author">
                <img src="https://cdn.icon-icons.com/icons2/2620/PNG/512/among_us_player_red_icon_156942.png" className="hero-author-image" alt="avator"></img>
                <p className="hero-author-text">
                    Written by XXXX.<br />
                    Front Engineer at Hoge.inc Love RUBY
                </p>
            </div>
        </div>
    )
}
