import React from "react";
import { Link } from "react-router-dom";
import navLogo from "../images/white-transparent.png"
import "./navbar.css";


export const Navbar = () => {
    return (
        <div className="nav-bar">
            <Link to="/" className="nav-home"><img src={navLogo} alt="logo" className="nav-logo"/></Link>
            <div className="nav-link">
                <Link to="/" className="nav-home">Home</Link>
                <Link to="/cart" className="nav-cart"><i class="bi bi-cart"></i></Link>
            </div>
        </div>
    )
};