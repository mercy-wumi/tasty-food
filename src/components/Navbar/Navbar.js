import React from 'react';
import "./Navbar.css"
import logo from "../../images/wrapped_green_logo@2x.png";
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar">
                <div className="nav-container">
                    <div className="logo-name">
                        <img src={logo} alt="logo" className="nav-logo" />
                    </div>
                    <div className="openMenu"><FaBars /></div>
                    <ul className="navbar-menu">
                        <li><a href="#">About</a></li>
                        <li><a href="#">Menu</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
export default Navbar;