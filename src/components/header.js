import React from "react";
import { Link } from "gatsby";
import LOGO_PNG from "../../static/logo.png";
import "../styles/layout.css";

export default function Header () {
    return (
        <header>
            <Link to="/">
                <img src={LOGO_PNG} className="logo-image" alt="logo"></img>
            </Link>
        </header>
    )
}